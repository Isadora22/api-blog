import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { Post } from '../model/Post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[] = [];
  post: Post = new Post;
  _nome?: string;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts() {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.listPost = data;
    })
  }

  createPosts() {
    this.postService.postMensagem(this.post).subscribe((data: Post) => {
      this.post = data;
      location.assign('/feed');
    })
  }

  // findPostByName() {
  //   this.post = this.postService.getPostByName(this.post.nome).
  // }
  

}
