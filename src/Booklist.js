import React, { Component } from "react";
import Book from "./Book";
import bookData from "./data";

class Booklist extends Component {
  state = {
    books: bookData
  };

  handleClick = () => {
    console.log("information of parent");
  };

  render() {
    const books = this.state.books.map(book => {
      return <Book 
          info={book} 
          key={book.id} 
          handleClick={this.handleClick} 
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
