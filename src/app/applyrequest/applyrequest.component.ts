import { Component, OnInit } from '@angular/core';
import { ApplyrequestService } from '../Services/applyrequest.service';
import { Applyrequest } from '../Models/applyrequest';
import { LeavetypeService } from '../Services/leavetype.service';
import { Leavetype } from '../Models/leavetype';
import { RemainingleaveService } from '../Services/remainingleave.service';
import { Remainingleave } from '../Models/remainingleave';

@Component({
  selector: 'app-applyrequest',
  templateUrl: './applyrequest.component.html',
  styleUrls: ['./applyrequest.component.css']
})
export class ApplyrequestComponent implements OnInit {
  leaveTypeArr:Leavetype[];
  applyLeaveRequest:Applyrequest[];
  leaveRequestObj:Applyrequest;
  remainingDays:Remainingleave[];

  constructor(private applyrequestService:ApplyrequestService,private leavetypeService:LeavetypeService,private remainingleaveService:RemainingleaveService) { }

  ngOnInit() {
    this.getAllLeaveRequest();
    this.getLeaveTypes();
    this. getRemainingDays();
  }

  getAllLeaveRequest(){
    this.applyrequestService.getAllLeaveRequest().subscribe(leavetypeDetails=>{
      console.log(leavetypeDetails);
      this.applyLeaveRequest=leavetypeDetails;  
    });
  }

  getLeaveTypes(){
    this.leavetypeService.getAllLeaveType().subscribe(leavetypeDetails=>{
      console.log(leavetypeDetails);
      this.leaveTypeArr=leavetypeDetails;
    });
  }
  
  calculateLeaveDays(d1:string,d2:string){
    var date1=new Date(d1);
    var date2=new Date(d2);
    var timeDiff=date2.getTime()-date1.getTime();
    var days=timeDiff/(1000*60*60*24);
    return days;
  }

  createLeaveRequest(d1:string,d2:string){
    this.leaveRequestObj.leaveDays=this.calculateLeaveDays(d1,d2);
    console.log(this.leaveRequestObj.leaveDays);
    // this.leaveRequestObj.userId=1;

    // this.applyrequestService.addLeaveRequests(this.leaveRequestObj).subscribe(leaverequestDetails=>{
    //   console.log(leaverequestDetails);
      this.getAllLeaveRequest();
  //  });
  }


  getRemainingDays(){
    this.remainingleaveService.getRemainingDaysById().subscribe(remainingDays=>{
      console.log(remainingDays);
      this.remainingDays=remainingDays;
    });
  }
  
  
}
