import React, { Component } from "react";

 

export class TS1 extends Component {

  constructor() {

    super();

    this.state = {

      count: 0,

      text: "", // Initialize the text state

    };

  }

 

  handleTextChange = (e) => {

    const text = e.target.value;

    const words = text.split(/\s+/); // Split the text into words

    const wordCount = words.length;

 

    this.setState({

      count: wordCount,

      text: text, // Update the text state

    });

  };

 

  render() {

    return (

      <div className="container-fluid bg-tertiary-color vh-100 d-flex justify-content-center align-items-center">

        <div className="container-md bg-white p-4 shadow w-50">

          <h1 className="text-center">Responsive Paragraph Word Counter</h1>

          <textarea

            className="form-control border border-dark"

            onChange={this.handleTextChange}

          ></textarea>

          <p className="p-3 text-left">Word Count: {this.state.count}</p>

        </div>

      </div>

    );

  }

}