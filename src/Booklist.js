import React, { Component } from "react";
import Book from "./Book";
import bookData from "./data";

class Booklist extends Component {
  state = {
    books: bookData
  };

  // delete book list
  filterData = (id) => {
    console.log(id)
    const sortBooks = this.state.books.filter(book => {
      return book.id !== id;
    })
    this.setState({
      books: sortBooks
    })
  };

  render() {
    const books = this.state.books.map(book => {
      return <Book 
          info={book} 
          key={book.id} 
          deleteItem={this.filterData}
        />;
    });
    console.log(books);

    return (
      <section>
        <h2>주간 도서 판매 순위</h2>
        <hr />
        {books}
        {/* <button >Booklist click</button> */}
      </section>
    );
  }
}

export default Booklist;
