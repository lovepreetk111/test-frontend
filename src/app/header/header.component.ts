import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { BanDataService } from '../service/ban-data.service';
import { IallNavbar, InavbarConfig } from '../service/data';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() headerData:IallNavbar[] = []
  // DataserviceService: any;
  constructor(private dataservice: BanDataService, private http:HttpClient) { }

  ngOnInit(): void {
    this.dataservice.getNavbarData().subscribe(
      data => {
        console.log(data)
        this.headerData = data;
      }
    );
  }
}
