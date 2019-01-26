import React, {Component} from 'react'
import AlbumPage from './AlbumPage';


class HomePage extends Component{

    componentDidMount(){
        this.props.notifyPageChange("HomePage")
    }

    render(){
        return(
            <AlbumPage/>
        )
    }
}

export default HomePage;