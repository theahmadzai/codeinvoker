import { Component, OnInit } from '@angular/core';

import { Post } from '../core/models/post.model';
import { POSTS } from '../posts-mock';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
  posts: Post[];

  constructor() {
    this.posts = POSTS;
  }

  ngOnInit() {
  }
}
