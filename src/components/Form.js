import React from "react";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';

const From = ()=>{
const PageNavigatie = useNavigate();
const [formValue , setFormValue] = useState({
    name : "",
    email : "",
    rating : "",
    comment : ""
});

const [errors , setErrors] = useState({});
const [showBut , setShowBut] = useState(false);

const FromRequired = ()=>{
    let errorShow = {};

    if (!formValue.name.trim()){
        errorShow.name = "Name is Required";
    }     

    if(!formValue.email.trim()){
        errorShow.email = "email is Required"

    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValue.email)){
        errorShow.email = "Invalid mail"
    }

    if(!formValue.rating){
        errorShow.rating = "Rating is Required";
    }else if(formValue.rating <1 || formValue.rating >5){
        errorShow.rating = "Invalid Rating";
    }

    if(!formValue.comment.trim()){
        errorShow.comment = "Comment is Required"
    }

    setErrors(errorShow);
    return Object.keys(errorShow).length===0;
}

const handleChange = (e)=>{
    setFormValue({ ...formValue, [e.target.name]: e.target.value });

}


const handleSubmit = (e) => {
    e.preventDefault();
    if (FromRequired()) {
      setShowBut(true);
    }
  };



 useEffect(() => {
    if (showBut) {
      const pageLoad = setTimeout(() => {
        PageNavigatie("/"); 
          }, 3000); 
      return () => clearTimeout(pageLoad);
    }
  }, [showBut, PageNavigatie]);

if(showBut){
    return(
    <div className="afterSubmit">
    <div className="afterSubmitContent">
        <h2>Thank you for your feedback!</h2>
        <h2>We really appreciate you taking the time to help us improve.</h2> 
    </div>
    </div>
    )
}

return(

<div className="container">
<form onSubmit={handleSubmit}>

    <h2>User Feedback Form</h2>

    <div className="name defalutClass">
        <label>Name :</label>
        <input type="name" name="name" value={formValue.name} onChange={handleChange}/>
        {errors.name && (
            <p>{errors.name}</p>
        )}
    </div>

    <div className="email defalutClass">
        <label>Email :</label>
        <input type="email" name="email" value={formValue.email} onChange={handleChange}/>
        {errors.email && (
            <p>{errors.email}</p>
        )}
    </div>

    <div className="rating defalutClass">
        <label>Rating :</label>
        <input type="number" name="rating" value={formValue.rating} onChange={handleChange}/>
        {errors.rating && (
            <p>{errors.rating}</p>
        )}
    </div>

    <div className="TextArea defalutClass">
        <label>Comment :</label>
        <textarea name="comment" value={formValue.comment} onChange={handleChange}></textarea>
    </div>
    <button type="submit" disabled={!formValue.name || !formValue.email || !formValue.rating || !formValue.comment}>
        Submit
    </button>
</form>
</div>
)

}

export default From;