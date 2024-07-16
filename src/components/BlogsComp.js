import React, {useEffect,useState} from "react";
import { BlogCard } from "./BlogCard";

const BlogsComp = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(resp =>resp.json())
    .then(data => setPosts(data));  
    },[])


    // const deletepost=>(id){

    // useEffect(()=>{
    //   fetch("https://jsonplaceholder.typicode.com/posts",{Method: DELETE})
    //   .then(resp =>resp.json())
    // })};

 
  return(
    <>
    <div className="containerB">
      {posts.map(post=><BlogCard key={post.id} blog={post} setPosts={setPosts} blogs={posts}/>)}
    </div>
    </>
  )};

  export default BlogsComp;
