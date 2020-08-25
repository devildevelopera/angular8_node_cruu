import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { WacomModule } from 'wacom';

import { AppComponent } from './app.component';

import { LoginComponent } from './pages/guest/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignUpComponent } from './pages/guest/sign-up/sign-up.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileComponent as JobComponent } from './pages/job/profile/profile.component';
import { JobComponent as JobModal } from './modals/job/job.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { CrewDrawerComponent } from './pages/event-details/crew-drawer/crew-drawer.component';
import { SettingsComponent } from './pages/org/settings/settings.component';
import { CrewConfigComponent } from './pages/event-details/crew-config/crew-config.component';
import { CrewConfigRowComponent } from './pages/event-details/crew-config/crew-config-row/crew-config-row.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';
import { UserProfileComponent } from './pages/profile/user-profile/user-profile.component';
import { UserEventRowComponent } from './pages/profile/user-event-row/user-event-row.component';
import { InventoryDrawerComponent } from './pages/event-details/inventory-drawer/inventory-drawer.component';
import { InventoryConfigurationComponent } from './pages/event-details/inventory-configuration/inventory-configuration.component';
import { InventoryConfigurationRowComponent } from './pages/event-details/inventory-configuration/inventory-configuration-row/inventory-configuration-row.component';
import { InventoryConfigurationModalComponent } from './pages/event-details/inventory-configuration-modal/inventory-configuration-modal.component';
import { PrintCrewViewComponent } from './pages/event-details/print-crew-view/print-crew-view.component';
import { PositionApprovalComponent } from './pages/event-details/position-approval/position-approval.component';
import { ResetPasswordComponent } from './pages/guest/reset-password/reset-password.component';

import { CalendarPickerComponent } from './utils/calendar-picker/calendar-picker.component';
import { UtilExampleComponent } from './utils/util-example/util-example.component';
import { Broadcaster } from './utils/broadcaster';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { SearchPipe } from './pipes/search.pipe';
import { LabelsByCategoryPipe } from './pipes/labels-by-category.pipe';
import { UserComponent } from './utils/user/user.component';
import { GuestComponent } from './utils/guest/guest.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ColumnConfigurationFlyoutComponent } from './pages/dashboard/column-configuration-flyout/column-configuration-flyout.component';

import { PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG,
    PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { TimePipe } from './pipes/time.pipe';
import { TextMaskModule } from 'angular2-text-mask';
import { TimeComponent } from './utils/time/time.component';
import { ListComponent } from './pages/job/list/list.component';
import { JobsPipe } from './pipes/jobs.pipe';
import { EachPipe } from './pipes/each.pipe';
import { CrewCostPipe } from './pipes/crew-cost.pipe';
import { CrewCommentModalComponent } from './pages/event-details/crew-drawer/crew-comment-modal/crew-comment-modal.component';
import { EventsComponent } from './pages/admin/events/events.component';
import { ApiComponent } from './pages/admin/api/api.component';
import { RowComponent } from './pages/admin/events/row/row.component';
import { Authenticated, Guest, Admins } from '@services';
import { Routes, RouterModule } from '@angular/router';
import { JobvComponent } from './modals/jobv/jobv.component';
import { CrewmailComponent } from './modals/crewmail/crewmail.component';
import { DragulaModule } from 'ng2-dragula';
import { JoblComponent } from './modals/jobl/jobl.component';
import { MessageComponent } from './modals/message/message.component';
import { OrgmailComponent } from './modals/orgmail/orgmail.component';
import { LabelcComponent } from './modals/labelc/labelc.component';
import { RefreshComponent } from './pages/refresh/refresh.component';
const routes: Routes = [{
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
}, {
    path:'refresh', redirectTo:'refresh'
},{
    path: '',
    canActivate: [Guest],
    component: GuestComponent,
    children: [{
        path: 'login',
        component: LoginComponent
    }, {
        path: 'sign-up',
        component: SignUpComponent
    },{
        path: 'reset-password',
        component: ResetPasswordComponent
    },{
        path:'refresh',
        component: RefreshComponent
    }]
}, {
    path: '',
    canActivate: [Authenticated],
    component: UserComponent,
    children: [{
        path: 'dashboard',
        component: DashboardComponent
    }, {
        path: 'profile',
        component: ProfileComponent
    }, {
        path: 'jobs',
        component: ListComponent
    }, {
        path: 'job/new',
        component: JobComponent
    }, {
        path: 'job/:_id',
        component: JobComponent
    }, {
        path: 'event-details',
        component: EventDetailsComponent
    }, {
        path: 'settings',
        component: SettingsComponent
    }, {
        path: 'print',
        component: PrintCrewViewComponent
    },{
        path:'refresh',
        component: RefreshComponent
    }]
}, {
    path: '',
    canActivate: [Admins],
    component: UserComponent,
    children: [{
        path: 'events',
        component: EventsComponent
    }, {
        path: 'restapi',
        component: ApiComponent
    },{
        path:'refresh',
        component: RefreshComponent
    }]
}, {
    path: '**', redirectTo: 'dashboard', pathMatch: 'full'
}];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignUpComponent,
    ProfileComponent,
    JobComponent,
    EventDetailsComponent,
    CrewDrawerComponent,
    SettingsComponent,
    CrewConfigComponent,
    CalendarPickerComponent,
    CrewConfigRowComponent,
    EditProfileComponent,
    UserProfileComponent,
    UserEventRowComponent,
    InventoryDrawerComponent,
    InventoryConfigurationComponent,
    InventoryConfigurationRowComponent,
    InventoryConfigurationModalComponent,
    UtilExampleComponent,
    PrintCrewViewComponent,
    PositionApprovalComponent,
    ResetPasswordComponent,
    SearchPipe,
    LabelsByCategoryPipe,
    UserComponent,
    GuestComponent,
    ColumnConfigurationFlyoutComponent,
    TimePipe,
    TimeComponent,
    ListComponent,
    JobsPipe,
    EachPipe,
    CrewCostPipe,
    CrewCommentModalComponent,
    EventsComponent,
    ApiComponent,
    RowComponent,
    JobModal,
    JobvComponent,
	
    CrewmailComponent,
    JoblComponent,
    MessageComponent,
    OrgmailComponent,
    LabelcComponent,
    RefreshComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    DragulaModule.forRoot(),
    WacomModule,
    TextMaskModule,
    PerfectScrollbarModule,
    ImageCropperModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxWebstorageModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgxLoadingModule.forRoot({
        animationType: ngxLoadingAnimationTypes.threeBounce,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff',
        secondaryColour: '#ffffff',
        tertiaryColour: '#ffffff'
    })
  ],
  providers: [
    Admins, Authenticated, Guest,
    {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    Broadcaster
  ],
  entryComponents: [
    PositionApprovalComponent,
    CrewCommentModalComponent,
    CrewmailComponent,
    JobvComponent,
	JoblComponent,
    OrgmailComponent,
    LabelcComponent,
    MessageComponent,
    JobModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
