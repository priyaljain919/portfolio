import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [HeaderComponent, IntroComponent, AboutComponent, ExperienceComponent, ProjectsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent
  ]
})
export class SharedModule { }
