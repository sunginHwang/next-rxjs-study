import React from 'react';
import {pingInitType} from "../store/reducers/pingReducer";
import {useSelector} from "react-redux";


type rootState = {
    pingReducer: pingInitType
};

const Redux = ({}) => {
    const ping = useSelector((state: rootState) => state.pingReducer.ping);

    return (
        <div>
            <p>{{ping}}</p>
        </div>
    );
};

Redux.getInitialProps = async ({}) => {
    return {};
};

export default Redux;
