import React from "react";


class Address extends React.Component{
    constructor(props){
        super(props)
        console.log("address constructor call")
    }

    componentDidMount(){
        console.log("Address did mounted")
    }

    render(){
        console.log("address rendered")
        return <h1>Shareef pura fsd</h1>
    }
}

export default Address