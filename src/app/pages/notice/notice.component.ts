import { TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IBtnCmpData, INoticeConfig } from 'src/app/service/data';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
@Input() NoticeData: INoticeConfig[]=[]
@Input() title!:IBtnCmpData;
  constructor() { }

  ngOnInit(): void {

    /* function Image_OnError(img){
      image.onerror ="";
      image.style.visibility ="hidden";
      return true;
    } */
  }

}
