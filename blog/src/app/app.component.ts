import { Component } from '@angular/core';

// Custom service
import { PostService } from "./service/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private postService: PostService) { }
}
