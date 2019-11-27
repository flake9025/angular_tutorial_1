import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  @Output() userConnected = new EventEmitter();

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
      this.loginFormGroup  =  this.formBuilder.group({
          pseudo: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  login() {
    console.log('credentials to send: ', this.loginFormGroup.value);
    if (this.loginFormGroup.invalid) {
      return;
    }
    this.loginService.login(this.loginFormGroup.value)
    .then((data: any) => {
      console.log('response: ', data);
      if (data.success){
        console.log('success !');
        this.userConnected.emit(data.response);
      }
    });
  }

}
