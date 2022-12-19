import { Component, Input, OnInit } from '@angular/core';
import { BanDataService } from '../service/ban-data.service';
import { IFooterCmp } from '../service/data';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() footerData: IFooterCmp[] = [];

  constructor(private http:HttpClient , private banData:BanDataService) { }

  ngOnInit(): void {
    this.banData.getFooterData().subscribe(res=>{
      this.footerData =res;
    })
  }

}
