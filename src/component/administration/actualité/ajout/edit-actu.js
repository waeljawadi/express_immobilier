import React from "react"
import { Component } from "react"
import _css_ from "../../style/style.module.css"
import "../../catalogue/ajout/style/style.css"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import axios from "axios"
import { Redirect } from "react-router-dom"
import "react-notifications/lib/notifications.css"
import { NotificationContainer, NotificationManager } from "react-notifications"
import {connect} from 'react-redux'



import ReactTooltip from "react-tooltip"

import ReactFancyBox from "react-fancybox"
import "react-fancybox/lib/fancybox.css"

const BASE_URL = "http://localhost:3000/"
class EditActualite extends Component {
  constructor(props) {
    super(props)
    {

      this.state = { 
      
        date_postulation:'',
        dcourte:'',
        dcomplet:'',
       
       }

      this.state = {
       
        date_postulation: "",
        dcourte: "",
        dcomplet: "",
        images: [],
        imageUrls: [],
        message: ""
      }

    }
  }
  selectImages = event => {
    let images = []
    for (var i = 0; i < event.target.files.length; i++) {
      images[i] = event.target.files.item(i)
    }
    images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
    let message = `${images.length} valid image(s) selected`
    this.setState({ images, message })
  }
  uploadImages = () => {
    const uploaders = this.state.images.map(image => {
      const data = new FormData()
      data.append("image", image, image.name)
      // Make an AJAX upload request using Axios
      return axios.post(BASE_URL + "upload", data).then(response => {
        this.setState({
          imageUrls: [response.data.imageUrl, ...this.state.imageUrls]
        })
      })
    })
    // Once all the files are uploaded
    axios
      .all(uploaders)
      .then(() => {
        console.log("done")
      })
      .catch(err => alert(err.message))
  }



  componentDidMount() {
        
    this.setState({
        ...this.props.listactu.filter((el)=>(el._id==this.props.match.params.id))[0]
    })
}
  editactualite=()=>
  {
     axios.put(`/editactu/${this.state._id}`,{
       
      date_postulation:this.state.date_postulation,
      dcourte:this.state.dcourte,
      dcomplet:this.state.dcomplet,
     
   }) 
    .then(()=>this.props.editActuReducer({...this.state})) 
    .catch((err)=>alert(err))
  }


  handlechange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <div className={`content-wrapper ${_css_.padds}`}>
          <Tabs>
            <TabList>
              <Tab>Information</Tab>
              <Tab>Images</Tab>
            </TabList>
           
            <TabPanel>
              <div className="container ajouter">
                <form>
                  <div className="row">
                  <div className="col-half">
                    <div className="input-group input-group-icon">
                      <textarea
                        onChange={this.handlechange}
                        className="form-control"
                        placeholder="Description courte"
                        name="dcourte"
                        value={this.state.dcourte}
                      />
                    </div></div></div>
                     <div className="row">
                     <div className="col-half">
                    <div className="input-group input-group-icon area_height">
                      <textarea
                        placeholder="Description detaillée"
                        className="form-control"
                        name="dcomplet"
                        value={this.state.dcomplet}
                        onChange={this.handlechange}
                      />
                    </div>
                  </div></div>
                  <div className="row">
                  <div className="col-half">
                    <div className="input-group input-group-icon">
                      <input
                        type="date"
                        name="date_postulation"
                        onChange={this.handlechange}
                        value={this.state.date_postulation}
                        data-tip={`Required | date de postulation`}
                      />
                      <div className="input-icon">
                        <i className="fa fa-user" />
                      </div>
                    </div>
                  </div></div>
                </form>
              </div>
            </TabPanel>
           
            <TabPanel>
              <input
                className="form-control "
                type="file"
                onChange={this.selectImages}
                multiple
              />
              <p className="text-info">{this.state.message}</p>
              <button
                className="btn btn-primary"
                value="Submit"
                onClick={this.uploadImages}
              >
                Upload all pictures
              </button>
              <p />
              <div className="row">
                {this.state.imageUrls.map((url, i) => (
                  <div className="col-lg-2 flexit" key={i}>
                    {/* <img
                        src={BASE_URL + url}
                        className="img-rounded img-responsive"
                        alt="not available"
                      /> */}

                    <ReactFancyBox
                      thumbnail={BASE_URL + url}
                      image={BASE_URL + url}
                    />

                    <p />

                    <br />
                  </div>
                ))}
              </div>
              <p />

              {/* <div className="col-lg-2">
                <p>
                  <img src={BASE_URL + `images/uploads/1552498102274-53121645_1963064374001345_6607211026255446016_n.jpg`}  />
                </p>
              </div> */}
            </TabPanel>
          </Tabs>
          <button
            type="submit"
            
            className="btn btn-success"
            onClick={this.editactualite}
          >
            Editer Article
          </button>
         


        </div>

        <NotificationContainer />
        <ReactTooltip />
      </React.Fragment>
    )
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
        editActuReducer:editactu=>
        {
            dispatch({
                type:'EDIT_ACTU',
                editactu
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(EditActualite);