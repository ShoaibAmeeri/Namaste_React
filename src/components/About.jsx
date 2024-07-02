import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor mounted ");
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
          name="Muhammad Shoaib"
          location="Faislabad"
          contact="shoaib@gmail.com"
        />
      </>
    );
  }
}

export default About;
