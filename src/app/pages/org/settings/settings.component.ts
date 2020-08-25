import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService,
  PositionConfigurationService,
  OrganizationService,
  HashService,
  LabelService,
  GroupService,
  HttpService,
  CategoryService } from '@services';
import { DragulaService } from 'ng2-dragula';
import { environment } from '@env';
import { LocalStorageService } from 'ngx-webstorage';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ImageCroppedEvent } from 'ngx-image-cropper';
// import { OutgoingMessage } from 'http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  public tab = 1;
  public venue_tab:any;
  public positions: Array<any> = [];
  public configForm: FormGroup;
  public newPositionForm: FormGroup;
  public newMemberForm: FormGroup;
  public wholeConfig: any;
  public user: any;
  public organization: any;
  public crew: any;
  public postionBasedUsers:any;
  public isAdding = false;
  public search='';
  public locationForm: FormGroup;
  public dropdownLocations: any[];
  public isEditingLocation = false;
  private positionConfigId = null;
  public isAddingNewMember = false;
  public addingNewMemberErrorMessage: string;
  public loading = false;
  constructor(public http: HttpClient,
    private dragulaService: DragulaService,
    public https: HttpService,
    public os: OrganizationService,
    public hash: HashService,
    public cs: CategoryService,
    public ls: LabelService,
    public gs: GroupService,
    public us: UserService,
    public formBuilder: FormBuilder,
    public storage: LocalStorageService,
    private positionConfigurationService: PositionConfigurationService) {
    dragulaService.createGroup("Categories", {
      moves: (el, container, handle) => {
        return handle.className === 'fa fa-arrows-alt';
      }
    });
    this.hash.on('tab', tab=>{
      if(tab){
        this.tab = tab;
      }
    });
    this.hash.on('venue_tab', venue_tab=>{
      if(venue_tab){
        this.venue_tab = venue_tab;
      }
    });
  }
  ngOnDestroy(){
    this.dragulaService.destroy('Categories');
  }
  update_categories_order(){
    let new_order = false;
    for (let i = 0; i < this.cs.categories.length; i++){
      if(this.cs.categories[i].order != i){
        new_order = true;
        this.cs.categories[i].order = i;
        this.cs.update(this.cs.categories[i], false);
      }
    }
    if(new_order){
      this.storage.store('alert', {
        type: 'success',
        message: 'Categories Order Successfully Updated'
      });
    }
  }

  ngOnInit() {
    this.loading = true;
    this.configForm = this.formBuilder.group({});
    this.newPositionForm = this.formBuilder.group({
      newPositionLabel: new FormControl('', Validators.required),
      newPositionValue: new FormControl('', Validators.required)
    });
    this.newMemberForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email])
    });
    this.locationForm = this.formBuilder.group({
      editedLocation: new FormControl(''),
      venueName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      address2: new FormControl(''),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
    });
    const organizationId = this.us.user.organizations[0]._id;
    this.http.get(environment.applicationURI + '/api/getOrganization/' + organizationId).subscribe((data) => {
      this.organization = data;

      this.updateLocationsDropdown();
      this.loading = false;
    });

    this.http.get(environment.applicationURI + '/api/getCrewUsers/'+organizationId).subscribe((data) => {
        this.crew = data;
        this.postionBasedUsers = [];

        this.crew.forEach(user => {
            let orgs =  user.organizations||[]
            orgs.forEach(org => {
                let positions = org._positions||[]
                if( org._id == organizationId)
                {
                    positions.forEach(pos => {
                        if(!this.postionBasedUsers[pos])
                        {
                            this.postionBasedUsers[pos]=[]
                        }
                        this.postionBasedUsers[pos].push( user )
                    });
                }
                
            });
        });

        this.loading = false;
      });

    this.positionConfigurationService.getPositions(organizationId).subscribe((data) => {
      if (data) {
        this.positionConfigId = data._id;
        delete data._id;
        delete data.organizationId;

        this.setConfiguration(data);
      } else {
        this.wholeConfig = {};
      }

      this.loading = false;
    });
  }

  setConfiguration(positions: any) {
    this.wholeConfig = positions;
    if (this.wholeConfig) {
      const keys = Object.keys(positions);
      keys.forEach((key, index) => {
        this.positions.push(this.wholeConfig[key]);
        this.configForm.addControl(key, new FormControl(this.wholeConfig[key].label));
      });
    }
  }
  public _locations:any = {};
  updateLocationsDropdown() {
      if (this.organization.locations) {
        this.dropdownLocations = [];
        this.organization.locations.forEach(location => {
          this._locations[location._id] = location;
          const dropdownLocation = Object.assign({}, {
            value: location._id,
            label: location.venueName
          });
          if(!this.venue_tab){
            this.venue_tab=location._id;
          }
          this.dropdownLocations.push(dropdownLocation);
          this.dropdownLocations = this.dropdownLocations.concat([]);
        });

      }
  }
  private _update:any;
  update_config() {
    clearTimeout(this._update);
    this._update = setTimeout(()=>{
      this.saveConfig();
    }, 1000);
  }
  saveConfig(): void {
    //this.loading = true;
    this.updateFields();
    this.wholeConfig._id = this.positionConfigId;
    this.wholeConfig.organizationId = this.organization._id;
    this.positionConfigurationService.updatePositions(this.wholeConfig).subscribe((res) => {
      this.storage.store('alert', {
        type: 'success',
        message: 'Successfully saved position configuration!'
      });
      this.wholeConfig = res;
      this.positionConfigId = this.wholeConfig._id;
      delete this.wholeConfig._id;
      delete this.wholeConfig.organizationId;
      //this.loading = false;
    });
  }

  saveOrganization(): void {
    this.loading = true;
    this.http.post<any>(environment.applicationURI + '/api/updateOrganization/'
      + this.organization._id, this.organization).subscribe((res) => {
      this.storage.store('alert', {
        type: 'success',
        message: 'Successfully saved locations!'
      });
      this.organization = res.data;
      // reset the newLocations so they don't send multiple
      this.organization.newLocations = [];
      this.organization.updatedLocation = null;

      this.updateLocationsDropdown();

      this.loading = false;
    }, (err) => {
      if (err) {
        this.storage.store('alert', {
          type: 'error',
          message: 'There was a problem saving changes to configuration, please try again.'
        });

        this.loading = false;
      }
    });
  }

  updateFields() {
    if (this.wholeConfig) {
      const keys = Object.keys(this.wholeConfig);
      keys.forEach((key) => {
        this.wholeConfig[key].label = this.configForm.controls[key].value;
      });
    }
  }

  toggleAddPosition() {
    this.isAdding = !this.isAdding;
  }

  removePosition(position) {
    delete this.wholeConfig[position.value];
    const positionIndex = this.positions.findIndex((p) => {
      return p.value === position.value;
    });
    this.positions.splice(positionIndex, 1);
    this.configForm.removeControl(position.value);
    this.saveConfig();
  }

  addPosition() {
    const newPosition = {
      value: this.newPositionForm.controls.newPositionValue.value,
      label: this.newPositionForm.controls.newPositionLabel.value
    };

    this.positions.push(newPosition);
    this.wholeConfig[newPosition.value] = newPosition;
    this.configForm.addControl(newPosition.value, new FormControl(newPosition.label));
    this.toggleAddPosition();
    this.saveConfig();

    this.newPositionForm.reset();
  }

  createNewLocation() {
    this.isEditingLocation = true;
    this.locationForm.reset();
  }

  editLocation() {
    this.isEditingLocation = true;
    const editedLocationValue = this.locationForm.controls.editedLocation.value;
    if (editedLocationValue && editedLocationValue !== '') {
      const locationId = this.locationForm.controls.editedLocation.value;
      const organizationLocations = this.organization.locations;
      const editingLocation = organizationLocations.find(function(orgLocation) {
        return orgLocation._id === locationId;
      });

      this.locationForm.controls.venueName.setValue(editingLocation.venueName);
      this.locationForm.controls.address.setValue(editingLocation.address);
      this.locationForm.controls.address2.setValue(editingLocation.address2);
      this.locationForm.controls.city.setValue(editingLocation.city);
      this.locationForm.controls.state.setValue(editingLocation.state);
      this.locationForm.controls.zipCode.setValue(editingLocation.zipCode);
    }
  }

  saveLocation() {
    this.loading = true;
    this.isEditingLocation = false;

    const locationObject = {
      venueName: this.locationForm.controls.venueName.value,
      address: this.locationForm.controls.address.value,
      address2: this.locationForm.controls.address2.value,
      city: this.locationForm.controls.city.value,
      state: this.locationForm.controls.state.value,
      zipCode: this.locationForm.controls.zipCode.value,
    };

    const locationId = this.locationForm.controls.editedLocation.value;
    if (locationId) {
      locationObject['_id'] = locationId;
      this.organization.updatedLocation = locationObject;
    } else {
      if (!this.organization.newLocations) {
        this.organization.newLocations = [];
      }
      this.organization.newLocations.push(locationObject);
    }

    this.saveOrganization();
    this.loading = false;
  }

  cancelEditingLocation() {
    this.isEditingLocation = false;
    this.locationForm.reset();
  }

  sendLinkToNewMember() {
    this.loading = true;
    const newMemberEmail = this.newMemberForm.controls.email.value;

    const putData = {
      email: newMemberEmail,
      name: this.organization.name,
      organizationId: this.organization._id
    };
    debugger;
    this.http.put<any>(environment.applicationURI + '/api/sendNewMemberLink', putData).subscribe(res => {
      this.newMemberForm.controls.email.setValue('');
      if(!res.isError){
        this.us.users.push(res.user);
        this.us.users_pending.push(res.user);
      }
      let alertType = 'success';
      if (res.isError) {
        alertType = 'danger';
      }
      this.storage.store('alert', {
        type: alertType,
        message: res.message
      });

      this.loading = false;
    });
  }

  toggleNewMemberVisibility() {
    this.isAddingNewMember = !this.isAddingNewMember;
    this.newMemberForm.reset();
  }

  /*
  * Members Management
  */
    public select_current = false;
    public select_pending = false;
    select(state, users){
      for(let i = 0; i < users.length; i++){
        users[i]._selected = state;
      }
    }
    delete(user){
      this.storage.store('alert', {
        type: 'danger',
        message: 'Are you sure that you want to delete user '+ user.email,
        yes: ()=>{
          this.us.delete(user);
        },
        no: ()=>{}
      });
    }
    hasSelected(users){
      if(!users) return false;
      for(let i = 0; i < users.length; i++){
        if(users[i]._selected){
          return true;
        }
      }
      return false;
    }
    deleteAll(users){
      let message = '';
      for(let i = 0; i < users.length; i++){
        if(users[i]._selected){
          if(message){
            message += ', '+users[i].email;
          }else{
            message = 'Are you sure that you want to delete users '+users[i].email;
          }
        }
      }
      this.storage.store('alert', {
        type: 'danger',
        message: message,
        yes: ()=>{
          for(let i = users.length-1; i >= 0; i--){
            if(users[i]._selected){
              this.us.delete(users[i]);
            }
          }
        },
        no: ()=>{}
      });
    }
  /*
  * Positions Management
  */
    public position_selected:any;
  /*
  * Labels Management
  */
    public new_label = {};
    public show_new_label = false;
  /*
  * Labels Management
  */
    public new_category = {};
    public show_new_category = false;
  /*
  * Groups Management
  */
    public show_new_group = false;
    public group:any = {
      name: ''
    };
    private added:any = {};
    public lists_selected = {};
    select_group(group){
      for(let i = 0; i < group.users.length; i++){
        this.lists_selected[group._id+'_'+group.users[i]] = this.lists_selected[group._id];
      }
    }
    delete_group(group){
      for(let i = group.users.length-1; i >= 0; i--){
        if(this.lists_selected[group._id+'_'+group.users[i]]){
          group.users.splice(i, 1);
        }
      }
      this.gs.update(group);
    }
    add_users(group){
      this.added = {};
      for(let i = 0; i < group.users.length; i++){
        this.added[group.users[i]] = true;;
      }
      for(let i = 0; i < this.us.users.length; i++){
        if(this.us.users[i]._selected && !this.added[this.us.users[i]._id] ){
          this.added[this.us.users[i]._id] = true;
          group.users.push(this.us.users[i]._id);
        }
      }
      for(let each in this.lists_selected){
        if(!this.lists_selected[each]) continue;
        let userId = each.split('_');
        if(userId.length>1){
          this.added[userId[1]] = true;
          group.users.push(userId[1]);
        }
      }
      this.gs.update(group);
    }
    create_list(){
      this.gs.create(this.group, group=>{
        this.add_users(group);
      });
      this.show_new_group=false;
    }
  /*
  * Location Management
  */
    private _update_location:any={};
    private new_location:any={};
    create_location() {
      this.http.post(environment.applicationURI + '/api/location/create', this.new_location).subscribe((created:any)=>{
        this.os.org.locations.push(created);
        this.os.update(this.os.org);
        this._locations[created._id] = created;
        this.dropdownLocations.push({
          value: created._id,
          label: created.venueName
        });
      });
    }
    update_location(location) {
      clearTimeout(this._update_location[location._id]);
      this._update_location[location._id] = setTimeout(()=>{
        this.http.post(environment.applicationURI + '/api/location/update', location).subscribe(()=>{});
      }, 2000);
    }
  /*
  * Labels
  */
    public dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All'
    };
  /*
  * Files Management
  */
    public imageChangedEvent: any = '';
    public croppedImage: any = '';
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    upload(){
      this.os.org.logo = this.croppedImage;
      this.os.update(this.os.org);
      /*
      this.http.post(environment.applicationURI + '/api/uploadData', {
        dataUrl: this.croppedImage,
        name: this.os.org.name+'_org.png',
        folder: this.os.org._id
      }).subscribe((data) => {
        console.log(data);
        if(typeof data == 'string'){
          this.os.org.logo = data+'?'+Date.now();
          this.os.update(this.os.org);
        }
      });
      */
      this.imageChangedEvent = null;
    }
  /* End of Page*/
}