import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [formData,setFormData] =  useState({});
    const [errorMessage,setErrorMessage] =  useState();
    const navigate = useNavigate();
    const handleChange = (e)=>{ 
        if(e.target.name == "password")
        setFormData({...formData,password:e.target.value})
        if(e.target.name == "email")
        setFormData({...formData,email:e.target.value})
    }

    const onSubmit = (e)=>{
        e.preventDefault();

        if(!(formData.email && formData.password))
        {
            setErrorMessage("all field are mandatory")
        }else{
        fetch(`http://localhost:7000/users?email=${formData.email}`)
        .then(res=>res.json())
        .then(users => {
            if(users.length == 0)
            {
                setErrorMessage("User not found");
            }
            else{
                var user = users[0];
                if(user.password == formData.password)
                {
                    props.setUser(user);
                    navigate("/");
                }else{
                    setErrorMessage("Invalid Creds")
                }
            }
        })
        }
    }
    return ( <>
      <form>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Email"  name="email" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Password"  name="password" onChange={handleChange}/>
            </div>
            <input type="submit" value="Login" onClick={onSubmit} />
        </form>
     </> );
}
 
export default Login;