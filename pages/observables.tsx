import React from 'react';
import { Observable } from 'rxjs';


const Observables = ({}) => {

  const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);

    setTimeout(()=>{
      subscriber.next(4);
      subscriber.complete();
    },1000);

    subscriber.next(5);
    subscriber.next(6);

  });

  console.log('observable before subscribe');
  observable.subscribe({
    next(value){console.log(`nextValue: ${value}`)},
    error(error){console.log(`error: ${error}`)},
    complete(){console.log('complete')}
  })
  console.log('observable after subscribe');


  console.log('Foo start');
  const foo = new Observable(subscriber => {
    console.log('Hello');
    subscriber.next(42);
  });

  foo.subscribe(x => {
    console.log('firstFooStart');
    console.log(x);
    console.log('FirstEndFooStart');
  });
  foo.subscribe(y => {
    console.log('secondFooStart');
    console.log(y);
    console.log('secondEndFooStart');
  });


  return (
    <div>
      <p>옵저버블 스터디</p>
    </div>
  );
};

Observables.getInitialProps = async ({}) => {
  return {};
};

export default Observables;
