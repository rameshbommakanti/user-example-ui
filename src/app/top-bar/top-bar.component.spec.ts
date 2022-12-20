import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../material-module';
import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,DemoMaterialModule, MatFormFieldModule,ReactiveFormsModule
      ],
      declarations: [
        TopBarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TopBarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test application'`, () => {
    const fixture = TestBed.createComponent(TopBarComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test application');
  });


});
