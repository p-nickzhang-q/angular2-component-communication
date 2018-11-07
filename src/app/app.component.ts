import { Component, ViewChild, OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked, AfterContentInit } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit {

  greeting: string = 'hello';

  user: {
    name: string
  } = { name: 'Tom' };

  @ViewChild('child1')
  child1: Child2Component;

  constructor() {
    var greeting = 'hello';
    greeting = ''
  }

  ngOnInit() {
    setInterval(() => {
      this.child1.greeting('Tom');
    }, 5000);
  }

  ngAfterViewChecked() {
    console.log('父组件的视图变更检测完毕')
  }

  ngAfterViewInit() {
    console.log('父组件的视图初始化完毕');
  }

  ngAfterContentChecked() {
    console.log('父组件投影内容变更检测完毕');
  }

  ngAfterContentInit() {
    console.log('父组件投影内容初始化完毕');
  }
}
