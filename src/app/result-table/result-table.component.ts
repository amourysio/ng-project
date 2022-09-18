import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  constructor() { }
  @Input() results: any;

  ngOnInit(): void {
  }
}
