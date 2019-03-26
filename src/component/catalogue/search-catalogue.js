import React, { Component } from 'react';
import {connect} from 'react-redux'
import { MDBCol, MDBIcon } from "mdbreact";
import axios from 'axios';

class SearchPage extends Component {
  
    state = { 
  value:'' }
    
    
  handle_search  = (event) =>
  {
      
 
     this.setState({keyword:event.target.value})
     this.props.search(event.target.value)
  }
  
  
      
     
    
  


  render() { 
    return ( <div>
 <MDBCol md="6">
       <form className="form-inline mt-4 mb-4">
         <MDBIcon icon="search" />
         <input className="form-control form-control-sm ml-3 w-75" 
                type="text"
                placeholder="Search" 
                aria-label="Search" 
                value={this.state.keyword}
                onChange={this.handle_search}/>
    </form>
    </MDBCol>

      
      </div> );
  }
}
 

const mapDispatchToProps=(dispatch)=>
{
 return {

  
    search: (keyword) =>
    {
        dispatch({
            type : 'SEARCH_IMMO',
            keyword
        })
    }
   
   
 }


}




 
export default connect(null,mapDispatchToProps)(SearchPage);






 
