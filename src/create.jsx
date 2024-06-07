import { useState } from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
const Signin = () => {
  const[data,setData]=useState({
    email:"",
    password:""
  });
const [error,setError]=useState("");
const handleChange=({currentTarget:input}) =>{
  setData({...data,[input.email]:input.value});
};
const navigate=useNavigate();
const handleSubmit= async (e)=>{
  e.preventDefault();
  try{
    const url="http://localhost:8080/login"
    const {data:res}=await axios.post(url,data);
    console.log(res.message);
    navigate("/singin")
  }catch(error){
    if(error.response && error.response.status>=400 && error.response.status<=500){
      setError(error.response.data.message);
    }
  }
}
  return (
    <div> <div className="q917rfkv" style={{marginTop:"1px"}} >
    <div className="c2437m1m" >
      <div className="iegwqvq9" >
        <div className="qzu8e5zl">
          <h1 className="lq9t8ywg" >Sign In</h1>
          <p className="etbmy3j0">
          Join me

Unlock a world of knowledge and possibilities. Sign in now to access exclusive educational resources, interactive courses, and personalized learning experiences.
          </p>
        
          <div className="ymfdwfmv">
            <div className="oovk612b"></div>
           
            <div className="nu1zjh46"></div>
          </div>
          <form className="whsbw10e" onSubmit={handleSubmit}>
            <div className="eat6yoah">
              <label className="yg68876x">Email Address</label>
              <div className="kbpjjofz">
                <input
                  type="text"
                  maxlength="256"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                  placeholder="johndoe.banking@gmail.com"
                  className="kbpjjo"
                />
              </div>
            </div>
            <div className="xz7f3v9m">
              <label className="jkjhgp4m">Password</label>
              <div className="qk5ppt7d">
                <input
                  type="text"
                  maxlength="256"
                  name="password"
                  placeholder="********"
                  className="kbpjjo"
                  required
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            {error && <div className={error} style={{width:"370px",padding:"15px",margin:"5px 0",fontSize:"14px",backgroundColor:"#f34646",color:"white",borderRadius:"5px",textAlign:"center"}}>{error}</div>}
            <div className="vl4q9c06">
              <input
                type="submit"
                value="Sign In"
                data-wait="Please wait..."
                className="qk5ppt7d"
                style={{color:"white"}}
                onSubmit={handleSubmit}
              />
            </div>
          </form>
        </div>
        <div className="yxbslaim">
          <img
            src="https://assets-global.website-files.com/6649d9640e151c6ff17d76fc/664d0bfd96738d31ce7eb424_SVG_Euh8sJe.svg"
            alt=""
            className="nfwk4h2f"
          />
          <div className="t4t2kssr"></div>
        </div>
      </div>
    </div>

    
  </div></div>
  )
}
export default Signin;