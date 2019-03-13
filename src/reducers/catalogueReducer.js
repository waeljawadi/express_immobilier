

const immoReducer=(state=[],action)=>
{
  switch(action.type)
  {
      case 'UPDATE_IMMO':
      return(
          state=action.listimmo
      )

     

      default :
      return state
  }
}
export default immoReducer