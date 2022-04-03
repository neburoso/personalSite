import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
// import "./../../../assets/smtp/smtp.js";
// declare let Email: any;



interface emailToSend{
name:string;
email:string;
message:string;
}


@Component({
  selector: 'app-emailer',
  templateUrl: './emailer.component.html',
  styleUrls: ['./emailer.component.css']
})
export class EmailerComponent implements OnInit {

  newEmail: emailToSend;
  name:FormControl;
  email: FormControl;
  message:FormControl;
  contactForm:FormGroup;
  isValidForm: Boolean | null;

  constructor(
    private formBuilder: FormBuilder,
    
  ) {

    this.newEmail= {name:"", email:"", message:""};
    this.isValidForm = null;
    this.name= new FormControl( this.newEmail.name, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]);
    this.email= new FormControl(this.newEmail.email,[ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
    this.message= new FormControl(this.newEmail.message, [Validators.required, Validators.minLength(1), Validators.maxLength(255)])


    this.contactForm= this.formBuilder.group({
      name:this.name,
      email:this.email,
      message:this.message
    })
   }

  ngOnInit(): void {
  }

  async sendEmail():Promise<void>{

    let responseOK:boolean = false;
    this.isValidForm = false;
    let errorResponse:any;

    if( this.contactForm.invalid){
      console.log("this form is invalid");
      return;
    }
    const sendingEmail :emailToSend = this.contactForm.value;









  }

}
