import { Time } from '@angular/common';

export class AttendanceModel {
    public id: any
    public employeeID: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public status: boolean;
    public inTime: Date
    public ouTTime: Date
    public inTimeSpan: string
    public ouTTimeSpan: string
    public note: string
}


