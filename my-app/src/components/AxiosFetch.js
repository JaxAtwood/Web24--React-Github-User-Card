import React from "react";
import axios from "axios";
import Card from "./Card";
import { Header } from "./Styles";

class AxiosFetch extends React.Component {
    state = {
        user: "",
        followers: [],
    };

componentDidMount() {
    axios
        .get("https://api.github.com/users/JaxAtwood")
        .then(res => {
            this.setState({
                user: res.data
        });
    })
        .catch(err => console.log(err));

    axios
        .get("https://api.github.com/users/JaxAtwood/followers")
        .then(res => {
            console.log("followerData", res.data);
            this.setState({
                followers: res.data
        });
    })
        .catch(err => console.log(err));
}

render() {
    return (
        <div className="tracker">
            <Header>
                <h1>{this.state.user.name}'s GitHub Followers!</h1>
                <h2>I have {this.state.user.followers} followers</h2>
                <h2>I am following {this.state.user.following} users</h2>
                <h4>My GitHub handle is: {this.state.user.login}</h4>
            </Header>
                <Card 
                    followers={this.state.followers}
                />
        </div>
    );
  }
}

export default AxiosFetch;