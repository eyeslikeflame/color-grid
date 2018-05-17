import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.scss']
})
export class JsonInputComponent implements OnInit {

  constructor(public appService: AppService) { }
  showJsonCopy = false;
  ngOnInit() {
  }

}
