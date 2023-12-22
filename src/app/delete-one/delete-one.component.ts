import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete-one',
  templateUrl: './delete-one.component.html',
  styleUrls: ['./delete-one.component.css']
})
export class DeleteOneComponent implements OnInit{

  id:string;



  constructor(private rou:Router,private act:ActivatedRoute,private ser:StudentService ){}


  ngOnInit(): void {
    this.id=  this.act.snapshot.params['id'];

  console.log(this.id);
  this.deleteOne();

  }

  deleteOne(){
    this.ser.deleteOne(this.id).subscribe((res)=>{
      console.log(res);
      this.rou.navigate(['']);

    });
  }


  




}
