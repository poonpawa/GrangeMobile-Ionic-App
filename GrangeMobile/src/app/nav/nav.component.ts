import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { authService, AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  constructor(private menu: MenuController, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  openPage(pageUrl) {
    this.menu.close();
    this.router.navigateByUrl(pageUrl);
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
