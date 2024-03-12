import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/contacts.css";

import { Contact } from "../component/contact";
import { DeleteModal } from "../component/deleteModal";
import { NoAccountWarning } from "../component/noAccountWarning";

export const ContactList = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const loggedIn = store.loggedIn;

    useEffect(()=>{
        actions.fetchUserContacts()
    }, [])

    return(
        <div className="container notebook p-3">
            {loggedIn ? <></> : <NoAccountWarning />}
            {store.userContacts && store.userContacts.length > 0 && store.userContacts.map((contact, key) => {
                return <Contact key={key} contact={contact}/>
            })}
            {store.userContacts && store.userContacts.length > 0 && store.userContacts.map((contact, key) => {
                return <DeleteModal key={key} id={contact.id}/>
            })}
            <div className="d-flex justify-content-center">
                <Link to='/contacts/new'>
                    <button className="btn btn-secondary">
                        Add New Contact
                    </button>
                </Link>
            </div>
        </div>
    )
}
