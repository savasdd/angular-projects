import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilService} from "../../../../shared/util.service";
import {GenericService} from "../../../../shared/generic.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

    workerDataSource: any[];
    workerService: GenericService;
    workerData: any;
    workerProfileDataSource: any[];
    workerProfileService: GenericService;
    workerProfileData: any;
    breakProfileDataSource: any[];
    breakProfileService: GenericService;
    breakProfileData: any;
    user: string | null;

    /**
     * Constructor
     */
    constructor(private _changeDetectorRef: ChangeDetectorRef,
                private http: HttpClient,
                private genericService: GenericService
    ) {
        this.workerService = genericService.instance('workers');
        this.workerProfileService = genericService.instance('workerprofiles');
        this.breakProfileService = genericService.instance('profilebreaks');

        this.workerService.findAll(UtilService.setPage({
            skip: 0,
            take: 20,
        })).then((res) => {
            this.workerDataSource = res.items;
        });

        this.workerProfileService.findAll(UtilService.setPage({
            skip: 0,
            take: 20,
        })).then((res) => {
            this.workerProfileDataSource = res.items;
        })

        this.breakProfileService.findAll(UtilService.setPage({
            skip: 0,
            take: 20,
        })).then((res) => {
            this.breakProfileDataSource = res.items;
        })
    }

    ngOnInit(): void {
    }

    onWorkerClick(e: MouseEvent): void {
        this.workerData = this.workerDataSource.filter((data) => data.id === +e.target['id']);
        this.workerProfileData = this.workerProfileDataSource.filter((data) => data.worker.id === +e.target['id']);

        const breakProfileId = this.workerProfileData[0] ? this.workerProfileData[0].profile.id : null;
        this.breakProfileData = this.breakProfileDataSource.filter((data) => data.profile.id === breakProfileId);
    }
}
