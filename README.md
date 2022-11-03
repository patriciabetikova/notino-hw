# To run the project locally

1.  `npm i`
2.  `npm start`

## Homework assignment description

Here is sample code that is not by far ideal.

1. Refactor code to production-grade quality.
2. Find and describe bugs and issues.
3. Add styling by your choice. (You can add styling library)
4. Demonstrate connection to backend API.
5. Add Todo detail page (add routing to app, use context api for state managment from fetch todos to render todos and detail)
6. Todo component has defined shouldComponentUpdate lifecycle, but it can be done better, adjust it
7. Optional: rewrite Todo component to FC (choose if you want, prepare explanation)

# Review

## Issues found in App.tsx file

```jsx
// rework this into regular api call, feel free to use any open api
var todos = (): Promise<{ id: string, title: string }[]> =>
  new Promise(res => {
    setTimeout(() => {
      res([
        {
          id: "1",
          title: "Go shopping",
        },
        {
          id: "2",
          title: "Job interview",
        },
        {
          id: "3",
          title: "Prepare homework",
        },
      ])
    }, 100)
  })
```

First issue i see is in todo variable by using `var` in general. There's no good reason to use function scope variable that is prone to bugs, i recommend using const/let.

```jsx
React.useEffect(() => {
  (async () => {
    var awaitedTodos = await todos()
    for (var i = 0; i < awaitedTodos.length; i++) {
      setState([...state, awaitedTodos[i]])
    }
  })()
})
```

Second issue is in useEffect causing many re-renders by omitting dependency array. In our use case we need to set todos only once on mount after fetching them, therefore we need empty array.
Third issue is using for cycle, there is absolutely no need for it. Data we receive is an array, state should be an array, simply set data as a state for our use case.
Fourth issue is incorrectly setting state, that is asynchronous. Best would be to work with most recent state that is received in setState function, e.g. along with rework of the for cycle:

```js
setState(prev => [...prev, awaitedTodos])
```

```jsx
return (
  <div>
    {state.map(todo => (
      <Todo todo={todo} />
    ))}
  </div>
)
```

↑ And last issue is not providing key for Todo component.

#

## Issues found in Todo.tsx

```jsx
class Todo extends React.Component<any> {
  shouldComponentUpdate(prevProps: any) {
    if (this.props != prevProps) {
      return true
    }
    return false
  }

  handleOnClick() {
    window.location.href = "/detail"
  }

  render() {
    return (
      <div>
        <div onClick={this.handleOnClick}>{this.props.todo.title}</div>
      </div>
    )
  }
}
```

First, for comparing props to prevent re-render would be best to use Pure Component, if we would like to stick with class component. It does shallow comparison of props by default, without the need to write the comparison by hand.

Second, if we would want to write it by hand, we definitely cannot use double equals for comparing objects, since we would be comparing their references and they're never equal.

Third issue is the way we redirect to detail page. `window.location.href` handles change of url by loading the app with the set url, which is not optimal. Best is to use HTML5 history API that is implemented via react-router-dom.

# Solution implementation and comment

1. Folder structure

For our app to be production ready, I focused on creating readable folder structure. For top-level App component there's its own App folder, that consists of App.tsx, GlobalStyle to normalize styling, and AppRoutes that focuses on Routing, which would also handle Redirecting if we had some need for login and private routing.

Next worth mentioning is components folder, that includes general components used on multiple places within the app, questionable can be Todo components, that are currenty only used in one place each, so alternative is to place them in their specific parent's folder.

Folder context consists of Context and Provider component to keep logic separate from place of implementation for better readability.

2. Arrow function components instead of classes.

Well, it's 2022, class components only make sense if we're working on legacy code and there's no budget for refactor, and lifecycle methods handle too much logic for quick rewrite into function components with hooks.

3. Styling

I decided to use custom components as opposed to some component library tak can easily double the bundle size. For styling used styled-components, kept mobile screen and large desktop in mind.

## Places to improve

Currently assignment didn't mention any ability to create new, or edit existing to-dos, therefore the application basically just fetches array of todos from custom made mock api and stores them into context. Any modification and mutation of the data is towards the context, to showcase handling of changes via context api. In usual production app, the deletion and completion of todo would be handled via put/delete api call.

Another possible improvement is towards the UX, there could be sorting of to-dos based on their checked state, automaticly put unchecked ones on top, could be handled with some smooth animation etc.
