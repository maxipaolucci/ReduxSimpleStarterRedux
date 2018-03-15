export function selectBook(book) {
  //selectBook is an action creator and needs to return an action. The action has a type and sometimes a payload
  return {  
    type : 'BOOK_SELECTED',
    payload : book
  };
}