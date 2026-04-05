import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'SpfxFormWebPartStrings';
import SpfxForm from './components/SpfxForm';
import { ISpfxFormProps } from './components/ISpfxFormProps';
import ChoiceServiceApi from '../../Service/ChoiceService';

export interface ISpfxFormWebPartProps {
  description: string;
}

export default class SpfxFormWebPart extends BaseClientSideWebPart<ISpfxFormWebPartProps> {
private choiceServiceClass:ChoiceServiceApi|undefined;

  
 protected async onInit(): Promise<void> {
    this.choiceServiceClass = new ChoiceServiceApi(this.context);
    return super.onInit();
 
  }
  public async render(): Promise<void> {
    const element: React.ReactElement<ISpfxFormProps> = React.createElement(
      SpfxForm,
      {
       
        context:this.context,
        siteurl:this.context.pageContext.web.absoluteUrl,
        departmentoptions:await this.choiceServiceClass?.getChoiceValues(this.context.pageContext.web.absoluteUrl,"Department"),
        skillsoptions:await this.choiceServiceClass?.getChoiceValues(this.context.pageContext.web.absoluteUrl,"Skills"),
        genderoptions:await this.choiceServiceClass?.getChoiceValues(this.context.pageContext.web.absoluteUrl,"Gender"),
        cityoptions:await this.choiceServiceClass?.getLookupvalues()
      }
    );

    ReactDom.render(element, this.domElement);
  }

 




  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
