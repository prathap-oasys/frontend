import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-one',
  templateUrl: './update-one.component.html',
  styleUrls: ['./update-one.component.css']
})
export class UpdateOneComponent {

  id:string;

  student:Student =new Student ();


  constructor(private rou:Router,private ser:StudentService,private act:ActivatedRoute){}




  ngOnInit(): void {
    this.id=  this.act.snapshot.params['id'];

  console.log(this.id);
  this.getData();


  }




  form=new FormGroup({
    name:new FormControl(),
    mail:new FormControl(),
    age:new FormControl(),
    gender:new FormControl()
  }
  );


GoToHome() {

  this.rou.navigate(['']);
 
  }





  postData(){

    const stu=this.form.value as Student;
    console.log(stu);


    this.ser.updateOne(this.id,stu).subscribe((res)=>{
      console.log(res);
    
      this.rou.navigate(['']);
   

    })
  }


  getData(){

    this.ser.getByName(this.id).subscribe((res)=>{

      this.form.patchValue(res);

    })

  }

}
