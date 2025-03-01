import { BrowserRouter, Route } from "react-router-dom"
import SignUp from "./components/auth/signUp"
import Login from "./components/auth/Login"
import { Routes } from "react-router-dom"
import Layout from "./components/home/layout"
import { ToastContainer } from "react-toastify"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/home" element={<Layout/>}/> 
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
