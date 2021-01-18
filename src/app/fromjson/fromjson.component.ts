
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as joint from 'jointjs';

@Component({
  selector: 'app-fromjson',
  templateUrl: './fromjson.component.html',
  styleUrls: ['./fromjson.component.css']
})
export class FromjsonComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.frame();
  }
  frame() {
    let data = {}     // Insert the data coming from the api in here through some object... Check out SampleFromAPI.json for rough idea
    let graph = new joint.dia.Graph();
    let paper = new joint.dia.Paper({
      el: document.getElementById('myholder'),
      model: graph,
      width: 1000,
      height: 1000,
      gridSize: 1
    });
    graph.fromJSON(data);
  }

}
