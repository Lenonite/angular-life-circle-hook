import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input()
  userName:string = '';


  @ViewChild('wrapper')
  wrapper!:ElementRef;
  @ContentChild('contentWrapper')
  content!:ElementRef;
  constructor() {
    console.log('constructor from child')
  }
  ngOnDestroy() {
    console.log('ChildComponent is destroyed')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked triggered')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit -wrapper',this.wrapper)
    console.log('ngAfterViewInit content',this.content)
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentCheck triggered ......')


  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - wrapper',this.wrapper);
    console.log('ngAfterContentInit -contentwrapper',this.content)
  }
  ngDoCheck(): void {
    console.log('ngDoCheck triggered...........')
  }
  ngOnInit(): void {

    console.log("ngOnInit from child.")
  }



  ngOnChanges(changes: SimpleChanges): void {

    console.log('ngOnChanges triggered:',changes);

    if (!changes['userName'].isFirstChange()){
      if (changes['userName'].currentValue === "Chris"){
        this.userName = "Hello "+this.userName;
      }
      else {
        this.userName = changes['userName'].previousValue
      }
    }
  }






}
