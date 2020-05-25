import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseurl: any;

  constructor(private httpClient: HttpClient) {

  }

  getModuleData() {
    return this.httpClient.get("http://server/json-data-modules.php");
  }

  updateModuleData(id) {
    return this.httpClient.get("http://server/update-module.php?id=" + id);
  }

}
