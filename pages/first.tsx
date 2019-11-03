import React from 'react';
import RemarkExampleProps from "../components/remarkExcample";


const First = ({}) => {

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
