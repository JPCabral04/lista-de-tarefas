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

  @Output() public outputListItems = new EventEmitter<IListItems>();

  public focusAddItem(value : string){

    if(value){
      this.cdr.detectChanges();
      this.inputText.nativeElement.value = "";

      const dataAual = new Date();
      const timestamp = dataAual.getTime();
      const id = `ID ${timestamp}`

      this.outputListItems.emit ({
        id,
        checked : false,
        value
      })


      return this.inputText.nativeElement.focus()
    }
  }
}
