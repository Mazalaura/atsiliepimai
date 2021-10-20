import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-atsiliepimas',
  templateUrl: './add-atsiliepimas.component.html',
  styleUrls: ['./add-atsiliepimas.component.css']
})
export class AddAtsiliepimasComponent implements OnInit {
  @Output() updateAtsiliepimai=new EventEmitter();
    atsiliepimai=[];
    vardas='';
    textas='';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  
  postAtsiliepimas(){
    const a={
      vardas:this.vardas,
      textas:this.textas
    };
    this.http
    .post('https://atsiliepimai-4a953-default-rtdb.europe-west1.firebasedatabase.app/atsiliepimai.json', a)
    .subscribe((response)=>{
      console.log(response);
      this.updateAtsiliepimai.emit();
      this.vardas='';
      this.textas='';
    });
  }
}
