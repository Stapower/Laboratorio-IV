import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './_services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  model: any = {};
  loading = false;
  error = '';
  showLogginModel=true;

      constructor(
        private authenticationService: AuthenticationService) { }
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                      this.showLogginModel=false;
                }
                else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
