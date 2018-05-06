import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../models/post.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()

export class PostService {
  readonly POSTS_URL = 'http://localhost/Projects/api.codeinvoker/public/';
  private posts: Observable<any>;

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
    this.posts = this.http.get(this.POSTS_URL);
    return this.posts;
  }
}
