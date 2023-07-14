import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent constructor");
    }

    render() {
        console.log("Parent rendered");
        return (<UserClass />);
    }
}
export default About;