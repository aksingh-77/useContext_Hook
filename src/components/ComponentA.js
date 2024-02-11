import React, {useContext} from 'react';
import { ChannelContext, UserContext } from '../App';

const ComponentA = () => {
    const user = useContext(UserContext);
    const surname = useContext(ChannelContext);

    return (
        <div>
            <h1>
                The value from UserContext is {user}, and value obtained from ChannelContext is {surname}
            </h1>
        </div>
    )
}

export default ComponentA