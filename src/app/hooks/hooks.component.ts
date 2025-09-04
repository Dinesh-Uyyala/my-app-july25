import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges,OnDestroy,OnInit,AfterViewInit,AfterContentInit,AfterContentChecked,AfterViewChecked,DoCheck{
  interval:any;
  ngAfterViewInit(){
    console.log("afterviewinit running");
  }
  ngAfterContentInit(){
    console.log("aftercontentinit running");
  }
  ngAfterContentChecked(){
    console.log("aftercontentchecked running");
  }
  ngAfterViewChecked(){
    console.log("afterviewchecked running");
  }
  ngDoCheck(){
    console.log("docheck running");
  }
  ngOnChanges() {
    console.log("onchanges running");
  }
  ngOnDestroy() {
    console.log("ondestroy running");
    clearInterval(this.interval);
  }
  ngOnInit(){
    console.log("oninit running");
     this.interval=setInterval(()=>{
      console.log("Timer running!");
    },3000);
  }

}
