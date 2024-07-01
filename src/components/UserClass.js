import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      count2: 10,
    };
  }

  render() {
    const { name, location, contact } = this.props;
    let{count, count2} = this.state
    return (
      <div className="user_card">
        <h1> count {count}</h1>
        <h1> count {count2}</h1>
        <button onClick={()=>{
          this.setState({
            count : ++this.state.count,
            count2 : ++this.state.count2
          })
          console.log(count)
        }}>count Increment</button>
      
        <h2>name : {name}</h2>
        <h3>location : {location}</h3>
        <h4>Contact : {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
