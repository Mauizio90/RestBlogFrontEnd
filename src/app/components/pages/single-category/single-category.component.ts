import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/category.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {

  public postsByCategories?: Post[];

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private postService: PostService){}
  
  public category?: Category;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryName = params.get('categoryName');
      this.categoryService.getCategories().subscribe((categories: Category[]) => {
        this.category = categories.find(category => category.name === categoryName);
      
      });

      
  this.route.paramMap.subscribe(params => {
    const categoryName = params.get('categoryName');

    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.category = categories.find(category => category.name === categoryName);

      if (this.category?.id) {
        this.postService.getPostsbyCategories(this.category?.id ?? 0).subscribe((data: Post[]) => {
          this.postsByCategories = data;
        });
      } else {
        this.postService.getPosts().subscribe((data: Post[]) => {
          this.postsByCategories = data;         
        });
      }
    });
  });
  
    });
  }
  

}
