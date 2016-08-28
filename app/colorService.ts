import {Injectable} from '@angular/core';

@Injectable()

export class ColorService{
  
  private pictures = ['https://marsis.github.io/pikchers/1.jpg','https://marsis.github.io/pikchers/2.jpg','https://marsis.github.io/pikchers/3.jpg','https://marsis.github.io/pikchers/4.jpg','https://marsis.github.io/pikchers/5.jpg','https://marsis.github.io/pikchers/6.jpg','https://marsis.github.io/pikchers/7.jpg','https://marsis.github.io/pikchers/8.jpg','https://marsis.github.io/pikchers/9.jpg','https://marsis.github.io/pikchers/10.jpg','https://marsis.github.io/pikchers/11.jpg','https://marsis.github.io/pikchers/12.jpg','https://marsis.github.io/pikchers/13.jpg','https://marsis.github.io/pikchers/14.jpg','https://marsis.github.io/pikchers/15.jpg','https://marsis.github.io/pikchers/16.jpg','https://marsis.github.io/pikchers/17.jpg','https://marsis.github.io/pikchers/18.jpg','https://marsis.github.io/pikchers/19.jpg','https://marsis.github.io/pikchers/20.jpg','https://marsis.github.io/pikchers/21.jpg','https://marsis.github.io/pikchers/22.jpg','https://marsis.github.io/pikchers/23.jpg','https://marsis.github.io/pikchers/24.jpg','https://marsis.github.io/pikchers/25.jpg','https://marsis.github.io/pikchers/26.jpg'];
  
  constructor(){
    
  }
   getRandomBackground() {
  
    
   let background = this.pictures[Math.floor(Math.random() * this.pictures.length)];
  // console.log(background);
    return background ;
  }
 }

