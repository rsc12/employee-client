import { Component, OnInit } from "@angular/core";
import { HttpClientService, Employee } from "../service/http-client.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.css"],
})
export class AddEmployeeComponent implements OnInit {
  user: Employee = new Employee("", "", "", "", "", "");
  countryList: Array<any> = [
    { name: "USA", states: ["OH", "MO", "NY"] },
    { name: "India", states: ["AP", "TS", "TN"] },
  ];
  states: Array<any>;

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {}

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user).subscribe((data) => {
      alert("Employee created successfully.");
    });
  }
  changeCountry(count: any) {
    this.states = this.countryList.find((con) => con.name == count).states;
  }
}
