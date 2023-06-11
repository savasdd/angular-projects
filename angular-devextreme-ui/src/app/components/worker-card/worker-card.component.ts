import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {GenericService} from "../../shared/generic.service";
import {GenericDataSourceService} from "../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../shared/data-source/generic-data-source-file.service";

@Component({
    selector: 'app-worker-card',
    templateUrl: './worker-card.component.html',
    styleUrls: ['./worker-card.component.scss']
})
export class WorkerCardComponent implements OnChanges {

    @Input() workerData: any;

    breakService: GenericService;
    profileService: GenericService;
    workerGetData: any;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.workerGetData = this.workerData;
    }

}
