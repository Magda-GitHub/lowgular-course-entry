import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EmployeeModel} from "../../model/employee.model";
import {Observable} from 'rxjs';


@Component({
  selector: 'app-employees-faces',
  templateUrl: './employees-faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesFacesComponent {
  data$: Observable<EmployeeModel[] | null> = this._httpClient.get<[]>( 'assets/data/employees.json');
  constructor(private _httpClient: HttpClient) {
  }
}
