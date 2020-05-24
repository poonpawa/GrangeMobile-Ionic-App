import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = "";
  successMessage: string = "";

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.registerForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      confirmpassword: ["", Validators.required]
    });
  }

  register(value) {
    this.authService.doRegister(value).then(
      res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Your account has been created";
        this.router.navigate(["/login"]);
      },
      err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      }
    );
  }

}
