import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {

  id:string;

  student:Student;


  constructor(private rou:Router,private ser:StudentService,private act:ActivatedRoute){}
  ngOnInit(): void {



    this.id=  this.act.snapshot.params['id'];
    this.getData();
   
  }

  getData(){

    this.ser.getByName(this.id).subscribe((res)=>{

    this.student=res as Student;

    })
  }


  GoToHome() {

    this.rou.navigate(['']);
   
    }

}


