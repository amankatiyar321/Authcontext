import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const Datadisplay = ()=>{
    const {isAuth, toglleAuth}= useContext(AuthContext);

    return(
        <div>
            <h2>Hello,Welcome To Home page</h2>
            <h5>You Are successfully Login</h5>
            <h5>Token : {isAuth}</h5>
        </div>
    )
}