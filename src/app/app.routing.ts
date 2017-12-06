import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },


  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'e-Pesa'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
        
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'Profile',
        loadChildren: './views/profile/profile.module#ProfileModule'
      }
    ]
  },
  
  //{
  //  path: 'login',
  //  component: SimpleLayoutComponent,
  //  data: {
  //    title: ''
  //  },
  //  children: [
  //    {
  //      path: '',
  //     loadChildren: './views/login/login.module#LoginModule'
  //    }
  //  ]
  //}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
