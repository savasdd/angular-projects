import { Component } from '@angular/core';

@Component({
  selector: 'app-shift-charts',
  templateUrl: './shift-charts.component.html',
  styleUrls: ['./shift-charts.component.scss']
})
export class ShiftChartsComponent {
    adaptiveLayout: object;
    employeeShiftBreak: any;
    colorPalette: Array<string>;
    customHeader: any;
    dummyBarChart: Array<object>;
    barChartPalette: Array<string>;
    constructor() {
        this.employeeShiftBreak = [
            {
                type: 'break',
                val: '735'
            },
            {
                type: 'shift',
                val: '10320'
            }
        ]
        this.colorPalette = ["#777EF4", "#272947"];
        this.adaptiveLayout = {
            width: 190,
            height: 190,
            keepLabels: false
        }
        this.dummyBarChart = [
            {
                day: 'monday',
                shiftTime: '09:17',
                breakTime: '01:08'
            },
            {
                day: 'tuesday',
                shiftTime: '09:17',
                breakTime: '01:08'
            },
            {
                day: 'wednesday',
                shiftTime: '09:17',
                breakTime: '01:08'
            },
            {
                day: 'thursday',
                shiftTime: '09:17',
                breakTime: '01:08'
            },
            {
                day: 'friday',
                shiftTime: '09:17',
                breakTime: '01:08'
            },
            {
                day: 'saturday',
                shiftTime: '09:17',
                breakTime: '01:08'
            },
            {
                day: 'sunday',
                shiftTime: '09:17',
                breakTime: '01:08'
            }
        ]
        this.barChartPalette = ["#0D0D0D", "#777EF4"]
    }
}
