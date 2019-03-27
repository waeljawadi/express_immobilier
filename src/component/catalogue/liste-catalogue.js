
import React, { Component } from 'react';
import Catalogue from './catalogue'
import './list-catalogue.css'
import SearchPage from './search-catalogue';
import {connect} from 'react-redux'
import axios from 'axios'



class ListeCatalogue extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }


    componentDidMount=()=>{
        axios.get('/getimmofront').then((res)=>this.props.updateImmoReducer(res.data))
      }
    
    //   componentDidUpdate=()=>{
    //     axios.get('/getimmofront').then((res)=>this.props.updateImmoReducer(res.data))
       
    // }

    
  
    
    render() { 
        const {listimmo}= this.props
        return ( <div className="toplist">
            <div>
            <center>
                <SearchPage/>
               
                
                
            </center>
            </div>
             <div className="row ctlg container-fluid">
        { listimmo.map((el,index)=><div className="col-lg-4 col-md-6 col-sm-12 ctlg1"><Catalogue item={el} key={index}  /> 
        </div>)}
        
      </div>
      </div> );
    }
}
 
const mapStateToProps=(state)=>
{
    return {
        listimmo:state.immoReducer
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        updateImmoReducer:listimmo=>
        {
            dispatch({
                type:'UPDATE_IMMO',
                listimmo            })
        },

        



       
        
    }
    
}


export default connect(mapStateToProps,mapDispatchToProps)(ListeCatalogue);































// import React, { Component } from 'react';
// import Catalogue from './catalogue'
// import './list-catalogue.css'
// import SearchPage from './search-catalogue';
// import {connect} from 'react-redux'
// import axios from 'axios'



// class ListeCatalogue extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             listimmo : ''
//         }
//     }
//     componentDidMount=()=>{
        
//         axios.get('/getimmofront').then(res => this.setState({'listimmo' :res.data}) )
//       }
     
      
//       componentDidUpdate=()=>{
          
//         axios.get('/getimmofrontsearch',{
//             params: {
//                 keyword: this.props.keyword_
//             }
//           }).then(res => this.setState({'listimmo' :res.data}) )
//       }
    
  
    
//     render() { 
      

//         return ( <div className="toplist">
//             <div>
//             <center>
//                 <SearchPage/>     
//             </center>
//             </div>
//              <div className="row ctlg container-fluid">
//         { [...this.state.listimmo].map((el,index)=><div className="col-lg-4 col-md-6 col-sm-12 ctlg1"><Catalogue item={el} key={index}  /> 
//         </div>)}
//       </div>
//       </div> );
//     }
// }
 
// const mapStateToProps=(state)=>
// {
//     return {
//     //    listimmo:state.immoReducer,
//         keyword_:state.keywordReducer

//     }
// }

// export default connect(mapStateToProps)(ListeCatalogue);