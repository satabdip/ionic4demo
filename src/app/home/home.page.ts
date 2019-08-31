import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  customText :'yes';
  public ProductTypes: any = [];
  constructor() {
    this.ProductTypes = [
      { expanded: false , Id: 1, name: 'Recreational Finishing License'},
      { expanded: false , Id: 2, name: 'Commerical Fishing Licenses'},
      { expanded: false , Id: 3, name: 'Hadhra Fishing License'},
      { expanded: false, Id: 4, name: 'Fishing Net Permit(AI Ghazal)'},
      { expanded: false, Id: 5, name: 'Bohoor(Sea)Permit' },
      { expanded: false , Id: 6, name: 'Dufara Fishing Permit'}
    ];
  }

  ExpandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.ProductTypes.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

}
