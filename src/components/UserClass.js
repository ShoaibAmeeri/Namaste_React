import React from "React";



class UserClass extends React.Component {

    constructor(props){
        super(props)
        console.log(props)
    }

  render() {
    const {name, location, contact} = this.props
    return (
      <div className="user_card">
        <h2>name : {name}</h2>
        <h3>location : {location}</h3>
        <h4>Contact : {contact}</h4>
      </div>
    );
  }
}

export default UserClass