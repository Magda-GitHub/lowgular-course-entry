import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {


  data$: Observable<EmployeeModel[] | null> = this._client.get<[]>( 'assets/data/employees.json');

  constructor(private _client: HttpClient) {

  }
}
