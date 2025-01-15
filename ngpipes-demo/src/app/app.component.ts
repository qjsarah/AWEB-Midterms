import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-pipes-demo';
  presentDate = new Date();
  time$ = interval(1000).pipe(
    map(() => new Date())
  );
  testObject = {
    name: 'June Sarah Quiambao',
    age: 25,
    food: 'rice'
  };
  price = 20000;
  fruits = [' Apple',' Orange',' Grapes',' Mango',' Kiwi',' Pomegranate'];
  decimalNum1: number = 8.124123;
  decimalNum2: number = 5.40239303;
}
