import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    indoor=[
      {id:1,name:"chess"},
      {id:2,name:"carrom"},
      {id:3,name:"xyz"},
    ]

      form=new FormGroup({
          id:new FormControl(),
          name:new FormControl(),
          address: new FormGroup({
            state:new FormControl(),
            city:new FormControl()
          }),
          hobbies:new FormArray([])
      })


      num!:number
      newf:any
      constructor(private demo:FormService,private route:ActivatedRoute) {
this.addallhobbies()

this.arr=this.demo.array
          this.route.params.subscribe(p=>{
            this.num=Number(p['id'])
            let result = this.demo.array.find(x=>x.id==this.num)
            // if(result){
              this.newf=result
            // }
          })
          if(this.newf){
            this.form.patchValue(this.newf)
          }
}

get hobb(){
        return this.form.get('hobbies') as FormArray
      }

      addallhobbies()
      {
          this.indoor.forEach(()=>this.hobb.push(new FormControl(false)));
        }


        arr:Array<any>=[]
        clc(){
          this.arr.push({id:this.form.value.id,name:this.form.value.name,address:{state:this.form.value.address?.state,city:this.form.value.address?.city}})
          console.log(this.arr);
          this.demo.form(this.form)

          // this.form.setValue({
          //   id:2,name:"fa",address:{state:'saf',city:'fsaf'}
          // })
      }




}
