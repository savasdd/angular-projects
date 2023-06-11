import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-break-carousel-card',
    templateUrl: './break-carousel-card.component.html',
    styleUrls: ['./break-carousel-card.component.scss']
})
export class BreakCarouselCardComponent implements OnChanges {
    @Input() breakProfileData: any;
    slickConfig: any;
    slickSlides: any;
    workerBreakProfileData: any;
    constructor() {
        this.slickConfig = { slidesToShow: 2, slidesToScroll: 1};
        this.slickSlides = [
            {
                day: 'Monday',
                date: '14.04.23',
                breaks: [
                    {
                        type: 'Meal',
                        icon: 'meal',
                        breakStart: '12:00',
                        breakEnd: '13:00',
                    },
                    {
                        type: 'Coffee',
                        icon: 'coffee',
                        breakStart: '14:00',
                        breakEnd: '14:20',
                    },
                ]
            },
            {
                day: 'Tuesday',
                date: '15.04.23',
                breaks: [
                    {
                        type: 'Meal',
                        icon: 'meal',
                        breakStart: '12:00',
                        breakEnd: '13:00',
                    },
                    {
                        type: 'Coffee',
                        icon: 'coffee',
                        breakStart: '14:00',
                        breakEnd: '14:20',
                    },
                ]
            },
            {
                day: 'Wednesday',
                date: '14.04.23',
                breaks: [
                    {
                        type: 'Meal',
                        icon: 'meal',
                        breakStart: '12:00',
                        breakEnd: '13:00',
                    },
                    {
                        type: 'Coffee',
                        icon: 'coffee',
                        breakStart: '14:00',
                        breakEnd: '14:20',
                    },
                ]
            },
            {
                day: 'Thursday',
                date: '14.04.23',
                breaks: [
                    {
                        type: 'Meal',
                        icon: 'meal',
                        breakStart: '12:00',
                        breakEnd: '13:00',
                    },
                    {
                        type: 'Coffee',
                        icon: 'coffee',
                        breakStart: '14:00',
                        breakEnd: '14:20',
                    },
                ]
            },
            {
                day: 'Friday',
                date: '14.04.23',
                breaks: [
                    {
                        type: 'Meal',
                        icon: 'meal',
                        breakStart: '12:00',
                        breakEnd: '13:00',
                    },
                    {
                        type: 'Coffee',
                        icon: 'coffee',
                        breakStart: '14:00',
                        breakEnd: '14:20',
                    },
                ]
            },
            {
                day: 'Saturday',
                date: '14.04.23',
                breaks: [
                    {
                        type: 'Meal',
                        icon: 'meal',
                        breakStart: '12:00',
                        breakEnd: '13:00',
                    },
                    {
                        type: 'Coffee',
                        icon: 'coffee',
                        breakStart: '14:00',
                        breakEnd: '14:20',
                    },
                ]
            },
            {
                day: 'Sunday',
                date: '14.04.23',
                breaks: [
                    {
                        type: 'Meal',
                        icon: 'meal',
                        breakStart: '12:00',
                        breakEnd: '13:00',
                    },
                    {
                        type: 'Coffee',
                        icon: 'coffee',
                        breakStart: '14:00',
                        breakEnd: '14:20',
                    },
                ]
            },
        ]
    }

    ngOnChanges(changes: SimpleChanges) {
        this.workerBreakProfileData = this.breakProfileData;
    }
}
