import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url)
  }

  postMensagem(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.url}`, post);
  }

  // getPostByName(nome: String): Observable<Post> {
  //   return this.http.get<Post>(`${this.url}/${nome}`)
  //   .pipe(map(response => ));
  // }

}
