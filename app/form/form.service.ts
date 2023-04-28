import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  array:Array<any>=[]
  constructor() { }

  ptdata:any

  dele(i:number){
    this.array.splice(i,1)
  }

//   patchdata(data:any,i:number){
//     console.log(data);
//     this.ptdata=data
//     this.newform.setValue(
//       {id:0,name:'sadasd',address:{state:'asfaf',city:'fsa'}}
//     )

// console.log(this.newform);

// }
form(form:any){
  this.newform=form

}
  newform:any
}
