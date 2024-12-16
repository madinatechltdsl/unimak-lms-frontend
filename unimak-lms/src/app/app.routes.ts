import {RouterModule, Routes} from '@angular/router';
import {StudentInformationComponent} from "./components/student-information/student-information.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/user-regist/login/login.component";
import {SignupComponent} from "./components/user-regist/signup/signup.component";

export const routes: Routes = [
  { path: 'app-student-information', component: StudentInformationComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-signup', component: SignupComponent },
  { path: '**', redirectTo: 'app-login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
