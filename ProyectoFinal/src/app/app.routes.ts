import { Menu } from 'primeng/menu';
import { LoginComponent } from './components/login/login.component';
import { ManagementComponent } from './components/management/management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { CreateComponent } from './components/create/create.component';
import { DatabaseComponent } from './components/database/database.component';



export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'management',
        component: ManagementComponent
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path:'',
        redirectTo:'login',
        pathMatch: 'full'
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'management',
        component: ManagementComponent
    },
    {
        path: 'database',
        component: DatabaseComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
