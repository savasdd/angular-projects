import {Component, Injectable} from '@angular/core';
import {DateAdapter} from "@angular/material/core";
import {
    DateRange,
    MAT_DATE_RANGE_SELECTION_STRATEGY,
    MatDateRangeSelectionStrategy
} from "@angular/material/datepicker";

@Injectable()
export class FiveDayRangeSelectionStrategy implements MatDateRangeSelectionStrategy<string> {
    constructor(private _dateAdapter: DateAdapter<string>) {}

    selectionFinished(date: string | null): DateRange<string> {
        return this._createFiveDayRange(date);
    }

    createPreview(activeDate: string | null): DateRange<string> {
        return this._createFiveDayRange(activeDate);
    }

    private _createFiveDayRange(date: string | null): DateRange<any> {
        if (date) {
            const d = new Date(date)
            const day = d.getDay();
            const diff = d.getDate() - day + (day == 0 ? -6 : 1);
            const start = new Date(d.setDate(diff));
            const end = new Date(d.setDate(diff + 6));
            return new DateRange<any>(start, end);
        }
        return new DateRange<string>(null, null);
    }
}

@Component({
  selector: 'app-shift-schedule',
  templateUrl: './shift-schedule.component.html',
  styleUrls: ['./shift-schedule.component.scss'],
    providers: [
        {
            provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
            useClass: FiveDayRangeSelectionStrategy,
        },
    ],
})
export class ShiftScheduleComponent {
    shiftTableElements: Array<object>;

    constructor() {
        this.shiftTableElements = [
            {
                id: 1,
                day: 'Mon',
                entryDate: '09:15',
                checkOutDate: '16:00',
                location: 'Odtü Teknokent'
            },
            {
                id: 2,
                day: 'Tue',
                entryDate: '09:15',
                checkOutDate: '16:00',
                location: 'Odtü Teknokent'
            },
            {
                id: 3,
                day: 'Wed',
                entryDate: '09:15',
                checkOutDate: '16:00',
                location: 'Odtü Teknokent'
            },
            {
                id: 4,
                day: 'Thu',
                entryDate: '09:15',
                checkOutDate: '16:00',
                location: 'Odtü Teknokent'
            },
            {
                id: 5,
                day: 'Fri',
                entryDate: '09:15',
                checkOutDate: '16:00',
                location: 'Odtü Teknokent'
            },
            {
                id: 6,
                day: 'Sat',
                entryDate: '-',
                checkOutDate: '-',
                location: '-'
            },
            {
                id: 7,
                day: 'Sun',
                entryDate: '-',
                checkOutDate: '-',
                location: '-'
            },
        ]
    }
}
