import { Injectable } from '@angular/core';
import { Post } from './models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  categoryId?: string | null;

  private baseUrl = "http://localhost:8080/api/posts"

  constructor(private route: ActivatedRoute , private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get("categoryId");
    });
  }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.baseUrl}`)
  }

  getPostsbyCategories(categoryId: number): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.baseUrl}/category/${categoryId}/posts`)
  }

  getPostbyId(postId: number): Observable<Post>{
    return this.http.get<Post>(`${this.baseUrl}/${postId}`)
  }
}
