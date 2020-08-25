import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { GroupService, UserService, OrganizationService } from '@services';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user;
  public isUserProfile = false;
  public profileId: any;
  public profile: any;
  public organizationPositions = [];
  public dropdownSettings: IDropdownSettings = {};
  constructor(public us: UserService,
    private storage: LocalStorageService,
    public route: ActivatedRoute,
    public os: OrganizationService,
    public gs: GroupService,
    public http: HttpClient) { }

  ngOnInit() {
    // TODO: Modify this set up to handle multiple organizations with their positions
    this.http.get(environment.applicationURI + '/api/getPositions/' + this.os.org._id).subscribe((res: any) => {
      if (res) {
        Object.keys(res).forEach(key => {
          const position = res[key];
          if (Object(position) === position) {
            this.organizationPositions = this.organizationPositions.concat({
              value: position.value,
              label: position.label
            });
          }
        });
      }
      this.organizationPositions = this.organizationPositions;
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'value',
      textField: 'label',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All'
    };
    this.route.queryParams.subscribe((params) => {
      this.profileId = params.userId;
      if (this.profileId === this.us.user._id) {
        this.isUserProfile = true;
        this.profile = this.us.user;
      } else {
        this.http.get(environment.applicationURI + '/api/getUser/' + this.profileId).subscribe((res) => {
          this.profile = res;
        });
      }
    });
  }
  update_position(org, pos, user) {
    if(!user) return;
    if(user._id == this.us.user._id){
      this.storage.store('user', user);
    }
    for (let i = 0; i < this.us.users.length; i++){
      if(this.us.users[i]._id==user._id){
        for (let each in this.us.user){
          this.us.users[i][each] = this.us.user[each];
        }
        break;
      }
    }
    this.http.post(environment.applicationURI + '/api/updateUserPositions/'+user._id+'/'+org, pos).subscribe((res: any) => {});
  }
}
