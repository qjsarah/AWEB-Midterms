import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [EmployeeService, ProductsService]
})
export class AppComponent {
  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [];
  public products: {
    id: string;
    name: string;
    description: string;
    price: number;
  }[] = [];

  constructor(
    private _employeeSevice: EmployeeService,
    private _productService: ProductsService
  ) {}
  ngOnInit() {
    this.employees = this._employeeSevice.getEmployees();
    this.products = this._productService.getProducts();
  }
}
