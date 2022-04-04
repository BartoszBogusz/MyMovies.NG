import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './Components/Movies/addMovie/addMovie.component';
import { DeleteMovieComponent } from './Components/Movies/deleteMovie/deleteMovie.component';
import { DetailsMovieComponent } from './Components/Movies/detailsMovie/detailsMovie.component';
import { OverviewMovieComponent } from './Components/Movies/overviewMovie/overviewMovie.component';
import { UpdateMovieComponent } from './Components/Movies/updateMovie/updateMovie.component';
import { OverviewDiskComponent } from './Components/Disks/overviewDisk/overviewDisk.component'
import { AddDiskComponent } from './Components/Disks/addDisk/addDisk.component'
import { DetailsDiskComponent } from './Components/Disks/detailsDisk/detailsDisk.component'
import { UpdateDiskComponent } from './Components/Disks/updateDisk/updateDisk.component'
import { DeleteDiskComponent } from './Components/Disks/deleteDisk/deleteDisk.component';
import { MainPageComponent } from './Components/Shared/mainPage/mainPage.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    DeleteMovieComponent,
    DetailsMovieComponent,
    OverviewMovieComponent,
    UpdateMovieComponent,
    OverviewDiskComponent,
    AddDiskComponent,
    DetailsDiskComponent,
    UpdateDiskComponent,
    DeleteDiskComponent,
    MainPageComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
