import { TestBed, async } from '@angular/core/testing'; // 1
import { UserEditComponent } from './useredit.component';
import { UserService } from '../services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { DemoMaterialModule } from '../material-module';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { from,of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

 
describe('UserEditComponent', () => {
  let spy: any;
  let service: UserService;
  let httpMock: HttpClient;
  
    const fakeActivatedRoute = {
        snapshot: {
          paramMap: convertToParamMap({
            id: 'some'
          })
        }
      } as ActivatedRoute;
      let router = {
        navigate: jasmine.createSpy('navigate')
      }
      
      // 2
  beforeEach(async(() => { // 3
    TestBed.configureTestingModule({
        imports: [
            FormsModule,
    MatSidenavModule,
    MatTableModule,
    HttpClientModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        DemoMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpClientTestingModule
          ],
      declarations: [
        UserEditComponent
      ],
      providers: [UserService,{provide: ActivatedRoute,useValue: { 'paramMap':from([{ 'id': 1 }]) }},
        { provide: Router, useValue: router }  ],
    })
  }));

  beforeEach(() => {
  service = jasmine.createSpyObj('UserService', ['getUsers', 'getUser','updateUser']);

 // httpMock=jasmine.createSpyObj('HttpClient',['put']);
});
afterEach(() => {
  TestBed.resetTestingModule();
});


 
  it('should create the app', () => { // 4
    const fixture = TestBed.createComponent(UserEditComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
 
  it(`should displayed columns defined`, () => {  //5
    const fixture = TestBed.createComponent(UserEditComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.post).toBeDefined();
  });
 
  it('should render title in a span tag', () => { //6
    const fixture = TestBed.createComponent(UserEditComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let jsonData={'email':'ramesh'};
    //spy = spyOn(service, 'getUser').and.returnValue(of(jsonData)); 
    expect(compiled.querySelector('span').textContent).toContain('User Edit');
  });
  it('form should be invalid',()=>{
    const fixture = TestBed.createComponent(UserEditComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    let jsonData={'email':'ramesh'};
    //spy = spyOn(service, 'getUser').and.returnValue(of(jsonData)); 
    app.formGroup.controls['firstName'].setValue(null);
    expect(app.formGroup.valid).toBeFalsy();
  });

  it('form should be valid',()=>{
    const fixture = TestBed.createComponent(UserEditComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    let jsonData={'email':'ramesh','mobileNumber':'sdfsf','firstName':'first','lastName':'jock'};
    //spy = spyOn(service, 'getUser').and.returnValue(of(jsonData)); 
    app.formGroup.controls['firstName'].setValue('firstName');
    app.formGroup.controls['lastName'].setValue("lastname");
    app.formGroup.controls['email'].setValue("test@test.com");
    app.formGroup.controls['mobileNumber'].setValue('9848022338');
    expect(app.formGroup.valid).toBeTrue();
  });

  it('form should be saved',()=>{
    const fixture = TestBed.createComponent(UserEditComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    let jsonData={'email':'ramesh'};
   
    app.formGroup.controls['firstName'].setValue('firstName');
    app.formGroup.controls['lastName'].setValue("lastname");
    app.formGroup.controls['email'].setValue("test@test.com");
    app.formGroup.controls['mobileNumber'].setValue('9848022338');

    app.onSubmit(app.formGroup.value);
    fixture.detectChanges();
    expect(app.formGroup.valid).toBeTrue();
  });
});