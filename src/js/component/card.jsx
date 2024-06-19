import React, {useContext} from "react";
import { Context } from "../store/appContext";

const Card = () => {
    const [store, actions] = useContext(Context);
    return(
        <p>
            Hola
        </p>
    )
}




export default Card