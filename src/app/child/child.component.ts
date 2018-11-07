import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  greeting: string;

  //改变user.name不会触发ngOnChanges，因为只user改变，才会被调用，user内部的属性改变不会被调用
  @Input()
  user: {
    name: string
  };

  message: string = '初始化消息';

  oldUsername: string;

  changeDetected: boolean = false;

  noChangeCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(JSON.stringify(changes, null, 2));
  }

  ngDoCheck() {
    if (this.user.name !== this.oldUsername) {
      this.changeDetected = true;
      console.log(`DoCheck:user.name 从${this.oldUsername}变为${this.user.name}`);
      this.oldUsername = this.user.name;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      this.noChangeCount += 1;
      console.log(`DoCheck:user.name没变化时，ngDoCheck方法已经被调用${this.noChangeCount}次`);
    }

    this.changeDetected = false;
  }

}
