import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export class Employee {
  constructor(
    public id: string,
    public name: string,
    public company: string,
    public deptid: string,
    public country: string,
    public state: string
  ) {}
}

@Injectable({
  providedIn: "root",
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  getEmployees() {
    console.log("test call");
    return this.httpClient.get<Employee[]>("http://localhost:8080/employees");
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>(
      "http://localhost:8080/saveemployee",
      employee
    );
  }
}
