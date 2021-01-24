import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyCake } from '../redux/cakes/cakeActions';

//useSelector and useDispatch - we don't need to connect to redux store
function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes);
    const dispatch = useDispatch();

    return(
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    ) 
}

// useSelector hook works as mapStateToProps

export default HooksCakeContainer