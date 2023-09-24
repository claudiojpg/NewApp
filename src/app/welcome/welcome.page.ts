import { Component, OnInit } from '@angular/core';
import { AuthService, Persona } from '../auth.service'; 

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  ultimoUsuarioRegistrado: Persona | null = null;

  constructor(private authService: AuthService) {
    this.ultimoUsuarioRegistrado = authService.obtenerUltimoUsuarioRegistrado();
  }

  ngOnInit() {}
}