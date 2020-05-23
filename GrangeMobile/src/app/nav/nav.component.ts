import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  constructor(private menu: MenuController, private router: Router) {

  }

  ngOnInit() {
  }

  openPage(pageUrl) {
    this.menu.close();
    this.router.navigateByUrl(pageUrl);
  }

}
