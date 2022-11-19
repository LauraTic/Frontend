import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  url='http://127.0.0.1:3000';
  token:string='';

  constructor(private http:HttpClient) { }
}
