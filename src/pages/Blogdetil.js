import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

function BlogDetail(){
    let  params = useParams();
    let url = "http://localhost:3001/blogs/"+params.id
    useFetch(url);
    let {data:blog,loading,error} = useFetch(url);

    let nevigate = useNavigate();

    useEffect(()=>{
       if(error){
        setTimeout(() => {
            nevigate('/')
            
        }, 2000);
       }
    },error,nevigate)
    
    return (
      

    <div>
        {error && <div>{error}</div>}
        {loading && <div>{loading}</div>}
        {
            blog && <div>
                <h2>{blog.title}</h2>
                <p>posted by- {blog.author}</p>
                <p>{blog.body}</p>
            </div>
        }
        
    </div>
    )
}

export default   BlogDetail;