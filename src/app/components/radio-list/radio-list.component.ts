import { Component, OnInit, Input } from '@angular/core';
import { Radio } from 'src/app/data/radio';

@Component({
  selector: 'radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss']
})
export class RadioListComponent implements OnInit {
  @Input() public radios: Array<Radio>;

  constructor() { }

  ngOnInit(): void {
  }

}
