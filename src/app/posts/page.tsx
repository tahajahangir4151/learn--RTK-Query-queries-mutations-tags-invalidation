"use client";
import { useAddPostMutation, useGetPostsQuery } from "@/store/api/postsApi";
import { useState } from "react";

export default function PostsPage() {
  const { data, isLoading, error } = useGetPostsQuery();
  const [addPost, { isLoading: adding }] = useAddPostMutation();

  const [title, setTitle] = useState("");

  const handleAdd = async () => {
    await addPost({ title, body: "Demo body", userId: 1 });
    setTitle("");
  };

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Client-side Posts</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New post title"
      />
      <button onClick={handleAdd} disabled={adding}>
        {adding ? "Adding..." : "Add Post"}
      </button>

      <div style={{ marginTop: 20 }}>
        {data?.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
    </div>
  );
}
