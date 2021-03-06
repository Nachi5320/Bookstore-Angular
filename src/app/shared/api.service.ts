import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postBooks(data : any){
    return this.http.post<any>("http://localhost:3000/productList", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getBooks(){
    return this.http.get<any>("http://localhost:3000/productList")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateBooks(data :any, id: number){
    return this.http.put<any>("http://localhost:3000/productList"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteBooks(id : number){
    return this.http.delete<any>("http://localhost:3000/productList"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}

