import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewCmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MyserviceService]
})
export class AppComponent {
  title = 'ng-pipes-app';
  todaydate; componentproperty;
  constructor(private myservice:MyserviceService) {
    this.todaydate = this.myservice.showTodayDate()
    this.componentproperty = this.myservice.serviceproperty;
  }
}
