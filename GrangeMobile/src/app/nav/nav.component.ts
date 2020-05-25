import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FirebaseUserModel } from "../modal/user.modal";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {


  constructor(private menu: MenuController, private router: Router, private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {

  }

  openPage(pageUrl) {
    this.menu.close();
    this.router.navigate([pageUrl]);
  }

  logout() {
    this.authService.doLogout().then(
      (success) => {
        this.menu.close();
        console.log('successfully logged out');
        this.router.navigate(['./login']);
      },
      (error) => {
        this.menu.close();
        console.log('cannot log user out');

      }
    )
  }

}
