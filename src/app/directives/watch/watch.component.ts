import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Watch } from './../../models/watch.model';
@Component({
  selector: 'watch',
  templateUrl: 'app/directives/watch/watch.component.html',
  styleUrls: ['app/directives/watch/watch.component.css']
})
export class WatchComponent implements OnInit {

  @Input() watchModel:Watch;
  @Output() watchSaved = new EventEmitter();


  constructor() {}

  ngOnInit() {
  }

  onSubmit(){
  	
  }

}
