import React, { useContext } from "react";
import { Context } from '../store/appContext'

export const DeleteModal = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="modal fade" id={`modal${props.id}`} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1>Delete Contact</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close modal" ></button>
                    </div>
                    <div className="modal-body">
                        <h6 className="text-center"> 
                            Are you sure you would like to delete this contact? 
                            Once deleted, the contact cannot be recovered
                        </h6>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}