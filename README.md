# Homework assignment

Here is sample code that is not by far ideal.

1. Refactor code to production-grade quality.
2. Find and describe bugs and issues.
3. Add styling by your choice. (You can add styling library)
4. Demonstrate connection to backend API.
5. Add Todo detail page (add routing to app, use context api for state managment from fetch todos to render todos and detail)
6. Todo component has defined shouldComponentUpdate lifecycle, but it can be done better, adjust it
7. Optional: rewrite Todo component to FC (choose if you want, prepare explanation)

Issues found in App.tsx file

```
// rework this into regular api call, feel free to use any open api
var todos = (): Promise<{id: string; title: string;}[]> => new Promise((res) => {
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
    ]);
  }, 100);
});
```

First issue i see is in todo variable by using `var` in general. There's no good reason to use function scope variable that is prone to bugs, i recommend using const/let.

```
  React.useEffect(() => {
    (async () => {
      var awaitedTodos = await todos();
      for (var i = 0; i < awaitedTodos.length; i++) {
        setState([...state, awaitedTodos[i]]);
      }
    })()
  })
```

Second issue is in useEffect causing many many re-renders by omitting dependency array. In our usecase we need to set todos only once on mount after fetching them, therefore we need empty array.
Third issue is incorrectly setting state, that is asynchronous. Best would be to work with most recent state that is received in setState function, e.g.:

```
setState((prev) => [...prev, awaitedTodos[i]]);
```

```

return (

    <div>
        {state.map((todo) => (
            <Todo todo={todo} />
        ))}
    </div>
);
```

↑ And last issue is not providing key for Todo component.
