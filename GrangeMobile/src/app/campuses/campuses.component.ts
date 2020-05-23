import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-campuses',
  templateUrl: './campuses.component.html',
  styleUrls: ['./campuses.component.scss'],
})
export class CampusesComponent implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() { }

}
