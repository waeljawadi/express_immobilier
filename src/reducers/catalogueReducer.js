

const immoReducer=(state=[],action)=>
{
  switch(action.type)
  {
      case 'UPDATE_IMMO':
      return(
          state=action.listimmo
      )
      case 'REMOVE_IMMO':
      return (
          state.filter(el=>el._id!==action._id)
      )
     

      default :
      return state
  }
}
export default immoReducer