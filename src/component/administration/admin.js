import React, { Component } from 'react';
import SideBar from './admin-side';
import Header from './admin-header'
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>


             <Header/>
            <SideBar/>
        </div> );
    }
}
 
export default Admin;