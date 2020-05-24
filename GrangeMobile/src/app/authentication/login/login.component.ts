import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = "";

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() { }

  login(value) {
    this.authService.doLogin(value).then(
      (success) => {
        this.router.navigate(["app/home"]);
      },
      (err) => {
        this.errorMessage = err.message;

      }
    )
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

}
