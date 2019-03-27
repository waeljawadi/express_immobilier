const contactReducer=(state=[],action)=>
{
  switch(action.type)
  {
      case 'UPDATE_CONTACT':
      return(
          state=action.listcontact
      )
      case 'REMOVE_CONTACT':
      return(
         state.filter(el=>el._id!==action._id)

      )
    

      default :
      return state
  }
}
export default contactReducer