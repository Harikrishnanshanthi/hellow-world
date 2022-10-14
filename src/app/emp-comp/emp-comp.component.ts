import { Component, OnInit } from '@angular/core';
import { EmpRecordService } from '../emp-record.service';

@Component({
  selector: 'app-emp-comp',
  templateUrl: './emp-comp.component.html',
  styleUrls: ['./emp-comp.component.css'],
  providers: [EmpRecordService]
})
export class EmpCompComponent implements OnInit {

  info1:string[]=[];
  info2:string[]=[];
  info3:string[]=[];
  
  getempinfo1(){
    this.info1=this.empservice.getemp1();
  }
  getempinfo2(){
    this.info1=this.empservice.getemp2();
  }
  getempinfo3(){
    this.info1=this.empservice.getemp3();
  }


    constructor(private empservice:EmpRecordService) { }

  ngOnInit(): void {
  }

  updateInfo(frm:any)
  {
    this.empservice.addInfo(frm.value.location)
  }

}
