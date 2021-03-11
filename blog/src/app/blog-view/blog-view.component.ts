import { Component, OnInit } from '@angular/core';
import { PostService } from "../service/post.service";

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  posts!: any[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.posts;
  }

}
