import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactForm = () => {
    const { store, actions } = useContext(Context);
    const nagivate = useNavigate();
    const [contactInfo, setContactInfo] = useState({id: '', name: '', email: '', phone: '', address: ''});
    const { id } = useParams();

    useEffect (() => {
        if(id !== undefined){
            const listOfContacts = store.userContacts
            const contactToEdit = listOfContacts.find(item => item.id == id)
            setContactInfo({id: contactToEdit.id, name: contactToEdit.name, email: contactToEdit.email, phone: contactToEdit.phone, address: contactToEdit.address})
        }
    }, [])

    const handleSaveContact = async() => {
        if(id !== undefined){
            await actions.editUserContact(contactInfo, id);
        } else {
            await actions.addUserContact(contactInfo);
        }
        setContactInfo({id: '', name: '', goal: '', saved: '', date: '', notes: ''})
        nagivate('/contacts')
    }

    return(
        <div className="container">
            <form>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input 
                        className="form-control" 
                        name="name" 
                        placeholder="Enter Name" 
                        aria-label="Enter contact's name"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input 
                        className="form-control" 
                        name="email" 
                        placeholder="Enter Email" 
                        aria-label="Enter contact's email"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input 
                        className="form-control" 
                        name="phone" 
                        placeholder="Enter Phone" 
                        aria-label="Enter contact's phone number"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="address">Address</label>
                    <input 
                        className="form-control" 
                        name="address" 
                        placeholder="Enter Address" 
                        aria-label="Enter contact's address"
                        value={contactInfo.address}
                        onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})}>
                    </input>
                </div>
                <button className="btn btn-primary" type="button" onClick={handleSaveContact}>Save Contact</button>
            </form>
        </div>
    )
}