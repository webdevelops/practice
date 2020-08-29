import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  isLoading = false;
  totalPosts = 0;
  postsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  userId: string;
  private postSub: Subscription;
  private authStatusSub: Subscription;

  constructor(
    public postsService: PostsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.userId = this.authService.getUserId();
    this.postsService.getPosts(this.postsPerPage, this.currentPage);

    this.postSub = this.postsService.postsUpdated
      .subscribe((postData: { posts: Post[], postCount: number }) => {
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
        // console.log("PostListComponent -> ngOnInit -> this.posts", this.posts)
      });

    this.userIsAuthenticated = this.authService.getIsAuth();

    // this.authStatusSub = this.authService
    //   .getAuthStatusListener()
    //   .subscribe(isAuthenticated => {
    //     this.userIsAuthenticated = isAuthenticated;
    //   });

    this.authStatusSub = this.authService.authStatusListener
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });

    // this.authService.autoAuthUser();
  }

  onDelete(postId: string) {
    this.isLoading = true;
    this.postsService.deletePost(postId).subscribe(() => {
      this.postsService.getPosts(this.postsPerPage, this.currentPage);
    });
  }

  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.postsService.getPosts(this.postsPerPage, this.currentPage);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
