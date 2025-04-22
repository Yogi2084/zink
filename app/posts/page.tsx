import React from "react";

type Post = {
  id: number;
  title: string;
};

const PostsPage = async () => {
  try {
    const response = await fetch("http://localhost:3000/posts", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts: Post[] = await response.json();

    return (
      <div className="container   ">
        <h1 className="text-2xl font-bold ">Posts</h1>
        {posts.map((post) => (
          <div key={post.id} >
            {post.title}
          </div>
        ))}
      </div>
    );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return <div className="text-red-500 p-4">Error loading posts</div>;
  }
};

export default PostsPage;