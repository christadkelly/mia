import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    useEffect(()=>{
        actions.fetchUserContacts()
    }, [])

    // useEffect (() => {
    //     if(id !== undefined) {
    //         setFullName(store.contacts[id].first_name)
    //         setAddress(store.contacts[id].address)
    //         setPhone(store.contacts[id].phone)
    //         setEmail(store.contacts[id].email)
    //     }
    // },[])

    // const submitHandler = async e => {
    //     e.preventDefault();
    //     await actions.formSubmitHandler(e, idx);
    //     navigate('/');
    // }

    return (
        <form className="container" 
        // onSubmit={submitHandler}
        >
            <h1>'Add New Contact'</h1>
            <div className="mb-3">
                <label for="full_name" className="form-label">Full Name</label>
                <input name="full_name" type="text" className="form-control" placeholder="Full Name" aria-label="Full Name" aria-describedby="basic-addon2"/>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input name="email" type="text" className="form-control" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="basic-addon2"/>
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Phone</label>
                <input name="phone" type="text" className="form-control" placeholder="Enter Phone" aria-label="Enter Phone" aria-describedby="basic-addon2"/>
            </div>
            <div className="mb-3">
                <label for="address" className="form-label">Address</label>
                <input name="address" type="text" className="form-control" placeholder="Enter Address" aria-label="Enter Address" aria-describedby="basic-addon2"/>
            </div>
            <div className="col-12">
                <button className="btn btn-primary w-100" type='submit'>Save</button>
            </div>
            <div className="col-12">
                <Link to="/">Back to contacts</Link>
            </div>
        </form>
    )
}
