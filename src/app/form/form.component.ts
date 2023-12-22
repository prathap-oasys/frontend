
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor(private ser:StudentService,private rou:Router){}


  ngOnInit(): void {
  
  }


  stu:Student=new Student();



  form=new FormGroup({
    name:new FormControl(),
    mail:new FormControl(),
    age:new FormControl(),
    gender:new FormControl()
  }
  );


  postData(){

    const stu=this.form.value as Student;
    console.log(stu);


    this.ser.postData(stu).subscribe((res)=>{
      console.log(res);
    
      this.rou.navigate(['']);
   

    })
  }



  GoToHome() {

    this.rou.navigate(['']);
   
    }


    // getByid(){
    //   this.getByid(this.id)
    // }








}
