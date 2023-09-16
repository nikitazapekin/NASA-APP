import React, { useEffect } from "react"
import { useTypedSelectors } from "../hooks/useTypedSelectors"
import { useActions } from "../hooks/useActions"
const TodoList: React.FC =()=> {
    const {page, error, loading, todos, limit}=useTypedSelectors(state=> state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages= [1,2,3,4,5 ]
    useEffect(()=> {
fetchTodos(page, limit)
    }, [page])
    if(loading){
        return <h1>is loading</h1>
      }
      if(error){
        return <h1>{error}</h1>
      }
    return (
        <div>
{todos.map(todo=> (
    <div key={todo.id}>{todo.id} - {todo.title}</div>
)
    )}
<div style={{display: "flex", justifyContent: "center"}}>

    {pages.map(p=> (
        <div
        onClick={()=> {
setTodoPage(p)
        }}
        style={{border: p===page? '2px solid green' : "2px solid red", padding: "10px" }}>{p}</div>
        ))}
        </div>
        </div>
    )
}
export default TodoList