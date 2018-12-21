import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PostsService } from 'src/app/posts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {

  constructor(private postService: PostsService) {
   }

  ngOnInit() {
  }

  onSave(data: NgForm) {
    console.log(data.value.title + ': ' + data.value.content);
    console.log('Added post');
    this.postService.getPosts();
  }

}
