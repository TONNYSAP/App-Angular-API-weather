import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cadastroUsuario!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.cadastroUsuario = new FormGroup({
      name: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required)
    })
  }

  cadastrarUsuario() {
    let b = this.cadastroUsuario.value
    console.log(b)
    console.log(b.name, b.cpf)

    this.cadastroUsuario.reset({
      name: '',
      endereco: '',
      email: '',
      telefone: '',
      cpf: ''
    })
  }

}
