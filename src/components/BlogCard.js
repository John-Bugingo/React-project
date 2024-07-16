import {useState} from "react";
import { toast } from 'react-toastify';

export const BlogCard = ({blog, setPosts, blogs})=>{
    const [loading, setLoading] = useState(false);
    const deletePost = async () =>{
        try {
            setLoading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${blog.id}`, {
                method: 'DELETE',
              });
              if(response.status == 200){
                const remainBlogs = blogs.filter(bg=> bg.id != blog.id);
                setPosts(remainBlogs);
                toast.success('Blog Deleted!');
              }else{
                toast.error('Blog not deleted');
                }
                setLoading(false);
            } catch (error) {
                console.log(error)
                toast.error('Error occured!');
                setLoading(false);
        }
    }
    return(
        <div className="containerBlogs">
          <div className="card">
            <img
              src="/WhatsApp Image 2023-12-22 at 2.13.58 PM.jpeg"
              style={{
                borderRadius: "1rem 1rem",
                width: "200px",
                height: "250px",
              }} />
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
            <h5>
              Continue to this link <a href="/contact">Contact</a> that you can
              see more
            </h5>
            <div>
              <button disabled={loading} style={{color: 'white', backgroundColor: 'blue', cursor: "pointer"}} className="buttonA" onClick={deletePost}>
                {loading? "Processing...": "Delete"}
                </button>
              <button className="buttonB">
                <a href="">Edit</a>
              </button>
              
            </div>

          </div>
        </div>
    );
}