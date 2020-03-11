import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { connect} from 'react-redux';
class Home extends Component {
  // state = {
  //   posts: []
  // };
  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
  //     console.log(res);
  //     this.setState({
  //       posts: res.data.slice(0, 10)
  //     });
  //   });
  // }
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src = {logo} alt="logo" style = {{width: 200}}></img>
            <div className="card-content">
          <Link to = {"/" + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center"> No Post Yet </div>
    );
    return (
      <div className="cotainer">
        <h1 className="center">Home</h1>
        {postList}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts : state.posts
  }
}

export default connect(mapStateToProps)(Home);
