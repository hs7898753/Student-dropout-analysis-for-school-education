import "./index.css";
import { useState } from "react";

export default function Feedback(){
    const [data,setData] = useState({name:"",email:"",phone:"",message:""});
    const handleChange = (e) => {
        const name=e.target.name;
        const value=e.target.value;
        setData({...data,[name]:value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(data);
    }
    return(
        <form method='post' onSubmit={handleSubmit}>
            <h1>Contact<span>Here</span></h1>
            <input type="text" name="name" id="" placeholder="Enter Name" value={data.name} onChange={handleChange}/>
            <input type="email" name="email" id="" placeholder="example@gmail.com" value={data.email} onChange={handleChange}/>
            <input type="phone" name="phone" id="" placeholder="+91" value={data.phone} onChange={handleChange}/>
            <textarea name="message" id="" cols="30" rows="10" placeholder="Type here..." value={data.message} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}