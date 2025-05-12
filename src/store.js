export const initialStore=()=>{
  return{
    count: 0
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_Favorites':

      const {  } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };


      case 'decrease_Favorites':

      const { id,  count } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
