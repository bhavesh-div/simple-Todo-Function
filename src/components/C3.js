import React, { useContext } from "react";
import {FirstName,LastName} from './C1';

function C3(){


    const firstName = useContext(FirstName)
    const lastName = useContext(LastName)
    return(
        <div>
                {firstName}  {lastName}
        </div>
    )

}

export default C3;