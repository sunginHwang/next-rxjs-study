import React from 'react';
import {Observable, pipe, range} from 'rxjs';
import {filter, map} from "rxjs/operators";

const Operators = ({}) => {

    const a = range(1, 10)
        .pipe(
            filter(v => !(v % 2)),
            map(v => v + v),
        );

    console.log('firstCall');
    a.subscribe(v => console.log(v));
    console.log('secondCall');
    a.subscribe(v => console.log(v));

    return (
        <div>
            <h2>
                테스트
            </h2>
        </div>
    );
};

Operators.getInitialProps = async ({}) => {
    return {};
};

export default Operators;
