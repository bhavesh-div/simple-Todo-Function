import React, { createContext } from "react";
import C2 from "./C2";

const FirstName = createContext()
const LastName = createContext()

function C1(){

    return(

        <div>

            <FirstName.Provider value={'Bhavesh'}>
                <LastName.Provider value={'Khapre'}>
                    <C2 />
                </LastName.Provider>
            </FirstName.Provider>
           
        
        
        </div>
    )

}

export default C1;
export {FirstName,LastName}