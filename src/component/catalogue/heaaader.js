import React, { Component } from 'react';
import {MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem} from 'mdbreact'
import { connect } from 'react-redux';
import { Col,Row, Container } from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { localisation:'',
                       url:'https://images.pexels.com/photos/239520/pexels-photo-239520.jpeg?dl&fit=crop&crop=entropy&w=1500&h=851' ,
                       typea:'',
                       active1:true,active2:true,active3:true,active4:true,active5:true,active6:true
                     }
    }

    handlechange=(event)=>{
        this.setState({localisation:event.target.value}
             ,()=> {
               if (this.state.localisation=="Cap Bon") this.setState({url:"https://images.pexels.com/photos/1840394/pexels-photo-1840394.jpeg?dl&fit=crop&crop=entropy&w=1380&h="})
            else if (this.state.localisation==  "Bizerte")this.setState({url:"https://images.pexels.com/photos/1082316/pexels-photo-1082316.jpeg?dl&fit=crop&crop=entropy&w=1280&h=853"})
            else if(this.state.localisation== "Monastir")this.setState({url:"https://images.pexels.com/photos/207324/pexels-photo-207324.jpeg?dl&fit=crop&crop=entropy&w=1280&h=853"})
            else if(this.state.localisation== "Région Sud")this.setState({url:"https://images.pexels.com/photos/967098/pexels-photo-967098.jpeg?dl&fit=crop&crop=entropy&w=1280&h=853"})
            else if (this.state.localisation=="Grand Tunis") this.setState({url:"https://images.pexels.com/photos/1376960/pexels-photo-1376960.jpeg?dl&fit=crop&crop=entropy&w=1280&h=865"})
            }
            )
        this.props.filtr_pos(event.target.value,this.state.typea)
        if (event.target.value=="allr") this.props.allreg(this.state.typea)
      
    }
    
    filtr=(x,y)=>{
        this.setState({typea:x})
        this.props.filtractiv(x,y)
    }
    allactivities=()=>{
        this.setState({typea:"all"})
        this.props.allact(this.state.localisation)
    }
        render() { 
        
        return (<div>
<div className="header_filtr" style={{  backgroundImage: url(${this.state.url}),backgroundPosition:"center",  height:"60vh", backgroundColor:"#0000", alignItems: "center", display: "flex", flexDirection: "column",justifyContent:"center"
        
         
    }} >
   
  <select aria-label="Régions" className="form-control" style={{height:"40px",borderRadius:"0",width:"300px",fontFamily:"Poppins",color:"#000000"}} onChange={this.handlechange} >
        <option  disabled="" value="1" style={{color:"#555555"}}>Sélectionnez votre région...</option>
        <option  value="allr" >Toutes les régions</option>
        <option  value="Grand Tunis">Grand Tunis</option>
        <option  value="Bizerte">Bizerte</option>
        <option  value="Cap Bon">Cap Bon</option>
        <option  value="Mahdia">Mahdia</option>
        <option  value="Monastir">Monastir</option>
        <option  value="Région Centre">Région Centre</option>
        <option  value="Région Ouest">Région Ouest</option>
        <option  value="Région Sud">Région Sud</option>
        <option  value="Sfax">Sfax</option>
        <option  value="Sousse">Sousse</option>
  </select>

    </div> 
    <Container>
  <Row className="option_filtr" >
                <Col style={{cursor:'pointer'}} className={this.state.active1 ?"option opt activ":"option opt desactiv"}  onClick={()=>{this.allactivities() ;this.setState( this.setState(prevState => ({ active1: !prevState.active1 ,active2:true,active3:true,active4:true,active5:true,active6:true })))}}> <img src="https://img.icons8.com/color/52/000000/select-all.png"/> <h5 style={{ fontFamily: "'La Belle Aurore',cursive"}}>All the Activities </h5></Col>
                <Col style={{cursor:'pointer'}} className={this.state.active2 ?"option  activ":"option desactiv"}  onClick={()=>{this.filtr("Hiking",this.state.localisation);this.setState( this.setState(prevState => ({ active2: !prevState.active2 ,active1:true,active3:true,active4:true,active5:true,active6:true })))}}> <img src="https://img.icons8.com/color/52/000000/trekking.png"/>  <h5 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Hiking</h5></Col>
                <Col style={{cursor:'pointer'}} className={this.state.active3 ?"option  activ":"option desactiv"}  onClick={()=>{this.filtr("Camping",this.state.localisation);this.setState(this.setState(prevState => ({ active3: !prevState.active3 ,active1:true,active2:true,active4:true,active5:true,active6:true })))}}>   <img src="https://img.icons8.com/color/52/000000/camping-tent.png"/><h5 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Camping</h5></Col>
                <Col style={{cursor:'pointer'}} className={this.state.active4 ?"option  activ":"option desactiv"}  onClick={()=>{this.filtr("Boat Trip",this.state.localisation);this.setState(this.setState(prevState => ({ active4: !prevState.active4 ,active1:true,active3:true,active2:true,active5:true,active6:true  })))}}> <img src="https://img.icons8.com/color/52/000000/windsurfing.png"/> <h5 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Boat Trip</h5></Col>
                <Col style={{cursor:'pointer'}} className={this.state.active5 ?"option  activ":"option desactiv"}  onClick={()=>{this.filtr("Horse Riding",this.state.localisation);this.setState(this.setState(prevState => ({ active5: !prevState.active5 ,active1:true,active3:true,active4:true,active2:true,active6:true})))}}>  <img src="https://img.icons8.com/color/52/000000/horse.png"/> <h5 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Horse Riding</h5></Col>
                <Col style={{cursor:'pointer'}} className={this.state.active6 ?"option  activ":"option desactiv"} onClick={()=>{this.filtr("Running",this.state.localisation);this.setState(this.setState(prevState => ({ active6: !prevState.active6 ,active1:true,active3:true,active4:true,active5:true,active2:true })))}}> <img src="https://img.icons8.com/color/52/000000/running.png"/>  <h5 style={{ fontFamily: "'La Belle Aurore',cursive"}}>Running</h5></Col>
                
            </Row>
            </Container>
        </div> );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return ({
        filtr_pos:(pos,typeact)=>
       { 
             dispatch({
                type:"FILTER_REG",
                pos ,
                typeact
             })
       },
       filtractiv:(typeact,pos)=>{
            dispatch({
                type:'FILTER_ACT',
                typeact,
                pos
            })
        
        },
        allact:(pos)=>{
            dispatch({
                type:'ALL_ACT'
                ,pos
            })
        },
        allreg:(typeact)=>{
            dispatch({
                type:'ALL_REG',
                typeact
            })
        }
    })
}


export default connect(null,mapDispatchToProps) (Header);