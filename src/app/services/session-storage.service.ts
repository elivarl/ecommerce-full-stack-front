import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  setItem(key : string, value : any){
    sessionStorage.setItem(key,JSON.stringify(value));
  }

  getItem(key:string){
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key : string){
    sessionStorage.removeItem(key);
  }

  clear(){
    sessionStorage.clear();
  }


}
