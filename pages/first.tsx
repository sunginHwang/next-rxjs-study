import React from 'react';
import RemarkExampleProps from "../components/remarkExcample";
import {useSelector} from "react-redux";



export type RootState = {
    pingReducer: Ping;
    postsReducer: postsInitType;
    postReducer: postInitType;
    categoryReducer: categoryInitType;
    layoutReducer: layoutInitType;
    authReducer: authInitType
};


const First = ({}) => {

   const ping =  useSelector(state => state.pingReducer.ping);

  return (
    <div>
        <RemarkExampleProps/>
    </div>
  );
};

First.getInitialProps = async ({}) => {
  return {};
};

export default First;
