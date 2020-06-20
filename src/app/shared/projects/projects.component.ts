import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectList:any[] = [];
  constructor() { }

  ngOnInit(): void {

    this.projectList = [
      {
        name: 'Delivr',
        technology: 'HTML,SCSS,Angular',
        image: 'assets/images/delivr.PNG',
        link: 'https://delivr.biz/'
      },
      {
        name: 'Tyko',
        technology: 'HTML,SCSS,Angular',
        image: 'assets/images/tyko.PNG',
        link: 'https://tyko.in/'
      },
      {
        name: 'Framebazaar',
        technology: 'HTML,SCSS,Angular',
        image: 'assets/images/framebazaar.PNG',
        link: 'https://framebazaar.com/'
      },
      {
        name: 'IWD India',
        technology: 'HTML,CSS,Vue',
        image: 'assets/images/iwd-india.PNG',
        link: 'https://wtmindia-iwd20.web.app/'
      }
    ]
  }

}
