

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


      case 'EDIT_IMMO':
      return (
          state.map(el=>el._id===action.editimmo._id? el=action.editimmo:el)
      )

      case 'SEARCH_IMMO' : 
        return (
            state.filter(el => el.title.toLocaleLowerCase().indexOf(action.keyword)> -1)
        )
     

      default :
      return state
  }
}
export default immoReducer