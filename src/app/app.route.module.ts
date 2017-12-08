import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './Views/Login/login.component';
import { IndexComponent } from './Views/Index/index.component';
import { RegisterComponent } from './Views/Register/register.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'index', component: IndexComponent  },
    { path: 'register', component: RegisterComponent },
    { path: 'login', redirectTo: '/index'},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRouteModule { }