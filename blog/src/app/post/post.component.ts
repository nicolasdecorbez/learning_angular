import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  getColor() {
    if (this.postLove > 0) {
      return 'green';
    } else if (this.postLove < 0) {
      return 'red';
    }
  }

  love() {
   this.postLove += 1;
  }

  hate() {
    this.postLove -= 1;
  }

}
