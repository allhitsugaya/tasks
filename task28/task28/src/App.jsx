
import './App.css'
import {ErrorMessage, Field, FieldArray, Form, Formik} from "formik";
import {validationSchema} from "./assets/schema.jsx";
import {useState} from "react";



function App() {
    const [todo , setToDo] = useState([]);
    const handleDelete = (index)=>{
        const newTodos = todo.filter((todos, i)=> i !== index);
        setToDo(newTodos);
    }
  return (
    <div className="container">
        <Formik
            initialValues={{
                todotask: ""
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
                setToDo(prevState => [...prevState, values.todotask]);
            }}>
            <Form>
                <FieldArray name='todotask'/>
                <Field type='text' name="todotask" placeholder='Text'/>
                <ErrorMessage name='todotask' component='p' className='error'/>
                    <button type="submit" className='btn-outline-primary'>Submit</button>
            </Form>
        </Formik>
        <div>
            <h2>Tasks:</h2>
            {todo.map((todos, index) => {
                return <p key={index}>{todos}
                    <button type='button' className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button></p>
            })
            }

        </div>
    </div>
  )
}

export default App;
