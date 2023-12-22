import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {




  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/";



  postData(stu: Student): Observable<Student> {
    console.log(stu);

    return this.http.post<Student>(this.url + 'post', stu);

  }

  getAll(): Observable<Student[]> {


    return this.http.get<Student[]>(this.url + 'getAll');
  }


  getByName(id: string): Observable<Student> {


    return this.http.get<Student>(this.url + 'getByName/'+ id);
  }


  updateOne(id: string, stu: Student): Observable<Student> {


    return this.http.put<Student>(this.url + 'update/' + id, stu);
  }



  deleteOne(id: string) {


    return this.http.delete(this.url + 'delete/' + id);
  }









}
