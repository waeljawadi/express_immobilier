const actuReducer=(state=[],action)=>
{
  switch(action.type)
  {
      case 'UPDATE_ACTU':
      return(
          state=action.listactu
      )
      
      case 'REMOVE_ACTU':
      return(
         state.filter(el=>el._id!==action._id)

      )

      case 'EDIT_ACTU':
      return(
          state.map(el=>el._id===action.editactu._id ? el=action.editactu : el)
      )
     

      default :
      return state
  }
}
export default actuReducer