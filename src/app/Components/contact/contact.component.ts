import { Component, OnInit} from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { ContactService } from 'src/app/Services/contact.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

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

    

    // document.getElementById("sb-btn")?.addEventListener("click", function(submit){
    //   let form= document.getElementsByTagName("form");
    //   if(!form[0].checkValidity()){
    //    submit.preventDefault()
    //     form[0].reportValidity()
    //   }
    
    //   })
  }


checkme(contact:any, e:Event){
  e.preventDefault()

  if(!contact.checkValidity()){
    contact.reportValidity()
  }else{
    contact.submit()
  }

  // let form= document.getElementsByTagName("form");
  //   if(!form[0].checkValidity()){
  //      form[0].reportValidity()
  //      return;
  //   }
}
  // sendMessage(){
  // this.contactService.sendMessage(this.contactForm.value)
  // console.log("sent")
  // }


}
