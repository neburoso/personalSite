import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { ContactService } from 'src/app/Services/contact.service';

interface contactDetails {
  name:string,
  email:string,
  message:string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // contactMessage: contactDetails;

  // name:FormControl;
  // email:FormControl;
  // message:FormControl;
  // contactForm:FormGroup;
  // isValidForm:boolean;


  constructor(
  //  private formBuilder:FormBuilder,
  //  private contactService: ContactService
    
  ) { 

    // this.isValidForm=false;
    // this.contactMessage={name:"", message:"", email:""}
    // this.name=new FormControl(this.contactMessage.name)
    // this.email= new FormControl(this.contactMessage.email)
    // this.message= new FormControl(this.contactMessage.message)
    // this.contactForm = this.formBuilder.group({
    //   name:this.name,
    //   email: this.email,
    //   message:this.message
    // })


  }

  ngOnInit(): void {
  }

  // sendMessage(){
  // this.contactService.sendMessage(this.contactForm.value)
  // console.log("sent")
  // }


}
