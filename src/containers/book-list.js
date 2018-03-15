import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li> 
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

/**
 * We use this method to map the app state into required props of the component. This way we can accss for instance books in the contianer doing this.props.books
 * Whenever the app state changes our component will automatically rerender.
 * 
 * @param state > The whole application state
 */
function mapStateToProps(state) {
  //whatever is returned will show up as props inside of BookList
  return {
    books : state.books
  };
}

/**
 * Anything returned from this function will end up as props on the Booklist container. Same as mapStateToProps works but here we have actionCreators instead of the state to make them 
 * accessible as props of the container. 
 * So in this case selectBook is going to be accessible as this.props.selectBook in the container BookList. 
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch) {
  //whenever selectBook function/action is called, the result should be passed to all of our reducers using the "dispatch"
  return bindActionCreators({ selectBook : selectBook}, dispatch);
}

//Promote BookList from a component to a container - it needs to know about thisnew dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);