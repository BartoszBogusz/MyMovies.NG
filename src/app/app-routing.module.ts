import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewMovieComponent } from './Components/Movies/overviewMovie/overviewMovie.component'
import { AddMovieComponent } from './Components/Movies/addMovie/addMovie.component'
import { DetailsMovieComponent } from './Components/Movies/detailsMovie/detailsMovie.component'
import { UpdateMovieComponent } from './Components/Movies/updateMovie/updateMovie.component'
import { DeleteMovieComponent } from './Components/Movies/deleteMovie/deleteMovie.component'
import { OverviewDiskComponent } from './Components/Disks/overviewDisk/overviewDisk.component'
import { AddDiskComponent } from './Components/Disks/addDisk/addDisk.component'
import { DetailsDiskComponent } from './Components/Disks/detailsDisk/detailsDisk.component'
import { UpdateDiskComponent } from './Components/Disks/updateDisk/updateDisk.component'
import { DeleteDiskComponent } from './Components/Disks/deleteDisk/deleteDisk.component'
import { MainPageComponent } from './Components/Shared/mainPage/mainPage.component';

const routes: Routes = [
  { path: 'movies', component: OverviewMovieComponent },
  { path: 'addMovie', component: AddMovieComponent },
  { path: 'movieDetails/:id', component: DetailsMovieComponent },
  { path: 'movieUpdate/:id', component: UpdateMovieComponent },
  { path: 'movieDelete/:id', component: DeleteMovieComponent },
  { path: 'disks', component: OverviewDiskComponent },
  { path: 'addDisk', component: AddDiskComponent },
  { path: 'diskDetails/:id', component: DetailsDiskComponent },
  { path: 'diskUpdate/:id', component: UpdateDiskComponent },
  { path: 'diskDelete/:id', component: DeleteDiskComponent },
  { path: 'main', component: MainPageComponent },
  { path: '', component: MainPageComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
