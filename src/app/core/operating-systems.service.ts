import { Injectable } from '@angular/core';
import { OperatingSystem } from '../interfaces/operating-system';

@Injectable({
  providedIn: 'root'
})
export class OperatingSystemService {
  operationsSystems: OperatingSystem [] = [{id: 1, name: 'Windows'}, {id: 2, name: 'Linux'}, {id: 3, name: 'Mac'}];

  constructor() { }

  getOperatingSystems(): OperatingSystem[]{
    return this.operationsSystems;
  }
}
