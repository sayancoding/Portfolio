import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IGeneralData, ISkill } from '../core/model/IGeneralData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

   constructor(private httpClient:HttpClient ){}
  
  fetchGeneralData():Observable<IGeneralData>{
    return this.httpClient.get<any>('/data.json');
  }
  
}


