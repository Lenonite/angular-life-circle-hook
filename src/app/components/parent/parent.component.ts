import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  userName:string="Maria";
  isChildDestroyed:boolean=false;
  constructor() {
    console.log('constructor from parent')
  }
  destroy(){
    this.isChildDestroyed=true;
  }
  ngOnInit(): void {
    console.log('ngOnInit from parent')
  }

  public updateUserName():void{
    this.userName="Chris";
  }




}
