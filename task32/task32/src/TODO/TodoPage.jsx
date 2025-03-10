import './todoPage.css'
import FormTodo from "./components/Form/FormTodo.jsx";
import { ToastContainer } from 'react-toastify';

export function todoPage() {
  return (
    <>
      <FormTodo/>
        <ToastContainer/>
    </>
  )
}

export default todoPage
