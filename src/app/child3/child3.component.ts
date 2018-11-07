import { Component, OnInit, AfterContentChecked, AfterContentInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit, AfterContentChecked, AfterContentInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }

  //这两个钩子可以改变组件中的属性，因为此时视图还未创建完成，而viewinit,viewchecked钩子不能改变属性，因为视图已经创建完成
  ngAfterContentChecked() {
    console.log('父组件投影内容变更检测完毕');
  }

  ngAfterContentInit() {
    console.log('父组件投影内容初始化完毕');
  }

  ngOnDestroy() {
    console.log('child3组件被销毁');
  }

}
