import React from 'react';
import {Observable, pipe, range} from 'rxjs';
import {filter, find, isEmpty, map, count, skip, startWith, endWith} from "rxjs/operators";

const Operators = ({}) => {

    const countFive = range(1, 10)
        .pipe(
            skip(5),
            count(v => !(v % 2)),
        );
    console.log('count');
    console.log(countFive.subscribe(v => console.log(v)));

    const withTest = range(1, 10)
        .pipe(
            startWith(998),
            endWith(2000),
        );
    console.log('withTest');
    withTest.subscribe(v => console.log(v));

    const a = range(1, 10)
        .pipe(
            startWith(998),
            endWith(2000),
            filter(v => !(v % 2)),
            map(v => v + v),
        );

    console.log('firstCall');
    a.subscribe(v => console.log(v));
    console.log('secondCall');
    a.subscribe(v => console.log(v));
    setTimeout(()=> a.subscribe(v => console.log(v)),800);
    console.log('test for async case');

    const getRangeObservable = count => range(1, count);

    const subscribeWithIsEmpty = count => {
        getRangeObservable(count)
            .pipe(isEmpty())
            .subscribe(v => console.log(`갯수 : ${count} 값 : ${v}`));
    };

    const subscribeWithFind = count => {
        getRangeObservable(count)
            .pipe(find(c => c > 2))
            .subscribe(v => console.log(`갯수 : ${count} 값 : ${v}`));
    };

    subscribeWithIsEmpty(0);
    subscribeWithIsEmpty(3);
    subscribeWithFind(1);
    subscribeWithFind(4);


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
