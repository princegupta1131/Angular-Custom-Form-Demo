import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-filter';
  resUserData = {};
  formCreateData = {};
  formJsonData: any[] = [];
  formCreateJsonData: any[] = [];
  languageJsonData = {}
  globalLangKey = '';
  langValue = '';// default selected language is required
  constructor(private http: HttpClient) { }

  filterTitleInfo = {
    title: 'Sample User Search Form :: ',
    subTitle: 'User can search and filter the data using below form',
    submit: "Submit",
    clear: "Reset",
    styling: {
      orientation: "column",
      space: "15px",
      color: "blue"
    },
    isButtonReq: true
  }

  createFilterTitleInfo = {
    title: 'Json Creation :: ',
    subTitle: 'Create a Sample JSON using below form library',
    submit: "Generate JSON",
    clear: "Clear",
    styling: {
      orientation: "column",
      space: "15px",
      color: "blue"
    },
    isButtonReq: true
  }


  onFilterChange($: any) {
    console.log('selcted Vaue ' + JSON.parse(JSON.stringify($)))
    this.resUserData = JSON.parse(JSON.stringify($));
    console.log(this.resUserData)
  }

  getFilterData($: any) {
    console.log('selcted Created Vaue ' + JSON.parse(JSON.stringify($)))
    console.log(this.resUserData);
    const formCreationData = {
      "index": parseInt($.data.index),
      "type": $.data.formType,
      "label": $.data.label,
      "placeholder": $.data.placeholder,
      "formControlName": $.data.formControlName,
      "preSelectedValue": $.data.preSelectedValue === "" ? "" : $.data.preSelectedValue,
      "validators": {
        "required": $.data.ismandatory
      },
      "dataList": [
        {
          "id": 1,
          "value": "Sample",
          "displayName": "sample",
          "preSelectedValue": $.data.ismandatory
        }
      ]
    }
    this.formCreateData = JSON.parse(JSON.stringify(formCreationData));

    this.formJsonData.push(formCreationData);
    console.log('formjsonData', this.formJsonData);
  }
  
  ngOnChanges() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.http.get('./assets/configJsonData.json').subscribe((formData: any) => {
      this.formJsonData = formData;
      console.log(this.formJsonData, + 'json');
    });

    this.http.get('./assets/createConfigData.json').subscribe((formData: any) => {
      this.formCreateJsonData = formData;
      console.log(this.formCreateJsonData, + 'json');
    })
    this.http.get('./assets/languageJsonData.json').subscribe((formData: any) => {
      this.languageJsonData = JSON.parse(JSON.stringify(formData));
      console.log(this.formJsonData, + 'json')

    })
  }
  onSelected($: any) {
    this.langValue = $.value;
  }
}
