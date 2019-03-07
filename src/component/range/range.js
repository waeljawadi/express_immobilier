// import React, { Component } from 'react'
// import { Form, Grid} from 'semantic-ui-react'



// export default class TransitionablePortalExampleTransition extends Component {
//   state = { prix: 150000 }

//   handleChange = (e, { name, value }) => this.setState({ [name]: value })


//   render() {
//     const {prix} = this.state

//     return (
//       <Grid columns={3}>
//         <Grid.Column>
//           <Form>
           
//             <Form.Input
//               label={`Prix: ${prix} TND `}
//               min={100000}
//               max={200000}
//               name='prix'
//               onChange={this.handleChange}
//               step={500}
//               type='range'
//               value={prix}
//             />
           
//           </Form>

         
//         </Grid.Column>
//       </Grid>
//     )
//   }
// }