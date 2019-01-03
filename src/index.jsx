import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LoginApp } from './app';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { store } from './_store';
import { configureReactors } from './_reactors/reactor';
import Auth0 from './_service/auth0';

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#ffa726',
          secondary: '#ffffff'
        },
        secondary: {
          main: '#333333',
        },
      },
});

const auth0 = new Auth0();

configureReactors({
    store: store,
    authService: auth0
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <LoginApp auth0={auth0}/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
    
    ,document.getElementById("root")
)