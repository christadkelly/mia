import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext'
import { useNavigate } from "react-router-dom";

export const Contact = (props) => {
    const {store, actions} = useContext(Context);
    const nagivate = useNavigate();
    const contact = props.contact;

    const imageUrl = 'https://cdn.icon-icons.com/icons2/1509/PNG/512/contactnew_104150.png'

    const nagivateEdit = () => {
        console.log(contact.id)
        nagivate(`/contacts/${contact.id}`)
    }

    const checkDelete = () => {
        console.log(contact.id)
        actions.showDeleteContact(true)
    }

    return(
        <div className='row border border-dark rounded'>
            <div className='col-2 d-flex justify-content-center align-items-center'>
                <i className="fa-solid fa-address-book fa-6x"></i>
                {/* <img className='img-fluid' src={imageUrl} alt='contact photo'></img> */}
            </div>
            <div className='col-9'>
                <div className='m-1'><i className="fa-solid fa-user me-2"></i>Name: {contact.name}</div>
                <div className='m-1'><i className="fa-solid fa-phone me-2"></i>Phone: {contact.phone}</div>
                <div className='m-1'><i className="fa-solid fa-envelope me-2"></i>Email: {contact.email}</div>
                <div className='m-1'><i className="fa-solid fa-location-dot me-2"></i>Address: {contact.address}</div>
            </div>
            <div className='col-1'>
                <button className='btn' onClick={nagivateEdit}>
                    <i className="fa-solid fa-pencil"></i>
                </button>
                <button className='btn' data-bs-target={`#modal${contact.id}`} data-bs-toggle="modal">
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </div>

    )
}
