import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpRecordService {
  emp1: string[]=["adam","e123","erode"]
  emp2: string[]=["jack","e231","sealm"]
  emp3: string[]=["rock","e998","moon"]

  getemp1(): string[]
  {
    return this.emp1
  }
  getemp2(): string[]
  {
    return this.emp2
  }
  getemp3(): string[]
  {
    return this.emp3
  }

  constructor() { }
}
