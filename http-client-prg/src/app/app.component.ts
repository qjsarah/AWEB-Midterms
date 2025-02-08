import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpclientService } from './httpclient.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-client-prg';
  httpusers: any;
  httptodos: any[]=[];

  constructor(private httpclientlist: HttpclientService){
    this.httpclientlist.getUsersRemotely().subscribe((data:any)=>{
      this.httpusers = data;
    })
    this.httpclientlist.getTodosRemotely().subscribe((data:any)=>{
      this.httptodos = data;
    })
  }
}
