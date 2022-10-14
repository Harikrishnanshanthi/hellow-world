import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-componant',
  templateUrl: './form-componant.component.html',
  styleUrls: ['./form-componant.component.css']
})
export class FormComponantComponent {

  submit(log:any)
  {
    console.log("form submited",log)
  }
 

}
