import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  public postsUpdated = new Subject<Post[]>();
  // private postsUpdated = new Subject<Post[]>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getPosts() {
    this.http
      .get<{ message: string, posts: any }>('http://localhost:3000/api/posts')
      .pipe(map(postData => {
        // console.log("PostsService -> getPosts -> postData.posts", postData.posts)
        return postData.posts.map(post => {
          return {
            ...post,
            id: post._id
          };
        });
      }))
      .subscribe(transformsPost => {
        // console.log("PostsService -> getPosts -> transformsPost", transformsPost)
        this.posts = transformsPost;
        this.postsUpdated.next([...this.posts]);
      })
  }

  // getPostUpdateListener() {
  // return this.postsUpdated;
  // return this.postsUpdated.asObservable();
  // }

  getPost(id: string) {
    return this.http.get<{ _id: string, title: string, content: string }>(`http://localhost:3000/api/posts/${id}`);
  }

  addPost(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };
    // console.log("PostsService -> addPost -> post", post)
    this.http.post<{ message: string, postId: string }>('http://localhost:3000/api/posts', post)
      .subscribe(response => {
        const id = response.postId;
        post.id = id;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(['/']);
      });
  }

  updatePost(id: string, title: string, content: string) {
    const post: Post = { id: id, title: title, content: content };
    // console.log("PostsService -> updatePost -> post", post)
    this.http.put(`http://localhost:3000/api/posts/${post.id}`, post)
      .subscribe(response => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p.id === id);
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(['/']);
      });
  }

  deletePost(postId: string) {
    this.http.delete<{ message: string }>(`http://localhost:3000/api/posts/${postId}`)
      .subscribe(() => {
        this.posts = this.posts.filter(post => post.id !== postId);
        this.postsUpdated.next([...this.posts]);
      });
  }
}
