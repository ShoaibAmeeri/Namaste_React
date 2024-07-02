import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor call ");
  }

  componentDidMount() {
    console.log("parent did mount");
  }

  render() {
    console.log("parent rendered");
    return (
      <>
        <h1>About</h1>
        <h2>This is Namaste React Series</h2>
        <UserClass
          name="first"
          location="Faislabad"
          contact="shoaib@gmail.com"
        />
        <UserClass
          name="second"
          location="Faislabad"
          contact="shoaib@gmail.com"
        />
      </>
    );
  }
}

export default About;





/**
 * parent cunstructor call
 * parent rendered
 * 
 * --first cunstructor call
 * --first rendered
 * --Address cunstroctor call 
 * --Address rendered
 * 
 * --2nd cunstructor call
 * --2nd rendered
 * --Address cunstroctor call 
 * --Address rendered
 * 
 * 
 * --first child did mount
 * --second child did mount
 * --parent did mount
 *  */ 

