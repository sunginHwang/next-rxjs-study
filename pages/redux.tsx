import React from 'react';
import {pingInitType} from "../store/reducers/pingReducer";
import {useSelector} from "react-redux";


type rootState = {
    pingReducer: pingInitType
};

const First = ({}) => {
    const ping = useSelector((state: rootState) => state.pingReducer.ping);

    return (
        <div>
            <p>{{ping}}</p>
        </div>
    );
};

First.getInitialProps = async ({}) => {
    return {};
};

export default First;
