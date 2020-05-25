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
  isEnrolled: boolean = false;
  images = ['../assets/appDev.jpg', '../assets/Design.jpg', '../assets/Vscode.jpg', '../assets/Vscode1.jpg', '../assets/Screens.png',
    '../assets/Css.png', '../assets/Skills.jpeg', '../assets/node.jpg', '../assets/react.png', '../assets/flutter.png'];

  constructor(private menu: MenuController, private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getModuleData().subscribe(
      (data: any) => {
        this.modules = data.modules;
      }
    )
  }

  selectRandom(Array) {
    return Array[Math.floor(Math.random() * Array.length)];
  }

  enrol(evt, Id) {
    this.dataService.updateModuleData(Id).subscribe(
      (recordUpdated: boolean) => {
        evt.target.setAttribute('disabled', true);
        evt.target.setAttribute('text', 'Enrolled');
      }
    )

  }



}
