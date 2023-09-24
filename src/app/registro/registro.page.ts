import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 
import { UserService } from '../user.service';

interface Persona {
  nombre: string;
  correo: string;
  contraseña: string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;
  personas: Persona[] = [];

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router // Inyecta el servicio Router
  ) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required]
    });
  }

  ngOnInit() {}

  registrarPersona() {
    if (this.registroForm?.valid) {
      const nuevaPersona: Persona = {
        nombre: this.registroForm.get('nombre')?.value,
        correo: this.registroForm.get('correo')?.value,
        contraseña: this.registroForm.get('contraseña')?.value
      };

      this.authService.registrarPersona(nuevaPersona);

      console.log('Persona registrada:', nuevaPersona);
      this.userService.setEmail(nuevaPersona.correo);
      this.registroForm.reset({
        nombre: '',
        correo: '',
        contraseña: ''
      });
    }
  }}