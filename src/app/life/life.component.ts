import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, AfterContentInit, Input, SimpleChanges } from '@angular/core';


let logIndex: number = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  name: string;

  logIt(msg: string) {
    console.log(`#${logIndex++}, ${msg}`);
  }

  constructor() {
    this.logIt(`name属性里的值在constructor里是${this.name}`);
  }

  ngOnInit() {
    this.logIt('ngOnInit');
  }

  //输入属性变化时，调用，首次调用在ngOnInit之前
  ngOnChanges(changes: SimpleChanges) {
    let name = changes['name'].currentValue;
    this.logIt(`name属性里的值在ngOnChanges里是${name}`);
  }

  ngDoCheck() {
    this.logIt('ngDoCheck');
  }

  ngAfterContentChecked() {
    this.logIt('ngAfterContentChecked');
  }

  ngAfterContentInit() {
    this.logIt('ngAfterContentInit');
  }

  ngAfterViewInit() {
    this.logIt('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.logIt('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.logIt('ngOnDestroy');
  }

}
