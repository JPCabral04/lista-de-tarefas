import { ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';

//Interface
import { IListItems } from '../../interface/IListItems.interface';

@Component({
  selector: 'app-input-add-item',
  imports: [],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {
  
  private cdr = inject(ChangeDetectorRef);

  @ViewChild("inputText") public inputText!: ElementRef;

  @Output() public outputAddListItems = new EventEmitter<IListItems>();

  public focusAddItem(value : string){

    if(value){
      this.cdr.detectChanges();
      this.inputText.nativeElement.value = "";

      const currentDate = new Date();
      const timestamp = currentDate.getTime();
      const id = `ID ${timestamp}`

      this.outputAddListItems.emit ({
        id,
        checked : false,
        value
      })


      return this.inputText.nativeElement.focus()
    }
  }
}
