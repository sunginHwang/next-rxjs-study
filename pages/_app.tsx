import {AppContext, AppInitialProps} from 'next/app';
import React from 'react';
import {Store} from 'redux';
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../store';

type Props = { store: Store } & AppInitialProps & AppContext;

const App = (props: Props) => {

    const {Component, pageProps, store} = props;

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};


App.getInitialProps = async ({Component, ctx}) => {

    return {
        pageProps: {
            ...(Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {})
        }
    };
}

export default withRedux(store)(App);

