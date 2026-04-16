import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit, OnDestroy {

  // 1. Create an Observable Section Array from mockData
  // 2. Use RxJS operator for stream creation. Pass mockData as any[] to the operator. 
  // 3. Use utility operator for stream handling (.pipe)
  // 4. Use transform RxJS operator (map) to transform the data to the Section interface
  // 5. Inside map, iterate through sections, check if section content typeOf string and JSON.parse the 'content' if it is a string
  sections$: any;


  //1. Pass list of arguments: sections and pageName
  //2. Return filtered sections based on pageName
  //3. Use it in the template
  //4. Add type annotations for arguments and return value
  getSectionsByPage() {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}

