import React from "react";
class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    render() {
        const { name, location } = this.props
        return (
            <div className="user-card">
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4 onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>{this.state.count}</h4>



            </div>
        )
    }
}

export default UserClass;