import React from 'react'
type Post = {
    id: string;
    title: string;
  };
  
const Postpage = async(props:{params:{id:string}}) => {
    const { id } = props.params;
    const response = await fetch(`http://localhost:3000/posts/${id}`);
if (response.ok) {
    const post = await response.json();
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  } 

  return (
    <div>post not found</div>
  )
}

export default Postpage