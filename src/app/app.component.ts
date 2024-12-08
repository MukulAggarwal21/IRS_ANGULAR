import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    cells:string[]=Array(10).fill(null);
    playersymbol:string='X';
    ongridcellclick(index:number):void{
     this.cells[index]=this.playersymbol;
     if(this.playersymbol=='X'){
      this.playersymbol='O';
     }
     else{
      this.playersymbol='X';}
     }
    }

