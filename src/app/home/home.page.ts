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
      { expanded: false , Id: 1},
      { expanded: false , Id: 2},
      { expanded: false , Id: 3},
      { expanded: false, Id: 4},
      { expanded: false, Id: 5 },
      { expanded: false , Id: 6},
      { expanded: false , Id: 7},
      { expanded: false, Id: 8 },
      { expanded: false , Id: 9}
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

    console.log('item',item);
  }

}
