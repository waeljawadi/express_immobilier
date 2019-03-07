import React, {Component} from 'react';
import _css_ from './style/style.module.css'


export default class Header extends Component {
    render(){
        return (
            <header className="main-header">
                <a href="#" className={`logo  ${_css_.logoadmin}`}>
                    <span className="logo-mini"><b>S</b>WH</span>
                    <span className={`logo-lg`}><b>Admin</b></span>
                </a>
                <nav className={`navbar navbar-static-top ${_css_.headadmin}` }>
                    <a href="#" className={`sidebar-toggle ${_css_.burger}`} data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                   
                </nav>
            </header>
        )
    }
}