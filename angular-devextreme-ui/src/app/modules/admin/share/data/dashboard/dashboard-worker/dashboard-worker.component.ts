import {Component, OnInit} from '@angular/core';
import {GenericDataSourceService} from "../../../../../../shared/data-source/generic-data-source.service";
import {GenericDataSourceFileService} from "../../../../../../shared/data-source/generic-data-source-file.service";
import {GenericService} from "../../../../../../shared/generic.service";

@Component({
    selector: 'app-dashboard-worker',
    templateUrl: './dashboard-worker.component.html',
    styleUrls: ['./dashboard-worker.component.scss']
})
export class DashboardWorkerComponent implements OnInit {

    activityDataSource: any[] = [];
    workerDataSource: any[] = [];
    breakDataSource: any[] = [];
    dashService: GenericService;

    constructor(private genericDataSourceService: GenericDataSourceService,
                private genericDataSourceFileService: GenericDataSourceFileService,
                private genericService: GenericService) {
        this.dashService = genericService.instance("workerdashboards");
        this.getActivityData();
        this.getWorkerData();
        //this.getBreakData();
    }

    ngOnInit(): void {
    }

    getActivityData() {
        this.dashService.customGet('findProfileActivity').then((response: any) => {
            response.map((m: any) => {
                this.activityDataSource.push({Name: m.name, Count: m.count});
            });
        }, err => {
            throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
        });
    }

    getWorkerData() {
        this.dashService.customGet('findProfileWorker').then((response: any) => {
            response.map((m: any) => {
                this.workerDataSource.push({Name: m.name, Count: m.count});
            });
        }, err => {
            throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
        });
    }

    getBreakData() {
        this.dashService.customGet('findBreakActivity').then((response: any) => {
            response.map((m: any) => {
                this.breakDataSource.push({Name: m.name, Count: m.count});
            });
        }, err => {
            throw (err.error.errorMessage ? err.error.errorMessage : err.error.warningMessage);
        });
    }


    customizeTooltip(arg) {
        return {text: `${arg.argumentText}<br>${arg.seriesName}: ${arg.valueText}`};
    }


    pointClickHandler(e) {
        this.toggleVisibility(e.target);
    }

    legendClickHandler(e) {
        const arg = e.target;
        const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

        this.toggleVisibility(item);
    }

    toggleVisibility(item) {
        if (item.isVisible()) {
            item.hide();
        } else {
            item.show();
        }
    }

    customizeText(arg) {
        return `${arg.valueText}`;
    }

}
