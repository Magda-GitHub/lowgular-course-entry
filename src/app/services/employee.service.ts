import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from "rxjs";
import {PersonModel} from "../model/person.model";
import {CreateEmployeeModel} from "../model/create-employee.model";
import {ApiResponse} from "./api.response";
import {EmployeeModel} from "../model/employee.model";


@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {


    return this._httpClient.get<ApiResponse<EmployeeModel[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response) => {
        const employees = response.data;
        return employees.map((employeeModel) => {
          return {
            personalNumber: employeeModel.employee_id,
            img: employeeModel.profile_image,
            name: employeeModel.employee_name,
            mail: employeeModel.employee_name + '@lowgular.io'
          } as PersonModel
        })
      })
    );
  }


  create(employee: CreateEmployeeModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(_ => void 0));

  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/2' + id).pipe(map(_ => void 0));
  }
}

