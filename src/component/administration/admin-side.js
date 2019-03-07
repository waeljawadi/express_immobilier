import React, {Component} from 'react';

import _css_ from './style/style.module.css'


export default class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="img/male-user-png-image-3098.png" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Administrateur</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    {/* <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form> */}
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        
                       
                        <li className="treeview">
                        <a href="#">
                            <i className="fa fa-pie-chart"></i>
                            <span>Catalogue</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> Ajouter</a></li>
                            <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Modifier</a></li>
                            <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Configurer</a></li>
                            <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Liste des catalogues</a></li>
                        </ul>
                        </li>

                        <li className="treeview">
                        <a href="#">
                            <i className="fa fa-pie-chart"></i>
                            <span>Actualité</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> Ajouter</a></li>
                            <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Editer</a></li>
                            <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Supprimer</a></li>
                           
                        </ul>
                        </li>

                        <li className="treeview">
                        <a href="#">
                            <i className="fa fa-pie-chart"></i>
                            <span>Avis</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> En attente</a></li>
                            <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Valider</a></li>
                            <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Bloquer</a></li>
                           
                        </ul>
                        </li>

                        <li className="treeview">
                        <a href="#">
                            <i className="fa fa-pie-chart"></i>
                            <span>Contact</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> Coordonnées</a></li>
                           
                            <li>
                        <a href="pages/mailbox/mailbox.html">
                            <i className="fa fa-envelope"></i> <span>Mailbox</span>
                            <span className="pull-right-container">
                            <small className="label pull-right bg-yellow">12</small>
                            <small className="label pull-right bg-green">16</small>
                            <small className="label pull-right bg-red">5</small>
                            </span>
                        </a>
                        </li>
                          
                        </ul>
                        </li>

                        <li className="treeview">
                        <a href="#">
                            <i className="fa fa-pie-chart"></i>
                            <span>Slide Home</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> Ajouter slide</a></li>
                            <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Supprimer slide</a></li>
                            
                        </ul>
                        </li>


                        
                     
                    </ul>
                </section>
            </aside> 
        )
    }
}
