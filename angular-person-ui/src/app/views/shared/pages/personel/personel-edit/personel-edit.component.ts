import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personel-edit',
  templateUrl: './personel-edit.component.html',
  styleUrls: ['./personel-edit.component.scss']
})
export class PersonelEditComponent implements OnInit {

  constructor(private router: Router) { }
  personelId: string;

  ngOnInit(): void {
    const { dto } = window.history.state;
    if (dto)
      this.personelId = dto.personelId;
  }

  handleChange(e) {
    //console.log(e.index)
  }

}
