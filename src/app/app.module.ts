import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './Components/education/education.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { ProjectsComponent } from './Components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
