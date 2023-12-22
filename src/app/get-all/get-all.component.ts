import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {




  student:Student[]=[];

  constructor(private ser: StudentService,private rou:Router){}


  ngOnInit(): void {

    
    this.getAllData();
  
  }


  getAllData(){
    this.ser.getAll().subscribe((res)=>{
      console.log(res);
      this.student=res;

    })
  }


  postData() {

     this.rou.navigate(['post']);
   
    }


    getById(id: string) {
      console.log(id);
      this.rou.navigate(['getById',id]);

      }



      deleteOne(id: string) {
        console.log(id);
        this.rou.navigate(['delete',id]);
   
        }
        UpdateOne(id: string) {
          console.log(id);
          this.rou.navigate(['update',id]);
       
        }

}




