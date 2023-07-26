import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public postsfeatured?: Post[];
  public allposts?: Post[];

  constructor(private postService: PostService){}

  ngOnInit(): void {
      this.postService.getPosts().subscribe((data: Post[]) => {
      this.allposts = data;
      this.postsfeatured = data.filter(post => post.featured);
                
    });
  }      
}
