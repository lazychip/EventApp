import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validator, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";


@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input { background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999;}
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder {color: #999; }
    .error :-ms-input-placeholder {color: #999; }
    

  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  firstName: FormControl;
  lastName: FormControl;
  constructor(private authService: AuthService, private router: Router){

  }


  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });

  }


  cancel() {
    this.router.navigate(['/events']);
  }

  saveProfileChanges(formValues: any) {
    this.authService.updateProfile(formValues.firstName, formValues.lastName);
    this.router.navigate(['/events']);
  }
  validateFirstName() {
    console.log(this.firstName.valid || this.firstName.untouched);
    return this.firstName.valid || this.firstName.untouched;
  }
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

}
