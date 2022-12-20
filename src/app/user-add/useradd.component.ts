import { Component, Directive, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  formGroup: FormGroup=new FormGroup({});
  post: any = '';
  dynamictype: string = "number";
  forminfo: any='';

  constructor(private formBuilder: FormBuilder,private router: Router,
    private userService:UserService) { }

  ngOnInit() {
    this.createForm();
  }

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
     this.userService.saveUser(post.value).subscribe(()=>{
    this.router.navigate(['/userview']);
    },error=>{
      console.log("error handling....."+error);
    });

  }

}
