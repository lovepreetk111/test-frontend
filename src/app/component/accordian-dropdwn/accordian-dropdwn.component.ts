import { Component, Input, OnInit } from '@angular/core';
import { BanDataService } from 'src/app/service/ban-data.service';
import { IallDropdown, IDropDown } from 'src/app/service/data';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-accordian-dropdwn',
  templateUrl: './accordian-dropdwn.component.html',
  styleUrls: ['./accordian-dropdwn.component.scss']
})
export class AccordianDropdwnComponent implements OnInit {
  @Input() DropDownData:IallDropdown[]=[];

  constructor(private http: HttpClient, private banData: BanDataService) { }

  ngOnInit(): void { 
    this.banData.getAccordianData().subscribe(res => {
    this.DropDownData=res;
  })

  }

 
}
