import {AppContext, AppInitialProps, Container} from 'next/app';
import React from 'react';
import {Store} from 'redux';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../store';


type Props = { store: Store } & AppInitialProps & AppContext;

const App = (props: Props) => {
    const {Component, pageProps, store} = props;
    console.log(store);

    return (
        <Container>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </Container>
    );
};

// @ts-ignore
export default withRedux(store)(App);

