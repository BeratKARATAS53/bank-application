import { ErrorPageComponent } from './pages/ErrorPage/ErrorPage.component';
import { MainPageComponent } from './pages/MainPage/MainPage.component';
// @angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

// components
import { LoginPageComponent } from './pages/LoginPage/LoginPage.component';
import { TransfersPageComponent } from './pages/TransfersPage/TransfersPage.component';
import { RegisterPageComponent } from './pages/RegisterPage/RegisterPage.component';
import { AccountsPageComponent } from './pages/AccountsPage/AccountsPage.component';
import { AccountDetailPageComponent } from './pages/AccountDetailPage/AccountDetailPage.component';
import { SidebarComponent } from './components/Sidebar/Sidebar.component';

const routes: Routes = [
    {
        path: '',
        component: SidebarComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'main' },
            { path: 'main', component: MainPageComponent },
            { path: 'accounts', component: AccountsPageComponent },
            { path: 'transfers', component: TransfersPageComponent },
            {
                path: 'account/:accountNumber',
                component: AccountDetailPageComponent,
            },
        ],
    },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: '**', component: ErrorPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), TranslateModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponent = [
    SidebarComponent,
    MainPageComponent,
    AccountDetailPageComponent,
    AccountsPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    TransfersPageComponent,
];
