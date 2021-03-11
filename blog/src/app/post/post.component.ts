import { Component, OnInit, Input } from '@angular/core';
import { PostService } from "../service/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle!: string;
  @Input() postContent!: string;
  @Input() postDate!: Date;
  @Input() postLove!: number;
  @Input() index!: number;
  @Input() id!: number;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  love() {
    this.postService.addLike(this.index);
  }

  hate () {
    this.postService.remLike(this.index);
  }

  getColor() {
    if (this.postLove > 0) {
      return 'green';
    } else if (this.postLove < 0) {
      return 'red';
    }
  }

}
