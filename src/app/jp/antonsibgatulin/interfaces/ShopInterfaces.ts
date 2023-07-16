import {Admin} from "./Admin";

export  interface Shop{
  id:Number,
  name:string,
  description:string,
  phone:string,
  workEmail:string,
  timeCreate:Number,
  lastUpdate:Number,
  profit:Number,
  expenses:Number,
  address:String,
  admin:Admin
}
