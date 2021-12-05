import { Login } from './models/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

  public MASKS = MASKS;

  cadastroLogin!: FormGroup;
  //senha!: number;
  //confirmsenha!: number;

  login!: Login;
  //loginResult: string = '';

  constructor(private cl: FormBuilder) { }

  ngOnInit(): void {

    this.cadastroLogin = this.cl.group({
      name: ['', Validators.required],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      address: ['', Validators.required],
      telefone: ['', [Validators.required]],
      senha: ['', Validators.required],
      confirmsenha: ['', Validators.required]
    })
  }

  cadastrarLogin(): void {

      this.login = Object.assign({}, this.login, this.cadastroLogin.value);      
    
    if(this.login.senha === this.login.confirmsenha) {

      console.log(this.login)

      this.cadastroLogin.reset({
        name: '',
        cpf: '',
        address: '',
        telefone: '',
        senha: '',
        confirmsenha: ''
      })
    }else {
      alert('As senhas não conferem!')
    }
      

    // this.loginResult = JSON.stringify(this.cadastroLogin.value);
    // console.log(this.loginResult)
  }

}
