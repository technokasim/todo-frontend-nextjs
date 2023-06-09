import "bootstrap/dist/css/bootstrap.min.css"
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { title } from 'process'

export default function Home() {

  const [todos,setTodos] = useState([])
  const [title,setTitle] = useState('')
  const [todoid,setTodoId] = useState('')
  
  useEffect(()=>{
    fetchTodos()

  },[])

  function fetchTodos(){
    axios.get('/api/todos').then((response)=>{
      setTodos(response.data)
      console.log(todos)
    })
  }
  function deleteTodo(id){
    let param = {'_method':'delete'};
    axios.post('/api/todos/' + id , param).then((response)=>{
      setTitle('')
      fetchTodos()
      setTodoId()
    })
  }

  function editTodo(id){
    setTodoId(id)
    todos.map((item)=>{
      if(item.id == id){
        setTitle(item.title)
      }
    })
  }

  const titleChange = (e) =>{
    setTitle(e.target.value)
  }

  const submitForm = (e) =>{
    e.preventDefault()
    var formData = new FormData()
    formData.append('title', title) 
    formData.append('is_done',0)
    let url = 'api/todos';
    if(todoid != ''){
      url = 'api/todos/'+todoid;
      formData.append('_method', 'PUT')
    }

    axios.post(url, formData).then((Response)=>{
      setTitle('')
      fetchTodos()
      setTodoId()
    })
  }

  return (
    <main>
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-sm-7 ">
          <h1 className='text-center'>Todo app</h1>

            <form method="POST" onSubmit={submitForm}>
            <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Type..." name="title" value={title} onChange={titleChange}/>
    <div className="input-group-append">
      <button type="submit" className="input-group-text">Save</button>
    </div>
  </div>
            </form>

            <table className='table table-border'>
              <thead>
                <tr>
                  <th>Sn</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>

              </thead>
              <tbody>
             
                  {todos && 
                    todos.map((item, i)=>(
                      <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.title}</td>
                        <td>
                          <button className="btn btn-primary btn-sm" onClick={()=> editTodo(item.id)}>Edit</button>
                          &nbsp; <button className="btn btn-danger btn-sm" onClick={()=> deleteTodo(item.id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                       <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </main>
  )
}
