import { Component } from '@angular/core';
import { CategoryService } from '../../../category.service';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent {

  constructor(private categoryService: CategoryService){}
  public categories?: Category[];


  ngOnInit(): void{
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories=data;
      
    })
  }

}
