import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  navbar:string = "navbar";
  

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 50) {

      const element = document.getElementById(this.navbar);
      element.classList.add('sticky');

      // }

    } else if (window.pageYOffset < 50) {

      const element = document.getElementById(this.navbar);
      element.classList.remove('sticky');

      // console.log('selected type::', this.selectedType, this.disabled);

      // }

    }
  }

}
