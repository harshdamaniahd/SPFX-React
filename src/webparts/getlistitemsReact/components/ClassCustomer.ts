import { ISPListCustomerItem } from "./ICustomers";

export class  ClassCustomer{
    public CustomerName:string;
    public CustomerAddress:string;
    public CustomerType:string;
    public CustomerID:string;
    constructor(item: ISPListCustomerItem) {
      this.CustomerName = item.CustomerName;
      this.CustomerAddress = item.CustomerAddress;
      this.CustomerType = item.CustomerType;
      this.CustomerID=item.CustomerID;
  }
}