import React, {Component} from 'react';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
import { CircularProgressIcon } from '../common/ProgressIcon/CircularIcon';
import { AuthSelectors } from '../../_selectors';
import {Redirect} from 'react-router-dom'
import auth0 from '../../_service/auth0'

const mapDispatchToProps = dispatch => ({
    authenticate: () => dispatch(userActions.authenticate(auth0.handleAuthentication))
});

const select = appState => ({
    isAuthenticated: AuthSelectors.selectIsAuthenticated(appState)
});

class CallbackPage extends Component{

    async componentDidMount(){
        console.log("component callback")
        const {authenticate} = this.props;
        await authenticate();
    }

    render(){
        
        const {isAuthenticated} = this.props;

        return (
            <div>
                { isAuthenticated ? 
                <Redirect to="/"/>
                :<CircularProgressIcon/> }
            </div>
        )
    }
}

export default connect(select,mapDispatchToProps)(CallbackPage);