import {Component} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'block',
	template: `
	<div 
	  *ngIf="item.isOpen"  [ngStyle]="{'background-image': 'url(' + item.color + ')'}" (click)="openCard()"  
	  [ngClass]="{opacity: item.pair}" class="block">
	</div>
	<div *ngIf ="!item.isOpen" [ngStyle]="{'background-image': 'url(https://marsis.github.io/pikchers/fond.jpg)'}" (click)="openCard()" class="block">{{sign}}</div>
	           	`
})
export class Block {
  @Input() item: any;
  @Input() life: number; 

  @Output() remove = new EventEmitter<string>();
   
  constructor() {
  }
  
   openCard(){
     this.item.isOpen = true;
     this.remove.emit({item: this.item});
     
    }
  }

 

