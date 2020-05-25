import { Component, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FlickrService } from '../services/flickr.service';
import { FirebaseUserModel } from "../modal/user.modal";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  user: FirebaseUserModel = new FirebaseUserModel();


  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(private menu: MenuController, private flikrService: FlickrService, private route: ActivatedRoute) {

    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: []
    };
  }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData["data"];
      if (data) {
        this.user = data;
      }
    });

    this.flikrService.getListofPhotos().subscribe(
      (data: any) => {
        this.sliderOne.slidesItems = data.slice(2, 9);
      }
    )
  }

  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
