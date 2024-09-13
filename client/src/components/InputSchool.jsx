import React from "react";
import { Fragment, useState} from "react";

const InputSchool = () => {

    const [name, setNameSchool ] = useState("")
    const onSubmitForm = async(e)=>{
        e.preventDefault()
        try {
            const body = {name}
            const response = await fetch("https://localhost:4000/schools",
                { method : "POST", 
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            )
            window.location = "/"
            console.log(response)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
        <h1 className="text-center mt-5">Input School</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type= "text" className="form-control" value={name} onChange={e => setNameSchool(e.target.value)}/>
            <button className="btn btn-success">Add</button>
        </form>
        </Fragment>
    )
}

export default InputSchool; 
