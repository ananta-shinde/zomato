import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [formData,setFormData] =  useState({});
    const [errorMessage,setErrorMessage] =  useState();
    const navigate = useNavigate();
    const handleChange = (e)=>{
           if(e.target.name == "name")
           setFormData({...formData,name:e.target.value})
           if(e.target.name == "password")
           setFormData({...formData,password:e.target.value})
           if(e.target.name == "email")
           setFormData({...formData,email:e.target.value})
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        if(!(formData.name && formData.email && formData.password))
        {
            setErrorMessage("all field are mandatory")
        }else{
            fetch(`http://localhost:7000/users?email=${formData.email}`)
            .then(res=>res.json())
            .then(users => {
                if(users.length != 0)
                {
                    setErrorMessage("User already exist");
                }else{
                    fetch(`http://localhost:7000/users`,
                    {
                        method: "post",
                        headers:{ "Content-Type" : "application/json"},
                        body : JSON.stringify(formData)
                    })
                    .then(res=>{
                        if(res){
                            setErrorMessage(undefined)
                            navigate("/login")
                        }
                    })
                }
            })
        }
    }
    return ( <>
        <form>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Full Name"  name="name" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Email"  name="email" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Password"  name="password" onChange={handleChange}/>
            </div>
            <input type="submit" value="Signup" onClick={onSubmit} />
        </form>
     </> );
}
 
export default Signup;