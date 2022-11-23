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
    return this._httpClient.get<ApiResponse<EmployeeModel[]>>( 'https://dummy.restapiexample.com/api/v1/employees',).pipe(
      map((response:ApiResponse<EmployeeModel[]>): PersonModel[] => {
        return response.data.map((employeeModel: EmployeeModel) => {
          return {
            name: employeeModel.employee_name,
            personalNumber: employeeModel.employee_id,
            img: employeeModel.profile_image,
            mail: employeeModel.employee_mail + "@lowgular.io",
            surname: ''
          }
        });
      }));
  }

  create(employee: CreateEmployeeModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(_ => void 0));

  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/' + id).pipe(map(_ => void 0));
  }
}

