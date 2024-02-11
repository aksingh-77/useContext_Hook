import React from "react";
import { UserContext,ChannelContext } from "../App";


/**
 * As here we could see that the logic and code to cosume the values provided by Context API is complected using Context API
 * 
 * Thus React Provided the concept of useContext to make the consumption of values from Context easier
 * 
 */
const ComponentF = () =>{
    return(
        <div>
            <UserContext.Consumer>
                {user => 
                     
                    <ChannelContext>
                        {
                            surname => {
                                return <div>The value from UserContext is {user} and from ChannelContext is {surname}</div>
                            }
                        }
                    </ChannelContext>
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF