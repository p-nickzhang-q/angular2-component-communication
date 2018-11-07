import { Component, OnInit, AfterViewChecked, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, AfterViewChecked, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log(`hello ${name}`);
  }

  //ngAfterViewInit 只会被调用一次，ngAfterViewChecked会在子组件方法执行后，被调用；
  //这两个方法，先是子组件的被调用，再是父组件
  //不能这两个方法里改变组件中的属性，除非使用setTimeout,等会儿改变属性
  ngAfterViewChecked() {
    console.log('子组件的视图变更检测完毕')
  }

  ngAfterViewInit() {
    console.log('子组件的视图初始化完毕');
  }

}
