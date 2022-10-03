import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects:any[]=[]

  constructor() { }

  ngOnInit(): void {
    this.projects=[{
      name: 'Made of Heaven',
      src: "../../assets/media/madeOfHeaven.JPG",
      description: "University Project: Music band's website using Bootstrap and Sass (Grid, @supports, stylelint required)"
      ,
      url: "https://hungry-leakey-d83831.netlify.app/index.html"
    }]
  }

}
