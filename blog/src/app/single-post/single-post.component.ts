import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from "../service/post.service";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  title: string = 'Appareil';
  content: string = 'Lorem';
  pdate: Date = new Date();

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.title = this.postService.getPostById(+id)!.title;
    this.content = this.postService.getPostById(+id)!.content;
    this.pdate = this.postService.getPostById(+id)!.created_at;
  }

}
