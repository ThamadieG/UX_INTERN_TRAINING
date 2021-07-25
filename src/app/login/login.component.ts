import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  userName1?:string;
  password1?:string;

  loginProces(){
    if(this.formGroup.valid){
      this.auth.login(this.formGroup.value).subscribe(result =>{
        let isAuthValid:boolean = false;
        for(let i=0; i<2; i++){
          this.userName1=result[i].email;
          this.password1=result[i].password;
        
          if(this.formGroup.value.email==this.userName1 && this.formGroup.value.password==this.password1){
            isAuthValid=true;

            console.log("login success!!");
            alert("Login Success!!");
            this.router.navigate(['/guests']);
            break;
          }
       }  
       if(!isAuthValid){
          console.log("wrong email or password");
          alert("wrong email or password");
       } 
      })
    }
  }

}
