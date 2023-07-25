import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { Category } from 'src/app/models/category';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.css']
})
export class PostCardsComponent {

  public posts?: Post[];
  public postsByCategories?: Post[];
  public category?: Category;
  @Input() compact?: boolean;

  constructor(private postService: PostService, private route: ActivatedRoute, private categoryService: CategoryService){    
  }

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const categoryName = params.get('categoryName');

    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.category = categories.find(category => category.name === categoryName);

      if (this.category?.id) {
        this.postService.getPostsbyCategories(this.category?.id ?? 0).subscribe((data: Post[]) => {
          this.posts = data;
        });
      } else {
        this.postService.getPosts().subscribe((data: Post[]) => {
          this.posts = data;
          console.log(this.category?.id);
        });
      }
    });
  });
  }


}
