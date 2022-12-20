import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialog } from '../modal-popup/confirmation-dialog.component';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
}

const ELEMENT_DATA: User[] = [
  {firstName: "1", lastName: 'Hydrogen', email: "1.0079", mobileNumber: 'H'},
  {firstName: "1", lastName: 'Hydrogen', email: "1.0079", mobileNumber: 'H'},
  
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'userview',
  styleUrls: ['userview.component.css'],
  templateUrl: 'userview.component.html',
})
export class UserViewComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'mobileNumber','actions'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router,
    private userService:UserService,private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

    ngOnInit(){
      this.getUsers();
    }
  getUsers(){
    this.userService.getUsers()
    .pipe()
    .subscribe(
      (res:any) => {
        this.dataSource=res;
      },(error)=>{
        console.log(error);
      });
     

  }
  test(data:any){
    this.router.navigate(['/useredit/'+data]);
  }

  openDialog(id:any) {
    const dialogRef = this.dialog.open(ConfirmationDialog,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Delete',
          cancel: 'No'
        }
      }
    });
    const snack = this.snackBar.open('Snack bar open before dialog');

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        snack.dismiss();
       this.userService.deleteUser(id).subscribe(()=>{
        window.location.reload();
        this.snackBar.open('Deleted successfully!', 'Fechar', {
          duration: 2000,
        });
        
      });
      }
    });
  }
}
