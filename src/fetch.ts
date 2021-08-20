import { Comment, Post, User } from "./types";

type Id = number | string;
const BASE_URL = "https://jsonplaceholder.typicode.com";
const toJson = (res: Response) => res.json();

export const fetchPosts = (): Promise<Post[]> =>
  fetch(`${BASE_URL}/posts`).then(toJson);

export const fetchPostById = (postId: Id): Promise<Post> =>
  fetch(`${BASE_URL}/posts/${postId}`).then(toJson);

export const fetchCommentsByPostId = (postId: Id): Promise<Comment[]> =>
  fetch(`${BASE_URL}/posts/${postId}/comments`).then(toJson);

export const fetchUsers = (): Promise<User[]> =>
  fetch(`${BASE_URL}/users`).then(toJson);

export const fetchUserById = (userId: Id): Promise<User> =>
  fetch(`${BASE_URL}/users/${userId}`).then(toJson);

export const fetchUserPosts = (userId: Id): Promise<Post[]> =>
  fetch(`${BASE_URL}/users/${userId}/posts`).then(toJson);
