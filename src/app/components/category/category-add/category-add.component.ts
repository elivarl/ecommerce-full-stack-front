import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/common/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit{
  id : number = 0;
  name : string = '';

  constructor(private categoryService:CategoryService, private toastr:ToastrService, private router:Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.getCategoryById();
  }

  addCategory(){
    console.log(this.name);
    let category = new Category(this.id,this.name);    
    this.categoryService.createCategory(category).subscribe(
      res=>{
        this.toastr.success('Categoria registrada correctamente','Categorias');
        this.router.navigate(['admin/category']);
      } 
    );
  }

  getCategoryById(){
    this.activatedRoute.params.subscribe(
      category =>{
        let id = category['id'];
        if(id){
          console.log('Valor de la variable id: '+id);
          this.categoryService.getCategoryById(id).subscribe(
            data =>{
              this.id = data.id;
              this.name = data.name;
            }

          );
        }
      }

    );
  }

}
