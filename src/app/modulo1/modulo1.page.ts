import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.page.html',
  styleUrls: ['./modulo1.page.scss'],
})
export class Modulo1Page implements OnInit {
  email: string | null = null;

  constructor(private userService: UserService) {
    
    this.email = userService.getEmail();
  }

  ngOnInit() {}
}
  
  
  