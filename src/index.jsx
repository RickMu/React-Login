import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CreateStore } from 'redux';
import { LoginApp } from './app';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#ffa726',
        },
        secondary: {
          main: '#ffa726',
        },
      },
});

ReactDOM.render(
    
    <BrowserRouter>
        <MuiThemeProvider theme={theme}>
            <LoginApp/>
        </MuiThemeProvider>
    </BrowserRouter>
    
    ,document.getElementById("root")
)