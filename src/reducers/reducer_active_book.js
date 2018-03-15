/**
 * A reducer is call when an action occurs (is dispatched by the app). It could take two parameters, the state and the action triggered
 * We never mutate the state here. We always have to return a fresh object
 * @param state {*} . State arg is not application state, only the state this reducer is responsible for
 * @param action {string} . The action triggered 
 */
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}