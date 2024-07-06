import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };

   

    console.log(this.state.userInfo.name + "constructor call");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child did mounted");
    const data = await fetch("https://api.github.com/users/ShoaibAmeeri");
    const json = await data.json();

    this.setState({ userInfo: json });
    console.log(json)
    console.log(this.state.userInfo)
  }

  render() {
    console.log(" rendered");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user_card">
        <img className="user_avatar" src={avatar_url} />
        <div className="details">
          <h2>name : {name}</h2>
          <h3>location : {location}</h3>
          <h4>Contact : @ShoaibAmeeri56</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
