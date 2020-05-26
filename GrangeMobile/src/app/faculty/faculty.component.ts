import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss'],
})
export class FacultyComponent implements OnInit {
  lecturer: any;
  avatar = ['../../assets/Avatar1.png', '../../assets/Avatar2.png', '../../assets/Avatar3.png', '../../assets/Avatar4.png', '../../assets/Avatar5.png', '../../assets/Avatar6.png'];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getFaculties();
  }

  getFaculties() {
    this.dataService.getFacultyData().subscribe(
      (data: any) => {
        this.lecturer = data.lecturers;
      }
    );
  }
}
