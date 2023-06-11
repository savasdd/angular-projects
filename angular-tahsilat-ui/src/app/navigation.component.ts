import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Router} from "@angular/router";
import {IzinService} from "./security/izin.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  girisYap$: Observable<boolean>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private service: IzinService, private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.girisYap$ = this.service.girisObservable();
    this.ref.detectChanges();
  }

  cikisYap() {
    this.service.cikisYap();
    this.router.navigate(['/login']);
  }
}
