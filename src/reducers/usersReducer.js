const usersReducer=(state=[],action)=>
{
  switch(action.type)
  {
      case 'UPDATE_USERS':
      return(
          state=action.listusers
      )
      case 'REMOVE_USERS':
      return(
         state.filter(el=>el._id!==action._id)

      )
    

      default :
      return state
  }
}
export default usersReducer