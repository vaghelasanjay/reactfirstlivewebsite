import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: ""
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        alert(`My Name is ${data.fullname}  My Phone Number is ${data.phone}
         My Email id is ${data.email} and here is the 'Msg For You' ${data.msg}`)
    }

    return <>
        <div className="my-5">
            <h1 className="text-center">
                Contact US
            </h1>
            <div className="container contact_div">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1">Full Name</label>
                            <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1">Phone Number</label>
                            <input type="number" className="form-control" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Mobile Number" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1">Email</label>
                            <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} placeholder="example@gmail.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    </>
}

export default Contact;