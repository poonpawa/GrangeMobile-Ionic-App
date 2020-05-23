import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  constructor(private httpClient: HttpClient) { }

  getListofPhotos() {
    return this.httpClient.get('http://server/flickrApi.php');
  }
}
