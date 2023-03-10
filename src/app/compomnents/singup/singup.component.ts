import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SingupService } from 'src/app/service/singup.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  data= {
    name: "",
    email:"",
    password:"",
    about: "",
  }

  constructor(private signup:SingupService, private snak:MatSnackBar ) { }

  ngOnInit(): void {
  }

  doSubmit()
  {
    console.log("try to submit signup form"); 
    console.log("Data", this.data);
    
    if(this.data.name=="" || this.data.email=="" || this.data.password=="" || this.data.about=="")
    {
      this.snak.open("fields should not be empty","Ok" );
      return
    }
    
    this.signup.register(this.data).subscribe
    ( response=>
      {
        console.log(response);
      },
      error=>
      {
        console.log(error);
      }
    ) 
          
        
  }
}