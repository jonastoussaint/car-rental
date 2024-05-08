import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'; // Corrected import statements
import { SignupComponent } from "./auth/components/signup/signup.component"; // Corrected path
import { LoginComponent } from "./auth/components/login/login.component"; // Corrected path

const routes: Routes = [
    { path: "register", component: SignupComponent}, // Corrected 'component'
    { path: "login", component: LoginComponent} // Corrected 'component'
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] // Corrected export
})
export class AppRoutingModule { }
