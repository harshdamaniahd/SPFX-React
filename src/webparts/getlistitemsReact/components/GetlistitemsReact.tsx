import * as React from 'react';
import styles from './GetlistitemsReact.module.scss';
import { IGetlistitemsReactProps } from './IGetlistitemsReactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import pnp from 'sp-pnp-js'
import { ClassCustomer } from './ClassCustomer';
import {ISPListCustomerItem} from './ICustomers'

export default class GetlistitemsReact extends React.Component<IGetlistitemsReactProps, any> {
  public constructor(props:IGetlistitemsReactProps,any)
  {
    super(props);
    this.state={
      items:[]
    }
  }

  public render(): React.ReactElement<IGetlistitemsReactProps> {
    return (
      <div className={ styles.getlistitemsReact }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
            <div className={ "ms-Grid" }>
            <div className={ "ms-Grid-row" }>
             {
               this.state.items.map(function(item:ISPListCustomerItem){
                 return(
                  <div className={"ms-Grid-col ms-sm6 ms-md6 ms-lg4"}>               
                  <div className={styles.contentDiv}>
                  <label className="ms-Label ms-font-xxl">{item.CustomerID}</label>
                  <label className="ms-Label">{item.CustomerName}</label>
                  <label className="ms-Label">{item.CustomerType}</label>
                  <label className="ms-Label">{item.CustomerAddress}</label>                              
                  </div>
                  </div>
                 )
               })
             }
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  public componentDidMount()
  {
    debugger;
    this._getListCustomerData();
  }
  private _getListCustomerData():void
  {
      pnp.sp.web.lists.getByTitle(`Customers`).items.get().then
      ((response)=>{
        let customerCollection=response.map(item=>new ClassCustomer(item));
        this.setState({items:customerCollection});
      }
      )
  }
}
