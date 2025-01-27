import { Component, signal } from '@angular/core';

//Components
import { InputAddItemComponent } from '../../components/input-add-item/input-add-item.component';

//Interface
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-list',
  imports: [InputAddItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public addItem = signal(true);

  private setListItems = signal<IListItems[]>([this.parseItem()]);
  getListItem = this.setListItems.asReadonly();

  private parseItem(){
    return JSON.parse(localStorage.getItem('@my-list') || '[]');
  }

  public getInputAndAddItem(value : IListItems){
    localStorage.setItem('@my-list',JSON.stringify([value]))
  };
}
