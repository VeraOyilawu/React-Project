import Login from "./Components/LogIn/Login"
import Logout from "./Components/LogOut/Logout"
import ForgetPassword from "./Components/ForgotPassword/ForgetPassword"
import ResetPassword from "./Components/ResetPassword/ResetPassword"
// import LogoutSucess from "./Components/LogoutSucess/LogoutSucess"

function App() {
  
  return (
    <>
      <Login />
      <Logout />
      <ForgetPassword/>
      <ResetPassword/>
      {/* <LogoutSucess/> */}
    </>
  )
}


export default App
