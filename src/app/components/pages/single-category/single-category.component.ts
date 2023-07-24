import { Component } from '@angular/core';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {
  constructor(private route: ActivatedRoute, private categoryService: CategoryService){}
  public category?: Category;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryName = params.get('categoryName');
      this.categoryService.getCategories().subscribe((categories: Category[]) => {
        this.category = categories.find(category => category.name === categoryName);
      
      });
    });
  }
  

}
