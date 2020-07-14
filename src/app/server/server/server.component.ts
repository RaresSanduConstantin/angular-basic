import { Component, OnInit } from '@angular/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  username = 'rares'
 textInput = '';
 addText: string;
 createText  = false;


  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: any){
    this.textInput = event.target.value
   
  }

  onClickDisplay(){
    this.addText = this.textInput
    
  }

  onClickDelete(){
    return this.addText = '';
    
  }

}
