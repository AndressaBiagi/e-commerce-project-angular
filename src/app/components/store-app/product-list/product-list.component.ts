import { Component, OnInit } from '@angular/core';
import { BookService } from "./product-list.service";

@Component({
  selector: 'bookstore-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  books: any;
  bookService : BookService

  constructor(bookService : BookService) { 

    this.bookService = bookService
  }

  ngOnInit(): void { /* quando iniciar o componente irá ir na API e salvar o retorno dela na variavel 'books'*/
    this.books = this.bookService.getBook().subscribe((data => {
      this.books = data;
      console.log(this.books);
    }))
  }

}
