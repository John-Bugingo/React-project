import React, {useEffect,useState} from "react";

const BlogsComp = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(resp =>resp.json())
    .then(data => setPosts(data));  
    
  
  },[])
  useEffect(()=>{
    console.log(posts);
  },[posts])


  return(
    <>
    <div className="containerB">
      {posts.map(post=>{
        return <div className="containerBlogs">
          <div className="card">
            <img
              src="/WhatsApp Image 2023-12-22 at 2.13.58 PM.jpeg"
              style={{
                borderRadius: "1rem 1rem",
                width: "200px",
                height: "250px",
              }} />
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h5>
              Continue to this link <a href="/contact">Contact</a> that you can
              see more
            </h5>
            <div>
              <button className="buttonA">
                <a href="">Delete</a>
              </button>
              <button className="buttonB">
                <a href="">Edit</a>
              </button>
              
            </div>

          </div>
        </div>;
      })}
    </div>
    </>
  )};

  export default BlogsComp;
