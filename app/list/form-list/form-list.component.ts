import { Component } from '@angular/core';
import { FormService } from 'src/app/form/form.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent {


arr:Array<any>=[]
  constructor(private demo:FormService) {
this.arr=this.demo.array
  }

  del(i:number){
    this.demo.dele(i)
  }


  // pat(i:number){
  //   let res = this.arr.find(p=>p.id==i)
  //   console.log(res);
  //   this.demo.patchdata(res,i)


  // }

}
