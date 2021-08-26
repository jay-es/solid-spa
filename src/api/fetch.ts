import { Album, Comment, Photo, Post, User } from "./types";

type Id = number | string;
const BASE_URL = "https://jsonplaceholder.typicode.com";
const toJson = (res: Response) => res.json();

export const fetchAlbums = (): Promise<Album[]> =>
  fetch(`${BASE_URL}/albums`).then(toJson);

export const fetchAlbumById = (albumId: Id): Promise<Album> =>
  fetch(`${BASE_URL}/albums/${albumId}`).then(toJson);

export const fetchPhotosByAlbumId = (albumId: Id): Promise<Photo[]> =>
  fetch(`${BASE_URL}/albums/${albumId}/photos`).then(toJson);

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

export const fetchUserAlbums = (userId: Id): Promise<Album[]> =>
  fetch(`${BASE_URL}/users/${userId}/albums`).then(toJson);

export const fetchUserPosts = (userId: Id): Promise<Post[]> =>
  fetch(`${BASE_URL}/users/${userId}/posts`).then(toJson);
