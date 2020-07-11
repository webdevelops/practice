import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post, FbCreateResponse } from './interfaces';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) { }
  
  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.fbDbUrl}/posts.json`, post)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date)
        }
      }));
  }
}