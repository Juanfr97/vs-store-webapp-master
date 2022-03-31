import { Component, OnInit } from '@angular/core';
import { Sell } from 'src/app/core/models/Sell';
import { SellsService } from 'src/app/core/services/sells/sells.service';

@Component({
  selector: 'app-sells',
  templateUrl: './sells.component.html',
  styleUrls: ['./sells.component.scss']
})
export class SellsComponent implements OnInit {

  constructor(private sellService:SellsService) { }
  sells:Sell[]=[]
  displayedColumns: string[] = ['key', 'user','products', 'total','createdAt'];
  ngOnInit() {
    this.getSells()
  }

  getSells(){
    this.sellService.getSells().subscribe(response=>{
      this.sells=response.body.sells
      console.log(this.sells);
    })
  }

}
