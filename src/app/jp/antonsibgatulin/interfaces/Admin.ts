export interface Admin{
  id:Number,
  email:String,
  password:String,
  role:Role,

}
export enum Role{
  ADMIN,SHOP_ADMIN,SHOP_ITEMS_ADMIN
}

export interface TokenAdmin{
  id:Number,
  token:String,
  admin:Admin
}
