import React from 'react';
import {pingInitType, changePing} from "../store/reducers/pingReducer";
import {useDispatch, useSelector} from "react-redux";


type rootState = {
    pingReducer: pingInitType
};

const Global = ({}) => {
    const ping = useSelector((state: rootState) => state.pingReducer.ping);
    const dispatch = useDispatch();

    const buttonClick = () => {
        // @ts-ignore
        dispatch(changePing());
    }

    console.log(ping);

    return (
        <div>
            <p onClick={buttonClick}>{ping}</p>
        </div>
    );
};

Global.getInitialProps = async ({}) => {
    return {};
};

export default Global;
