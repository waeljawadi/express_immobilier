import React, {Component} from 'react';


import {Link} from 'react-router-dom'
import _css_ from './style/style.module.css'


export default class SideBar extends Component {
    render(){
        return (
            <aside className={`main-sidebar  ${_css_.fixit}`}>
                <section className={`sidebar`}>
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="/img/male-user-png-image-3098.png" className="img-circle" alt="User Image" />
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
                        <i class="fa fa-list-ul"></i>
                            <span>Catalogue</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><Link to="/admin/catalogue/listimmo"><i class="fa fa-list-ol" aria-hidden="true"></i> Liste immobilier</Link></li>
                            <li><Link to="/admin/catalogue/ajout"><i class="fa fa-plus" aria-hidden="true"></i> Ajouter</Link></li>
                            <li><Link to="/admin/catalogue/config"><i class="fa fa-cogs" aria-hidden="true"></i> Configurer</Link></li>

                        </ul>
                        </li>









                        <li className="treeview">
                        <a href="#">
                        <i class="fa fa-user" aria-hidden="true"></i>
                            <span>Utilisateur</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><Link to="/admin/user/listuser"><i class="fa fa-list-ol" aria-hidden="true"></i> Liste des users</Link></li>
                            <li><Link to="/admin/user/attenteuser"><i class="fa fa-pause" aria-hidden="true"></i> users en attent</Link></li>

                        </ul>
                        </li>

























                        <li className="treeview">
                        <a href="#">
                        <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                            <span>Actualité</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/charts/chartjs.html"><i class="fa fa-plus" aria-hidden="true"></i> Ajouter</a></li>
                            <li><a href="pages/charts/morris.html"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editer</a></li>
                            <li><a href="pages/charts/flot.html"><i class="fa fa-trash-o" aria-hidden="true"></i> Supprimer</a></li>
                           
                        </ul>
                        </li>

                        <li className="treeview">
                        <a href="#">
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                            <span>Avis</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/charts/chartjs.html"><i class="fa fa-pause" aria-hidden="true"></i> En attente</a></li>
                            <li><a href="pages/charts/morris.html"><i class="fa fa-check-square-o" aria-hidden="true"></i> Valider</a></li>
                            <li><a href="pages/charts/flot.html"><i class="fa fa-ban" aria-hidden="true"></i> Bloquer</a></li>
                           
                        </ul>
                        </li>

                        <li className="treeview">
                        <a href="#">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <span>Contact</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/charts/chartjs.html"><i class="fa fa-address-card-o" aria-hidden="true"></i> Coordonnées</a></li>
                           
                            <li>
                        <a href="pages/mailbox/mailbox.html">
                        <i class="fa fa-envelope" aria-hidden="true"></i> <span>Mailbox</span>
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
                        <i class="fa fa-picture-o" aria-hidden="true"></i>
                            <span>Slide Home</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/charts/chartjs.html"><i class="fa fa-plus" aria-hidden="true"></i> Ajouter slide</a></li>
                            <li><a href="pages/charts/morris.html"><i class="fa fa-trash-o" aria-hidden="true"></i> Supprimer slide</a></li>
                            
                        </ul>
                        </li>


                        
                     
                    </ul>
                </section>
            </aside> 
        )
    }
}
