import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { HomeComponent } from './home/home.component';

import { LigueComponent } from './ligue/ligue.component';
import { LigueDetailsComponent } from './ligue-details/ligue-details.component';
import { NacionalityDetailsComponent } from './nacionality-details/nacionality-details.component';
import { MatButtonModule, MatIconModule, MatSidenavModule,
   MatListModule, MatGridListModule, MatExpansionModule
   , MatSortModule, MatTableModule, MatToolbarModule, 
   MatSelectModule, MatOptionModule, MatSnackBarModule,
    MatDialogModule, MatInputModule, MatCheckboxModule, 
    MatNativeDateModule, MatDatepickerModule, MatPaginatorModule,
    } from '@angular/material';
     import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
     import { NationalityComponent } from './nationality/nationality.component';
     import { CommonModule } from '@angular/common';
     import { AppRoutingModule } from './/app-routing.module';  

     import { HttpClientModule } from '@angular/common/http';
     import { AboutComponent } from './about/about.component';
     import {NationalityService } from './nationality.service';
     import {TeamService } from './team.service';
     import {LigueService } from './ligue.service';
     import { AngularFireModule } from 'angularfire2';
     import { AngularFireDatabaseModule } from 'angularfire2/database';
    import { environment } from './../environments/environment';
    import { AngularFirestoreModule } from 'angularfire2/firestore';
const Routes = [
 

  { path: 'mannschaft', component: TeamComponent},
  { path: 'nationality', component:NationalityComponent},
  
  { path: 'ligue', component: LigueComponent},
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamDetailsComponent,
    HomeComponent,
  
    LigueComponent,
    LigueDetailsComponent,
    NacionalityDetailsComponent,
    AboutComponent,
    NationalityComponent,
   
 
  ],
  imports: [
    BrowserModule, CommonModule,
    BrowserAnimationsModule,AngularFireModule.initializeApp(environment.firebase),AngularFireDatabaseModule,
    MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,AngularFirestoreModule,
    MatGridListModule, MatExpansionModule, MatTableModule,
    MatToolbarModule, MatSelectModule, MatOptionModule,
    MatSnackBarModule, MatDialogModule, MatInputModule,
    MatDatepickerModule, MatCheckboxModule, MatNativeDateModule,
    MatPaginatorModule, MatSortModule,
    FormsModule,AngularFirestoreModule,
    RouterModule.forRoot(Routes),
    HttpClientModule,
    AppRoutingModule
  ],
  entryComponents: [TeamDetailsComponent, LigueDetailsComponent, NacionalityDetailsComponent],
   providers: [TeamService, LigueService, NationalityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
