import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from "../login/login.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

import { SharedRoutingModule } from "../shared/shared-routing.module";
import { KodEditComponent } from './pages/kod/kod-edit/kod-edit.component';
import { KodListComponent } from './pages/kod/kod-list/kod-list.component';
import { BirimListComponent } from './pages/birim/birim-list/birim-list.component';
import { BirimEditComponent } from './pages/birim/birim-edit/birim-edit.component';
import { IlListComponent } from './pages/il/il-list/il-list.component';
import { IlEditComponent } from './pages/il/il-edit/il-edit.component';
import { IsyeriListComponent } from './pages/isyeri/isyeri-list/isyeri-list.component';
import { IsyeriEditComponent } from './pages/isyeri/isyeri-edit/isyeri-edit.component';
import { KonumListComponent } from './pages/konum/konum-list/konum-list.component';
import { KonumEditComponent } from './pages/konum/konum-edit/konum-edit.component';
import { KullaniciListComponent } from './pages/kullanici/kullanici-list/kullanici-list.component';
import { KullaniciEditComponent } from './pages/kullanici/kullanici-edit/kullanici-edit.component';
import { KurumListComponent } from './pages/kurum/kurum-list/kurum-list.component';
import { KurumEditComponent } from './pages/kurum/kurum-edit/kurum-edit.component';
import { ParametreListComponent } from './pages/parametre/parametre-list/parametre-list.component';
import { ParametreEditComponent } from './pages/parametre/parametre-edit/parametre-edit.component';
import { PersonelListComponent } from './pages/personel/personel-list/personel-list.component';
import { PersonelEditComponent } from './pages/personel/personel-edit/personel-edit.component';
import { PersonelTuruListComponent } from './pages/personelturu/personel-turu-list/personel-turu-list.component';
import { PersonelTuruEditComponent } from './pages/personelturu/personel-turu-edit/personel-turu-edit.component';
import { RaporKodListComponent } from './pages/rapor/rapor-kod-list/rapor-kod-list.component';
import { RaporPersonelListComponent } from './pages/rapor/rapor-personel-list/rapor-personel-list.component';
import { RolListComponent } from './pages/rol/rol-list/rol-list.component';
import { RolEditComponent } from './pages/rol/rol-edit/rol-edit.component';
import { RolGrupListComponent } from './pages/rolgrup/rol-grup-list/rol-grup-list.component';
import { RolGrupEditComponent } from './pages/rolgrup/rol-grup-edit/rol-grup-edit.component';
import { HataListComponent } from './pages/log/hata/hata-list/hata-list.component';
import { IslemListComponent } from './pages/log/islem/islem-list/islem-list.component';
import { UserListComponent } from './pages/log/user/user-list/user-list.component';
import { AskerlikListComponent } from './pages/personel/detay/askerlik/askerlik-list/askerlik-list.component';
import { AdresListComponent } from './pages/personel/detay/adres/adres-list/adres-list.component';
import { OkulListComponent } from './pages/okul/okul-list/okul-list.component';
import { OkulEditComponent } from './pages/okul/okul-edit/okul-edit.component';
import { OgrenimListComponent } from './pages/personel/detay/ogrenim/ogrenim-list/ogrenim-list.component';
import { EgitimListComponent } from './pages/personel/detay/egitim/egitim-list/egitim-list.component';
import { DilListComponent } from './pages/personel/detay/yabancidil/dil-list/dil-list.component';
import { HizmetListComponent } from './pages/personel/detay/hizmet/hizmet-list/hizmet-list.component';
import { GorevListComponent } from './pages/personel/detay/gorev/gorev-list/gorev-list.component';
import { ValueRendererComponent } from './pages/kod/value-renderer/value-renderer.component';


@NgModule({
  declarations: [
    KodEditComponent,
    KodListComponent,
    BirimListComponent,
    BirimEditComponent,
    IlListComponent,
    IlEditComponent,
    IsyeriListComponent,
    IsyeriEditComponent,
    KonumListComponent,
    KonumEditComponent,
    KullaniciListComponent,
    KullaniciEditComponent,
    KurumListComponent,
    KurumEditComponent,
    ParametreListComponent,
    ParametreEditComponent,
    PersonelListComponent,
    PersonelEditComponent,
    PersonelTuruListComponent,
    PersonelTuruEditComponent,
    RaporKodListComponent,
    RaporPersonelListComponent,
    RolListComponent,
    RolEditComponent,
    RolGrupListComponent,
    RolGrupEditComponent,
    HataListComponent,
    IslemListComponent,
    UserListComponent,
    AskerlikListComponent,
    AdresListComponent,
    OkulListComponent,
    OkulEditComponent,
    OgrenimListComponent,
    EgitimListComponent,
    DilListComponent,
    HizmetListComponent,
    GorevListComponent,
    ValueRendererComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LoginModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    PanelModule,
    DropdownModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCardModule,
    ButtonModule,
    CalendarModule,
    TabViewModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
  ],
  exports: [
  ]
})
export class SharedModule { }