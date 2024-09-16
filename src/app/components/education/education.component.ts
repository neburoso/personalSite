import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {BoxData} from "../../models/boxData";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  courses = [
    new BoxData(
      "https://www.udemy.com/certificate/UC-e40b2710-9fc4-4a86-a540-57e8330e6b8d/",
      "https://udemy-certificate.s3.amazonaws.com/image/UC-e40b2710-9fc4-4a86-a540-57e8330e6b8d.jpg?v=1597320120000",
      "The Web Developer Bootcamp"
    ),
    new BoxData(
      "https://skillsoft.digitalbadges.skillsoft.com/1db910ff-c34f-40cf-93e1-7fd57b7f8166#gs.ensrx7",
      "../../../assets/media/education/AI1.png",
      "Artificial Intelligence: Basic AI Theory"
    ),
    new BoxData(
      "https://skillsoft.digitalbadges.skillsoft.com/9409ec24-ee8a-4dc3-bb8f-2933db057d5f#gs.f9qtge",
      "../../../assets/media/education/AI2.png",
      "Artificial Intelligence: Types of Artificial Intelligence"
    ),
    new BoxData(
      "https://www.udemy.com/certificate/UC-5526ff73-b5a0-4299-871f-74966bfe9717/",
      "https://udemy-certificate.s3.amazonaws.com/image/UC-5526ff73-b5a0-4299-871f-74966bfe9717.jpg?v=1597944462000",
      "Javascript Intermediate level 1 - Mastering the DOM"
    ),
    new BoxData(
      "https://www.udemy.com/certificate/UC-fe72dd73-b9b0-4e6f-8a01-f6251669f054/",
      "https://udemy-certificate.s3.amazonaws.com/image/UC-fe72dd73-b9b0-4e6f-8a01-f6251669f054.jpg?v=1597997288000",
      "Javascript Intermediate level 2 - All about functions"
    ),
    new BoxData(
      "https://www.udemy.com/certificate/UC-aad034ae-9c5e-4cdb-a49f-d0aef601d90f/",
      "https://udemy-certificate.s3.amazonaws.com/image/UC-aad034ae-9c5e-4cdb-a49f-d0aef601d90f.jpg?v=1598032633000",
      "Javascript Intermediate level 3 - JSON"
    ),
    new BoxData(
      "https://www.udemy.com/certificate/UC-e253824a-ab34-4d11-b01d-28237901730f/",
      "https://udemy-certificate.s3.amazonaws.com/image/UC-e253824a-ab34-4d11-b01d-28237901730f.jpg?v=1597474670000",
      "Intro To PHP For Web Development"
    ),
    new BoxData(
      "https://www.udemy.com/certificate/UC-f6c1f466-e390-4177-ba9d-5041eae114e8/",
      "https://udemy-certificate.s3.amazonaws.com/image/UC-f6c1f466-e390-4177-ba9d-5041eae114e8.jpg?v=1598345211000",
      "Learn jQuery for beginners web development"
    )
  ]
}
