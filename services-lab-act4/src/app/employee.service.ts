import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }
  getEmployees() {
    return [
      {id:104, firstname:'June Sarah', lastname:'Quiambao',email:'jpquiambao@student.hau.edu.ph'},
      {id:101, firstname:'Joseph', lastname:'Dizon',email:'jdizon@hau.edu.ph'},
      {id:102, firstname:'James', lastname:'Atienza',email:'jatienza@hau.edu.ph'},
      {id:103, firstname:'John', lastname:'Cena',email:'jcena@hau.edu.ph'},
    ]
  }
}
