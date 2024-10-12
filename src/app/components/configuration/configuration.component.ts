import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {

  token: string;

  constructor(private configService : ConfigService) {
    this.token = this.configService.getToken();
  }

  setToken(){
    this.configService.setToken(this.token);
  }

  getToken(){
    return this.configService.getToken();
  }

}
