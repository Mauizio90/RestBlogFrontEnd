import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  public post?: Post;

  constructor(private postService: PostService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('postId');
      if(postId){
        this.postService.getPostbyId(+postId).subscribe((post: Post)=>{
          this.post = post;
        })
        
      }
    })
  }
}
    


