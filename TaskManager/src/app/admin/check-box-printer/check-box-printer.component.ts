import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box-printer',
  templateUrl: './check-box-printer.component.html',
  styleUrls: ['./check-box-printer.component.scss']
})
export class CheckBoxPrinterComponent implements OnInit{

  isChecked : boolean = false;
  ngOnInit(): void {
    
  }

  check(){
    this.isChecked = true;
  }
  uncheck(){
    this.isChecked = false;
  }

}
