import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BeerService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    let result: Observable<any>;
    let isLoadFromServer = false;
    if (!isLoadFromServer) {
      let beersJson = '[{"id":1,"name":"Kentucky Brunch Brand Stout"},{"id":2,"name":"Good Morning"},{"id":3,"name":"Very Hazy"},{"id":4,"name":"King Julius"}]';
      let beersList: Array<any> = JSON.parse(beersJson);
      result = Observable.create(observer => {
          setTimeout(() => {
            observer.next(beersList);
            observer.complete();
          }, 2000);
        });
    } else {
      result = this.http.get('http://localhost:8080/good-beers');
    } 
    return result;   
  }
}