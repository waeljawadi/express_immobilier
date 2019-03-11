import React from "react"
import { Component } from "react"
import SingleImmo from './single_immo'

import _css_ from "../../style/style.module.css"
import './listimmo.css'

const Tab =[
{

  


},
{


}







]

class Listimmo extends Component {
  render() {
    return (
      <React.Fragment>
<div className={`content-wrapper ${_css_.padds}`}>

        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-box clearfix">
                <div className="table-responsive">
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th><span>User</span></th>
                        <th><span>Created</span></th>
                        <th className="text-center"><span>Status</span></th>
                        <th><span>Email</span></th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                       

                    { Tab.map((el,index)=><SingleImmo item={el} key={index}  /> 
        )}
                       
                     
                    </tbody>
                  </table>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
  


      </React.Fragment>
    )
  }
}

export default Listimmo
