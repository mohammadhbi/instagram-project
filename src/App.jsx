import { BrowserRouter, Route } from "react-router-dom"
import SignUp from "./components/auth/signUp"
import Login from "./components/auth/Login"
import { Routes } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />}/>
      <Route path="/login" element={<Login />}/>
      {/* <Route path="/home" element={home}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
