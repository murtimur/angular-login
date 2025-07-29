import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serversetting',
  imports: [FormsModule, CommonModule],
  templateUrl: './serversetting.component.html',
  styleUrl: './serversetting.component.scss',
})
export class ServersettingComponent {
  constructor(private router: Router) {}

  serverSetting: string = null;

  ngOnInit() {
    if(localStorage.getItem('setting')) {
      this.serverSetting = JSON.parse(localStorage.getItem('setting'))
    }
  }

  ayarEkle() {
    if (this.serverSetting !== null) {
      try {
        localStorage.setItem('setting', JSON.stringify(this.serverSetting));
        this.router.navigate(['/']);
      } catch (error) {}
    }
  }

  ayariSil() {
    localStorage.removeItem('setting');
    this.serverSetting = null;
  }
}
