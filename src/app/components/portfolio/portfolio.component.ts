import {Component} from '@angular/core';
import {BoxData} from "../../models/boxData";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects = [
    new BoxData(
      "https://addons.mozilla.org/es/firefox/addon/templateasy/",
      "../../../assets/media/portfolio/templateasy.png",
      "TemplateEasy (Firefox Addon)"
    ),
    new BoxData(
      "https://chromewebstore.google.com/detail/templateasy/kobfphnfdonfalajohoembfkfdamcbmp",
      "../../../assets/media/portfolio/templateasy.png",
      "TemplateEasy (Chrome Addon)"
    ),
    new BoxData(
      "https://melodious-syrniki-82598f.netlify.app/",
      "../../../assets/media/portfolio/order.png",
      "Angular Order Management System (Job Interview Mockup)"
    ),
    new BoxData(
      "https://hungry-leakey-d83831.netlify.app/index.html",
      "../../../assets/media/portfolio/madeOfHeaven.JPG",
      "Music Group Website (University Task)"
    ),
    new BoxData(
      "https://competent-lamarr-8bb366.netlify.app/",
      "../../../assets/media/portfolio/chuck.png",
      "Fan Club Website (University Task)"
    ),
    new BoxData(
      "https://jolly-engelbart-81f638.netlify.app/",
      "../../../assets/media/portfolio/ngo.png",
      "NGO Website (University Task)"
    ),
    new BoxData(
      "https://hopeful-swartz-0a258a.netlify.app/",
      "../../../assets/media/portfolio/reading.png",
      "Reading Club (University Task)"
    ),
    new BoxData(
      "https://jolly-khorana-828d26.netlify.app/",
      "../../../assets/media/portfolio/api.png",
      "Connect to Public API (University Task)"
    ),
    new BoxData(
      "https://serene-yonath-090dc5.netlify.app/",
      "../../../assets/media/portfolio/clone.png",
      "Template-Based Website (University Task)"
    ),
    new BoxData(
      "https://glittery-sunshine-a2a3c5.netlify.app/",
      "../../../assets/media/portfolio/cz.png",
      "CzechiaSlovakia.com (Work In Progress)"
    ),
    new BoxData(
      "https://github.com/rpuertaco/personalSite",
      "../../../assets/media/portfolio/porfolio.png",
      "Personal Portfolio"
    )
  ]
}
