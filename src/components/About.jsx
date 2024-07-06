import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor call ");
 
  }

  async componentDidMount() {
    // console.log("parent did mount");
    
    // console.log(userInfo)
  }

  render() {
    // console.log("parent rendered");

    // const { name, location, avatar_url} = ;
    return (
      <>
        <h1>About</h1>
        <h2>This is Namaste React Series</h2>
        <UserClass
          
       
        />
      </>
    );
  }
}

export default About;
