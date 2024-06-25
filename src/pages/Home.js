import { NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../pages/Home.css"

function Home() {
    
let url = 'http://localhost:3001/blogs'

let{data :blogs, loading, error}= useFetch(url)
  return (
    <div className="Home">
        {error && <div>{error}</div>}
        {loading && <div>loading...</div>}
        {blogs && blogs.map(blogs=>(
            <div key={blogs.id} className="card">
                <h3>{blogs.title}</h3>
                <p>posted by {blogs.author}</p>
                <NavLink to={`/blogs/${blogs.id}`}>Read more</NavLink>
                
            </div>
        ))}

    </div>
  )
}

export default Home;

