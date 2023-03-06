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
  languageJsonDatas = {}
  globalLangKey = '';
  langValue = '';// default selected language is required
  constructor(private http: HttpClient) { }

  filterTitleInfo = {
    title: 'User Search Form :: ',
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
    subTitle: 'Create a form json by using below form',
    submit: "Create Form",
    clear: "Clear",
    styling: {
      orientation: "column",
      space: "15px",
      color: "blue"
    },
    isButtonReq: true
  }

  languageJsonData = [{
    en:
    {

      "Board": "Board",
      "Medium": "Medium",
      "Grade": "Grade",
      "Subject": "Subject",
      "Published user type": "Published user type",
      "State": "State",
      "Organistion": "Organistion",
      "UserName": "UserName..",
      "Parent": "Parent",
      "Karnataka": "Karnataka",
      "Filters matching your profile details": "Filters matching your profile details",
      "School head OR Officials": "School head OR Officials",
      "Student": "Student",
      "Teacher": "Teacher",
      "STATE-BR": "STATE-BR",
      "Delhi": "Delhi",
      "STATE-TN": "STATE-TN",
      "Submit": "Submit",
      "Reset": "Reset",
      "Tamil Nadu": "Tamil Nadu",
      "Bihar": "Bihar",
      "Password": "Password"
    },

    hi: {

      "Board": "बोर्ड",
      "Medium": "माध्यम",
      "Grade": "श्रेणी",
      "Subject": "विषय",
      "Published user type": "प्रकाशित उपयोगकर्ता के  प्रकार",
      "State": "राज्य",
      "organisation": "संगठन",
      "UserName": "उपयोगकर्ता नाम",
      "Search Filter": "फ़िल्टर खोजें",
      "Parent": "माता-पिता",
      "Karnataka": "कर्नाटक",
      "Filters matching your profile details": "आपके प्रोफ़ाइल विवरण से मेल खाने वाले फ़िल्टर",
      "School head OR Officials": "स्कूल प्रमुख या अधिकारी",
      "Student": "विद्यार्थी",
      "Teacher": "शिक्षक",
      "STATE-BR": "राज्य-बीआर",
      "Delhi": "दिल्ली",
      "Submit": "प्रस्तुत करना",
      "Reset": "रीसेट",
      "Tamil Nadu": "तमिलनाडु",
      "STATE-TN": "राज्य-तमिलनाडु",
      "Bihar": "बिहार",
      "Password": "पासवर्ड"

    },
    kn:
    {
      "Board": "ಮಂಡಳಿ/ವಿಶ್ವವಿದ್ಯಾಲಯ",
      "Medium": "ಮಾಧ್ಯಮ",
      "Grade": "ಗ್ರೇಡ್",
      "Subject": "ವಿಷಯ",
      "Published user type": "ಪ್ರಕಟಿತ ಬಳಕೆದಾರರ ಪ್ರಕಾರ",
      "State": "ರಾಜ್ಯ",
      "organisation": "ಸಂಸ್ಥೆ",
      "UserName": "ಬಳಕೆದಾರ ಹೆಸರು",
      "Search Filter": "ಹುಡುಕಾಟ ಫಿಲ್ಟರ್",
      "Parent": "ಪೋಷಕ",
      "Karnataka": "ಕರ್ನಾಟಕ",
      "Filters matching your profile details": "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ವಿವರಗಳಿಗೆ ಹೊಂದಾಣಿಕೆಯಾಗುವ ಫಿಲ್ಟರ್‌ಗಳು",
      "School head OR Officials": "ಶಾಲಾ ಮುಖ್ಯಸ್ಥರು ಅಥವಾ ಅಧಿಕಾರಿಗಳು",
      "Student": "ವಿದ್ಯಾರ್ಥಿ",
      "Teacher": "ಶಿಕ್ಷಕ",
      "STATE-BR": "ರಾಜ್ಯ",
      "Delhi": "ದೆಹಲಿ",
      "Submit": "ಸಲ್ಲಿಸು",
      "Reset": "ಸ್ಪಷ್ಟ",
      "Tamil Nadu": "ತಮಿಳುನಾಡು",
      "STATE-TN": "ರಾಜ್ಯ",
      "Bihar": "ಬಿಹಾರ",
      "Password": "ಪಾಸ್ವರ್ಡ್"

    }
  }]
  onFilterChange($: any) {
    console.log('selcted Vaue ' + JSON.parse(JSON.stringify($)))
    // alert('Success Submitted value is ' + JSON.stringify($))
    this.resUserData = JSON.parse(JSON.stringify($));
    console.log(this.resUserData)
  }
  getFilterData($: any) {
    console.log('selcted Created Vaue ' + JSON.parse(JSON.stringify($)))
    // alert('Success Submitted value is ' + JSON.stringify($))
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
      this.languageJsonDatas = JSON.parse(JSON.stringify(formData));
      console.log(this.formJsonData, + 'json')
      // this.resUserData = this.formJsonData; // input value

    })
  }
  onSelected($: any) {
    this.langValue = $.value;
    // this.languageJsonDatas = this.languageJsonData.filterObject.keys(this.langValue)

  }
}
