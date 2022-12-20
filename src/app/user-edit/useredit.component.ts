import { Component, Directive, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-edit-app',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UserEditComponent {

  formGroup: FormGroup=new FormGroup({});
  post: any = '';
  dynamictype: string = "number";
  forminfo: any='';
  id:any=0;

  constructor(private formBuilder: FormBuilder,private router: Router,
    private userService:UserService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.createForm();
    this.userService.getUser(this.id).subscribe((response:any)=>{
      this.formGroup.patchValue(response);
    })
  };

  createForm() {
    this.formGroup = this.formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.required],
      'mobileNumber': [null, Validators.required],
    });
  }

  onSubmit(post:any) {
    this.post = post;
    this.post.id=this.id;
    this.userService.updateUser(post).subscribe(()=>{
      this.router.navigate(['/userview']);
      }, error => {
       console.log(error);
      });
  
  }

}

@Directive({
  selector: 'input[type=number]'
})
export class TestDirective {
  constructor(private elementRef: ElementRef) {

  }
  ngOnInit() {
    console.log('type=number', this.elementRef.nativeElement);
   
  }
}