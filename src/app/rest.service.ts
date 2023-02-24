import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/users';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  url:string="http://localhost:3000/Users";
  constructor(private http:HttpClient) {}



 postUsers(data:any)
 {
  return this.http.post<Users[]>(this.url,data);
 }
 
 GetUsers()
 {
  
  return this.http.get<Users[]>(this.url);

 
 }
 
 DeleteUsers(id:number)
 {
 
  return this.http.delete("http://localhost:3000/Users/"+id);

 }

 EditUsers(datas:any)
 {
   
  return this.http.put("http://localhost:3000/Users/"+datas.id,datas);
 }

  
 
}


