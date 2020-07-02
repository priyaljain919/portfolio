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
        name: 'IWD India',
        image: 'assets/images/iwd-india.PNG',
        link: 'https://wtmindia-iwd20.web.app/',
        desc: 'It\'s basically for Google Women Techmakers global event website for registration, agenda and session for the event. Implemented whole project using Vue, HTML, CSS'
      },
      {
        name: 'Tyko',
        image: 'assets/images/tyko.PNG',
        link: 'https://tyko.in/',
        desc: 'Tyko is type of portal website where user able to choose to become professional or expert domain and show the details about user including like, comment, share and list of timeline post. Implemented whole project using Angular, NgRx Store, HTML, SCSS'
      },
      {
        name: 'Delivr',
        image: 'assets/images/delivr.PNG',
        link: 'https://delivr.biz/',
        desc: 'It\'s an app that connects you to the nearest delivery partner who can make purchases, pick up items from any store or restaurant in the city and bring them to you. Implemented whole project using Angular, HTML, SCSS'
      },
      {
        name: 'Showground',
        image: 'assets/images/showground.PNG',
        link: 'https://showground-app.com/',
        desc: 'Showground is an app to help you find out where all the best local music is with the best possible user experience. Implemented web page using HTML, CSS, JavaScript and JQuery.'
      },
      
    ]
  }

}
