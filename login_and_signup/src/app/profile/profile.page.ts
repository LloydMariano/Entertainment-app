import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileForm = new FormGroup({
    fullname: new FormControl(''),
    course: new FormControl(''),
    idnum: new FormControl(''),
    school: new FormControl(''),
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }
  update(){
    console.log(this.profileForm.value);
   this.profileForm.patchValue({
    fullname: '',
    course: '',
    idnum: '',
    school: '',
   });
  }
}