import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _formBuilder : FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      name : ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  loginSubmit(){
    let formValue=this.loginForm.value;

    this.router.navigate(['/city']);
  }
}
