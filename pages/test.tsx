import React from 'react';

interface TestProps{
}

const Test = ({}) => {

  return (
    <div>
        <h2>
            테스트
        </h2>
    </div>
  );
};

Test.getInitialProps = async ({}) => {
  return {};
};

export default Test;
