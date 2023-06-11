import {Component, OnInit} from '@angular/core';
import {GenericDataSourceService} from '../../../../../shared/data-source/generic-data-source.service';

@Component({
    selector: 'app-department-type',
    templateUrl: './department-type.component.html',
    styleUrls: ['./department-type.component.scss']
})
export class DepartmentTypeComponent implements OnInit {

    dataSource: any = {};

    constructor(private genericDataSourceService: GenericDataSourceService) {

        this.dataSource = genericDataSourceService.instance('departmentType');
    }

    ngOnInit() {
    }

}
