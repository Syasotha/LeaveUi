export class Applyrequest {
    id:number;
    userId:number;
    leaveTypeId:number;
    statusId:number;
    startDate:Date;
    endDate:Date;
    reason:String;
    leaveDays:number;
    medicalReports:File;
    recommendedBy:number;
    approvedBy:number;
}
