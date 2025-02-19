import {  Component,Input,OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';

import { Post} from '../post.model';
import { PostService } from '../post.service';

@Component ({

  selector : ' app-post-list ',
  templateUrl: './post-list.component.html',
  styleUrls : ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {

posrService: PostService;

posts: Post[] = [];
private postSub: Subscription;

  constructor( public postService: PostService){   }

  ngOnInit(){
    this.postService.getPosts();
    this.postService.getPostUpdateListener().subscribe((posts:Post[])=>{
      this.posts=posts;

    });
  }
  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

}
