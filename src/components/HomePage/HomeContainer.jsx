import React from 'react';
import HomePage from './HomePage/HomePage';
import { connect } from 'react-redux';
import AppActions from '../../_actions/AppCommon';

const mapDispatchToPros = dispatch => ({
    notifyPageChange: (pageName) => dispatch(AppActions.pageChange(pageName))
})

const HomeContainer = (props) => <HomePage {...props}/>
export default connect(null, mapDispatchToPros)(HomeContainer) ;
