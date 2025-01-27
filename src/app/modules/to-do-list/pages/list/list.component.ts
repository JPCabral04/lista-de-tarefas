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

  private listItems = signal<IListItems[]>(this.loadItems());
  public items = this.listItems.asReadonly();

  private loadItems(): IListItems[] {
    return JSON.parse(localStorage.getItem('@my-list') || '[]');
  }

  public getInputAndAddItem(value: IListItems): void {
    const updatedItems = [...this.listItems(), value];
    localStorage.setItem('@my-list', JSON.stringify(updatedItems));
    this.listItems.set(updatedItems);
  }
};

