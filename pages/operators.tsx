import React from 'react';
import {Observable, pipe, range, from} from 'rxjs';
import {filter, find, isEmpty, map, count, skip, startWith, endWith, pluck, tap, retry} from "rxjs/operators";
import {error} from "next/dist/build/output/log";

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
    setTimeout(() => a.subscribe(v => console.log(v)), 800);
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

    const people = [
        {
            name: '성인',
            age: 34
        },
        {
            name: '혜진',
            age: 33
        }
    ];

    console.log('pluckTest');

    let retryCount = 1;
    const pluckTest = from(people)
        .pipe(
            pluck('name'),
            tap(a => {
                console.log('tap - ' + a + ' retryCount : ' + retryCount);
                retryCount++;
                throw error();
            }),
            retry(3)
        )
        .subscribe(
            v => console.log(v),
            v => console.log('error 발생 ' + v),
        );


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
