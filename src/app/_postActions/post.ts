"use server";

import { createPost, post } from "../_types/post.types";

export const fetchPosts = async () => {
  try {
    const url: string = process.env.NEXT_PUBLIC_POSTS_API_ENDPOINT || "";
    const response: Response = await fetch(url);
    const data: post[] = await response.json();
    console.log("Successful", data);
    return data;
  } catch (error) {
    throw new Error("Posts could not be fetched");
  }
};

export const fetchPost = async (id: number) => {
  try {
    const url: string =
      `${process.env.NEXT_PUBLIC_POSTS_API_ENDPOINT}/${id}` || "";
    const response: Response = await fetch(url);
    const data: post = await response.json();
    console.log("Successful", data);
    return data;
  } catch (error) {
    throw new Error(`Post with id ${id} could not be fetched`);
  }
};

export const updatePost = async (id: number, post: post) => {
  try {
    const url: string =
      `${process.env.NEXT_PUBLIC_POSTS_API_ENDPOINT}/${id}` || "";
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    console.log("Successful", data);
  } catch (error) {
    throw new Error("Post could not be edited");
  }
};

export const createNewPost = async (post: createPost) => {
  const url: string = `${process.env.NEXT_PUBLIC_POSTS_API_ENDPOINT}` || "";
  try {
    const response: Response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data: post = await response.json();
    console.log("Successful", data);
  } catch (error) {
    console.error(error);
    throw new Error("Something went wong");
  }
};
