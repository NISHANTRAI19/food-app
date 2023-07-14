import React from "react";

class UserClass extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            user: {
                name: "Dummy",
                photo: "abc",
                location: "Bangalore"

            }
        }
    }
    async componentDidMount() {
        const api = await fetch("https://api.github.com/users/nishantrai19");
        const json = await api.json();
        this.setState({
            user: json,
        })


    }

    render() {

        const { name, location, avatar_url } = this.state.user;

        return (
            <div className="user-card">
                <img className="dev-avatar" src={avatar_url}></img>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4 onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>{this.state.count}</h4>





            </div >
        )
    }
}

export default UserClass;