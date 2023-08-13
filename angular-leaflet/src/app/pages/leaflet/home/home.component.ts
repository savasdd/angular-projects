import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,) {

  }

  ngOnInit(): void {

  }

  landmark() {
    this.router.navigate(['/leaflet/landmark'], {
      queryParams: {
        data: null,
      }
    });
  }

  routing() {
    this.router.navigate(['/leaflet/routing'], {
      queryParams: {
        data: null,
      }
    });
  }

  antPath() {
    this.router.navigate(['/leaflet/ant-path'], {
      queryParams: {
        data: null,
      }
    });
  }

  geofence() {
    this.router.navigate(['/leaflet/geofence'], {
      queryParams: {
        data: null,
      }
    });
  }


}
