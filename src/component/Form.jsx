import { useState } from "react"


const Form = ()=>{

    const [userName, SetUsername] = useState("")
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")

    function formHandler(e) {
        e.preventDefault()
        SetEmail("")
        SetUsername("")
        SetPassword("")
    }

    return(
        <>
            <div>
                <form onSubmit={formHandler}>
                    <input type="text" placeholder="Name" value={userName} onChange={(e)=> SetUsername(e.target.value)}/> <br />
                    <input type="email" placeholder="Email" value={email} onChange={(e)=>SetEmail(e.target.value)}/> <br />
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>SetPassword(e.target.value)}/> <br />
                    <button type="submit">SUBMIT</button>
                </form>
                <div>
                    <div>{userName}</div>
                    <div>{email}</div>
                    <div>{password}</div>
                </div>
            </div>
        </>
    )
}
export default Form