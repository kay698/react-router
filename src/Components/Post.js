import React, { Component } from 'react';
import { connect} from 'react-redux';
// import axios from "axios"

class Post extends Component {
    // state = {
    //     posts : null
    //     // id : null
    // }
// componentDidMount (){
//     let id = this.props.match.params.post_id;
//     axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
//         this.setState({
//             // id :id
//             posts : res.data
//         })
//         console.log(res)

//     })
// }
 render ()  {
 const post = this.props.posts ? (
     <div className = "post">
        <h1 className ="center">{this.props.posts.title}</h1>
 <p>{this.props.posts.body}</p>
     </div>
 ) : (
     <div>Loading post...</div>
 )
 return (
   <div className='cotainer'>
     <p>{post}</p>
   </div> 
 }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return{
        post : state.posts.find(post => post.id === id)
    }
  }
export default connect(mapStateToProps)(Post);