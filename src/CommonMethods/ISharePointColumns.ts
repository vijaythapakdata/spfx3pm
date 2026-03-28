export interface ISharePointColumnState{
    Title:string;
    EmailAddress:string;
    isTrue:boolean;
    Managers:any[];
    Age:number;
    City:{
        Title:string
    }
}

export interface IListItems{
    Principle?:string;
    DOJ:any;
}