import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { book } from "./model/book";

@Injectable()

export class BookService
{
    private url = "https://localhost:5001/api/bookstore";

    httpOptions= {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){}

    getBook() { /* metodo para chamar a API*/
        return this.http.get(this.url)
    }
}