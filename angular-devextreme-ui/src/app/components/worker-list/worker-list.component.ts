import { Component } from '@angular/core';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent {
    dummyUsers: Array<object>;
    constructor() {
        this.dummyUsers = [
            {
                id: 1,
                name: 'Jane Doe',
                title: 'Void'
            },
            {
                id: 2,
                name: 'Soe Doe',
                title: 'System Manager'
            },
            {
                id: 3,
                name: 'Margarett Schmidtt',
                title: 'Marketing Assistant'
            },
            {
                id: 4,
                name: 'Es Se',
                title: 'HR Manager'
            },
            {
                id: 5,
                name: 'Janette James',
                title: 'Office Principle'
            },
            {
                id: 6,
                name: 'Karen Black',
                title: 'IT Engineer'
            },
            {
                id: 7,
                name: 'Felicia Hardy',
                title: 'Office Cat'
            },
            {
                id: 8,
                name: 'Melanie Powser',
                title: 'Sales Expert'
            },
            {
                id: 9,
                name: 'Hillary Green',
                title: 'Export Manager'
            },
            {
                id: 10,
                name: 'Hillary Green',
                title: 'Export Manager'
            },
            {
                id: 11,
                name: 'Hillary Green',
                title: 'Export Manager'
            }
        ]
    }
}
