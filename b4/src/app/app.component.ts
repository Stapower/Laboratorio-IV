import { Component } from '@angular/core';
import { AlertComponent } from './comp/alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  unEstado = '3';

  eventos (e)
  {
    console.info("evento",e);
  }
}
