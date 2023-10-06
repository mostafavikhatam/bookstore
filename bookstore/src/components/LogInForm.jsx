import { useRef } from "react";
import Home from "./Home/Home";


import "bootstrap/dist/css/bootstrap.min.css";

function LogInForm() {
    const name = useRef();
    const pwd = useRef();
    const getName = localStorage.getItem("nameData");
    const getPwd = localStorage.getItem("pwdData");
    const handleSubmit = (e)=>{
      e.preventDefault();
    
    }
    const clickhandler = ()=>{
      if (name.current.value ==="admin" && pwd.current.value === "admin"){
        localStorage.setItem("nameData" , "admin");
        localStorage.setItem("pwdData" , "admin")
      }
    }

  return (
    <>
    {
      getName && getPwd ? <Home/>:
      <div className="wrapper d-flex align-item-center justify-content-center w-100">
    <div className="logi rounded">
      <h2 className="mb-3">Login Form</h2>
      <form className="need-validation" onChange={handleSubmit}>
        <div className="form-group was-validated mb-2">
          <label htmlFor="text" className="form-label">Name</label>
          <input type="text"className="form-control" required ref={name}/>
        </div>
        <div className="form-group was-validated mb-2">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" required ref={pwd}/>
        </div>
        <div className="form-group from-check mb-2">
          
          <input type="checkbox" className="form-check-input" />
          <label htmlFor="checkbox" className="form-check-labelt">Remember me</label>
        </div>
        <link className="btn btn-success w-100 mt-2" onClick={clickhandler}>SIGN IN</link>
      </form>
    </div>
  </div>
    }
    </>
  )
}

export default LogInForm