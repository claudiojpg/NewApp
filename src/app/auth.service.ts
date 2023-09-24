import { Injectable } from '@angular/core';

export interface Persona {
  nombre: string;
  correo: string;
  contraseña: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private personas: Persona[] = [];
  private ultimoUsuarioRegistrado: Persona | null = null;

  constructor() {}

  registrarPersona(persona: Persona) {
    this.personas.push(persona);
    this.ultimoUsuarioRegistrado = persona; // Actualiza el último usuario registrado
  }

  obtenerUltimoUsuarioRegistrado(): Persona | null {
    return this.ultimoUsuarioRegistrado;
  }

  verificarCredenciales(correo: string, contraseña: string): boolean {
    const personaEncontrada = this.personas.find((persona) => {
      return persona.correo === correo && persona.contraseña === contraseña;
    });

    return !!personaEncontrada;
  }
}