import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LoginApp } from './app';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { store } from './_store';

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


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <LoginApp/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
    
    ,document.getElementById("root")
)