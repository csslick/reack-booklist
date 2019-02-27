import React, { Component } from "react";
class Book extends Component {
  state = {
    count: 0,
    showInfo: true
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  render() {
    const { id, img, title, author } = this.props.info;
    const { deleteItem } = this.props;
    // const { handleClick } = this.props;
    // console.log(handleClick);

    return (
      <div className="book">
        <img src={img} width="150px" alt="book" />
        <div>
          <h4>Title: {title}</h4>
          <p>By: {author}</p>
          <button 
            onClick={() => deleteItem(id)}>
            Delete
          </button>
          <button onClick={this.handleInfo}>show info</button>
          {console.log(this.state.showInfo)}
          {
            this.state.showInfo ? 
              <p>book information here...</p> 
              : null
          }

          {/* <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            Add Count
          </button>
          <button
            onClick={() => {
              if (this.state.count > 0)
                this.setState({ count: this.state.count - 1 });
            }}
          >
            Lower Count
          </button>
          <button
            onClick={() => {
              this.setState({ count: 0 });
            }}
          >
            Reset Count
          </button>
          <p>{this.state.count}</p>
          <button onClick={handleClick}>I'm from parent</button> */}
        </div>
      </div>
    );
  }
}

export default Book;
