import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'GetlistitemsReactWebPartStrings';
import GetlistitemsReact from './components/GetlistitemsReact';
import { IGetlistitemsReactProps } from './components/IGetlistitemsReactProps';

export interface IGetlistitemsReactWebPartProps {
  description: string;
}

export default class GetlistitemsReactWebPart extends BaseClientSideWebPart<IGetlistitemsReactWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGetlistitemsReactProps > = React.createElement(
      GetlistitemsReact,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
