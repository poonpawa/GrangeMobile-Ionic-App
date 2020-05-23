import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent implements OnInit {
  modules: any;

  constructor(private menu: MenuController, private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getModuleData().subscribe(
      (data: any) => {
        this.modules = data.modules;

      }
    )
  }



}
