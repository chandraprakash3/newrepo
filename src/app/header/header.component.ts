import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  regform: FormGroup | undefined;
  // login= new FormGroup({
  //   username: new FormControl('',)
  // })
  constructor(private fb: FormBuilder){
    this.regform = this.fb.group({
      userName:['', [Validators.required],[this.userNameCheck]]
    })
  
  }

  userNameCheck(control):Promise<any>{
    let response = new  Promise((resolve, reject)=>{
      let users=['veda','chandu','karthik'];
      let name=control.value;
      setTimeout(()=>{
        if(users.indexOf(name)>=0){
          resolve({"duplicate":true});
        }
        else{
          resolve(null);
        }
      },10000)
    })
    return response;
  }

  get user(){
    return this.regform.get('userName');
  }
}
