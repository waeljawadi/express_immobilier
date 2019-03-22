import React, { Component } from 'react';
import Actualite from './actualite'
import FirstActualite from './la-une'
import './list-actualite.css'
import {connect} from 'react-redux'
import axios from 'axios'
// const tab=[
//     {image:"https://www.immobilier.notaires.fr/sites/default/contrib/responsabilites-constructeur-immobilier.jpg",
//      description:"Les héritiers d’un constructeur peuvent hériter de son obligation de réparation",
//      date:"Publié le 27/02/2019 à 11H02",
//      author: "Posted by Administrator" 
//     },
//     {image:"https://www.immobilier.notaires.fr/sites/default/contrib/airbnb-amendes-locations-illegales.jpg",
//      description:"Suspension des amendes pour les propriétaires ayant loué illégalement sur Airbnb",
//      date:"Publié le 27/02/2019 à 11H22",
//      author: "Posted by Administrator" 
//     },
//     {image:"https://www.immobilier.notaires.fr/sites/default/contrib/permis-de-louer.jpg",
//      description:"Le permis de louer: imposent au bailleur l’accomplissement de formalités à la mise en location.",
//      date:"Publié le 27/02/2019 à 11H32",
//      author: "Posted by Administrator" 
//     },
//     {image:"https://www.immobilier.notaires.fr/sites/default/contrib/taxe-habitation-supression.jpg",
//      description:"nouveau plaidoyer pour sa suppression totale: Vers une disparition de la taxe d’habitation ",
//      date:"Publié le 27/02/2019 à 11H35",
//      author: "Posted by Administrator" 
//     },
//     {image:"https://www.immobilier.notaires.fr/sites/default/contrib/airbnb-amendes-locations-illegales.jpg",
//      description:"Suspension des amendes pour les propriétaires ayant loué illégalement sur Airbnb",
//      date:"Publié le 27/02/2019 à 11H22",
//      author: "Posted by Administrator" 
//     },
//     {image:"https://www.immobilier.notaires.fr/sites/default/contrib/responsabilites-constructeur-immobilier.jpg",
//      description:"Les héritiers d’un constructeur peuvent hériter de son obligation de réparation",
//      date:"Publié le 27/02/2019 à 11H02",
//      author: "Posted by Administrator" 
//     },
//     {image:"https://www.immobilier.notaires.fr/sites/default/contrib/permis-de-louer.jpg",
//     description:"Le permis de louer: imposent au bailleur l’accomplissement de formalités à la mise en location.",
//     date:"Publié le 27/02/2019 à 11H32",
//     author: "Posted by Administrator" 
//    },
//    {image:"https://www.immobilier.notaires.fr/sites/default/contrib/permis-de-louer.jpg",
//    description:"Le permis de louer: imposent au bailleur l’accomplissement de formalités à la mise en location.",
//    date:"Publié le 27/02/2019 à 11H32",
//    author: "Posted by Administrator" 
// }
// ]
// const tab2=[
//     {image:"http://blog.agencearrioimmobilier.com/files/2018/02/AdobeStock_175849441-700x466.jpeg",
//     description:"Une bonne gestion locative de votre bien immobilier tient compte des nouveaux diagnostics !",
//     date:"Publié le 28/02/2019 à 10H42",
//     author: "Posted by Administrator" 
//  },
//  {image:"http://www.pg-squarehabitat.fr/uploads/actus/PHO40ab3854-f4ac-11e4-8477-3ac413eb961c-805x453.jpg",
//  description:"VENTE IMMOBILIÈRE : 4 ASTUCES POUR VENDRE SEREINEMENT ! Découvrez-les maintenant...",
//  date:"Publié le 28/02/2019 à 11H08",
//  author: "Posted by Administrator" 
// }



// ]


    class ListeActualite extends Component {
        constructor(props) {
            super(props);
            this.state = {  }
        }



        componentDidMount=()=>{
            axios.get('/getactu').then((res)=>this.props.updateActuReducer(res.data))
          }
        
          componentDidUpdate=()=>{
            axios.get('/getactu').then((res)=>this.props.updateActuReducer(res.data))
           
        }

        render() { 
            const {listactu}= this.props

            return ( <div className="toplist">
                {/* <div className="row actu1 container-fluid">
                { listactu.map((el,index)=><div className="col-lg-6 col-md-6 col-sm-12 cactu1" ><FirstActualite item={el} key={index}  /> 
            </div>)}
                
                </div> */}
                 <div className="row actu2 container-fluid">
            { listactu.map((el,index)=><div className="col-lg-4 col-md-6 col-sm-12"><Actualite item={el} key={index}  /> 
            </div>)}
            
          </div>
          </div> );
        }
    }
     
    

    const mapStateToProps=(state)=>
    {
        return {
            listactu:state.actuReducer
        }
    }
    const mapDispatchToProps=(dispatch)=>
    {
        return {
            updateActuReducer:listactu=>
            {
                dispatch({
                    type:'UPDATE_ACTU',
                    listactu            })
            }
        }
    }
    



export default connect(mapStateToProps,mapDispatchToProps)(ListeActualite);






