import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

/**
 * We use this method to map the app state into required props of the component. This way we can accss for instance book in the contianer doing this.props.book
 * Whenever the app state changes our component will automatically rerender.
 * 
 * @param state > The whole application state
 */
function mapStateToProps(state) {
  //whatever is returned will show up as props inside of BookDetail
  return {
    book : state.activeBook
  };
}

//Promote BookDetail from a component to a container - it needs to know about thisnew dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps)(BookDetail);