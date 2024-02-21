import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Contact } from "../component/contact";

export const ContactList = () => {
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.fetchUserContacts()
    }, [])

    return(
        <div className="container">
            <div className="row">
                <Link to='/contacts/new'>
                    <button className="btn btn-success mt-1">
                        Add New Contact
                    </button>
                </Link>
            </div>
            {store.userContacts && store.userContacts.length > 0 && store.userContacts.map((contact, key) => {
                return <Contact key={key} contact={contact}/>
            })}
        </div>
    )
}
