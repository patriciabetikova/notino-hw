import React, { FC } from "react"
import Todo from "../../components/Todo"

// rework this into regular api call, feel free to use any open api
let todos = (): Promise<{ id: string; title: string }[]> =>
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

export const HomePage: FC = () => {
  const [state, setState] = React.useState<{ id: string; title: string }[]>([])

  React.useEffect(() => {
    ;(async () => {
      let awaitedTodos = await todos()
      console.log("awaited", awaitedTodos)
      for (let i = 0; i < awaitedTodos.length; i++) {
        setState(prev => [...prev, awaitedTodos[i]])
      }
    })()
  }, [])

  return (
    <div>
      {state.map(todo => (
        <Todo todo={todo} />
      ))}
    </div>
  )
}
