import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent implements OnInit {

  constructor(private http: HttpClient) {

   }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/products').subscribe(data => {
      console.log(data);
    });
  }

}
