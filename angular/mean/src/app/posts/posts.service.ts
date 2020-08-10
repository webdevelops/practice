import { Injectable/* , EventEmitter */ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    this.http.get<{}>('http://localhost:3000/api/posts')
      .subscribe(postData => {
        console.log("posrData", postData)
        // this.posts = postData.props;
        this.postsUpdated.next([...this.posts]);

      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
