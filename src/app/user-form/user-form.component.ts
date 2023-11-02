import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  onSubmitForm(dataForm: NgForm){
    if(dataForm.invalid){
      console.log('Form is Invalid');
      
    }else{
      console.log(dataForm.value);
    }
  }
}
