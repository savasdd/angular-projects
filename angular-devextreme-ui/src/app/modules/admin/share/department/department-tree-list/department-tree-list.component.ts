import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {DxDropDownBoxComponent, DxTreeListComponent} from 'devextreme-angular';
import {GenericDataSourceFileService} from '../../../../../shared/data-source/generic-data-source-file.service';

@Component({
    selector: 'app-department-tree-list',
    templateUrl: './department-tree-list.component.html',
    styleUrls: ['./department-tree-list.component.css']
})
export class DepartmentTreeListComponent implements OnChanges {
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onValueChanged: EventEmitter<any> = new EventEmitter<any>();
    @Input() title: string;
    @Input() itemValue = 0;
    @Input() width: number;
    @Input() placeHolder: string;
    @ViewChild('treeViewDropdownBox', {static: true}) treeViewDropdownBox: DxDropDownBoxComponent;
    @ViewChild('dxDropdownTreeList', {static: false}) dxDropdownTreeList: DxTreeListComponent;
    container: any = $('body');
    searchText = '';
    departmentDataSource: any = {};
    rootValue: any = {};
    isDropDownBoxOpened = false;
    isGo = true;

    constructor(private genericDataSourceFileService: GenericDataSourceFileService) {
        this.departmentDataSource = genericDataSourceFileService.instance('department');
    }

    onRowClick(e) {
        if (this.isGo) {
            this.itemValue = e.data.id;
            this.isDropDownBoxOpened = false;
            this.onValueChanged.emit(e.data);
        }
        this.isGo = true;
    }

    onRowExpanding(e) {
        this.isGo = false;
    }

    onFocusedRowChanged(e) {
        // console.log(e.row.data);
    }

    onPopupShown(e: any) {
        e.component.content().style.height = 'auto';
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.width) {
            this.treeViewDropdownBox.width = this.width;
        }
        if (this.placeHolder) {
            this.treeViewDropdownBox.placeholder = this.placeHolder;
        }
    }

    showClearButton(e) {
        if (e.value == null) {
            this.itemValue = null;
            this.onValueChanged.emit(null);
        }
    }

}
