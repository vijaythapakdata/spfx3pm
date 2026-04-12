export interface ISharePointFormState{
    Name:string;
    Email:string;
    Age:any;
    Salary:any;
    Address:string;
    Permission:boolean;
    Score:number;
    Manager:any[];
    ManagerId:any[];
    Admin:any;
    AdminId:any
    Department:string;
    Skills:any[];
    Gender:string;
    City:any;
    DOB:any;
}

export interface ValidationSchema{
    Name:string;
}