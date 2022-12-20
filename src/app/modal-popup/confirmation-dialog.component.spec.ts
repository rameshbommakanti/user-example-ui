import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialog } from './confirmation-dialog.component';



 describe('ConfirmationDialog', () => {
   let component: ConfirmationDialog;
   let fixture: ComponentFixture<ConfirmationDialog>;

   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [ ConfirmationDialog ],
       imports: [ MatDialogModule ], // add here
       providers: [
         { provide: MatDialogRef, useValue: {} },{provide: MAT_DIALOG_DATA, useValue: {} } // add here
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});