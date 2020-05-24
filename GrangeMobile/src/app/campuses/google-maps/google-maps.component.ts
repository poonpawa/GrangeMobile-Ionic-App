import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit, AfterViewInit {
  map: any;

  @ViewChild("map", { static: true }) MapEL: ElementRef;

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  ngAfterViewInit() {

  }

  initMap() {
    let coords = { lat: 53.350140, lng: -6.266155 };
    let mapOptions: google.maps.mapOptions = {
      center: coords,
      zoom: 13,
      backgroundColor: 'transparent',
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.MapEL.nativeElement, mapOptions);

    this.addMarkerLabel({ lat: 53.354776, lng: -6.279205 }, this.labelTemplate('Grengegorman Campus', 'The project is being procured on behalf of TU Dublin by a statutory agency, known as the Grangegorman Development Agency', '4:30pm'));
    this.addMarkerLabel({ lat: 53.352126, lng: -6.259819 }, this.labelTemplate('Cathal Brugha St', ' The Faculty of Tourism and Food is based here', '6:30pm'));
    this.addMarkerLabel({ lat: 53.337182, lng: -6.268247 }, this.labelTemplate('Kevin Street Campus', '. A number of areas of study for which TU Dublin is quite famous are based here.', '5:30pm'));
    this.addMarkerLabel({ lat: 53.338517, lng: -6.266428 }, this.labelTemplate('Aungier Street Campus', 'It is one of the largest in TU Dublin  is built on the historically important site of the old Jacobs Biscuits factory', '6:30pm'));
  }

  addMarkerLabel = (coords, contentString) => {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.map
    });

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function () {
      infowindow.open(this.map, marker);
    });
  };

  labelTemplate = (title, desc, time) => {
    return `<h4>${title}</h4><br><p>${desc}</p><p><strong>Closing Time: </strong>${time}</p>`
  };

}
