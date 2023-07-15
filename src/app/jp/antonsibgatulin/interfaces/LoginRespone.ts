import {Admin} from "./Admin";

export interface LoginSuccessRespone{
  message:String,
  code:Number,
  object:Admin
}
export interface LoginUnSeccessRespone{
  error:String,
  code:Number
}
