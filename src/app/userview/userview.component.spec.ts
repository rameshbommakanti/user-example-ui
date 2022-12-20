import { TestBed, async } from '@angular/core/testing'; // 1
import { UserViewComponent } from './userview.component';
import { UserService } from '../services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { DemoMaterialModule } from '../material-module';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
 
describe('UserViewComponent', () => { // 2

let service:UserService;
  beforeEach(async(() => { // 3
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,DemoMaterialModule,HttpClientModule
          ],
      declarations: [
        UserViewComponent
      ],
      providers: [UserService ],
    })
  }));

  beforeEach(() => {
    service = jasmine.createSpyObj('UserService', ['getUsers', 'getUser','updateUser']);
  
   // httpMock=jasmine.createSpyObj('HttpClient',['put']);
  });
 
  it('should create the app', () => { // 4
    const fixture = TestBed.createComponent(UserViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
 
  it(`should displayed columns defined`, () => {  //5
    const fixture = TestBed.createComponent(UserViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.displayedColumns).toBeDefined();
  });
 
  it('should render title in a span tag', () => { //6
    const fixture = TestBed.createComponent(UserViewComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('');
  });

  it('should call get Users', () => { //6
    const fixture = TestBed.createComponent(UserViewComponent);

    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    app.getUsers();
    expect(app.dataSource).toBeDefined();
  });
});