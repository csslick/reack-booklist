import React, { Component } from "react";

class Button extends Component {
  
  render() {
    const {handleClick} = this.props;
    
    return (
      <>
        <button 
          style={{ background: "red", color: "white" }}
          onClick={handleClick}
        >
          lower Button
        </button>
      </>
    );
  }
}

export default Button;
