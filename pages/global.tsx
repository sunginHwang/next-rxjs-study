import React from 'react';
import {pingInitType} from "../store/reducers/pingReducer";
import {useSelector} from "react-redux";


type rootState = {
    pingReducer: pingInitType
};

const Global = ({}) => {
    const ping = useSelector((state: rootState) => state.pingReducer.ping);
    console.log(ping);

    return (
        <div>
            <p>{ping}</p>
        </div>
    );
};

Global.getInitialProps = async ({}) => {
    return {};
};

export default Global;
