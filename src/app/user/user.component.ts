import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { Role } from '../Models/role';
import { RoleService } from '../Services/role.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userObj: User = new User();
  user: User[];
  userEditObj: User = new User();
  roleObj: Role = new Role();
  role: Role[];
  constructor(private userService: UserService, private roleservice: RoleService) { }

  ngOnInit() {
    this.getAllUserList();
  }

  getAllUserList() {
    this.userService.getAllUser().subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

  addUser() {
    this.userService.postUser(this.userObj).subscribe(addusr => {
      console.log(addusr);
      this.getAllUserList();
    });
  }
  deleteUserById(deluser) {
    this.userService.deleteUser(deluser).subscribe(data=>{
      this.userObj.id=deluser.id;
      // alert("User deleted");
      this.getAllUserList();
    });
  }

  editStatus(usr) {
    this.userEditObj = Object.assign({}, usr);
  }

  updateUserById(){
    this.userService.updateUser(this.userEditObj).subscribe(data=>{
      // alert("User updated"); 
      this.getAllUserList();
    });
  }

  getRole() {
    this.roleservice.getAllRole().subscribe(xyz => {
      console.log(xyz);
      this.role = xyz;
    });
  }
}
