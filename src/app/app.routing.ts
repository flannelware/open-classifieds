import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'user-profile', component: ProfileComponent },
	{ path: 'register', component: SignupComponent },
	{ path: 'search/:query', component: SearchComponent },
	{ path: 'listing/:id', component: ListingComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forRoot(routes, {
			useHash: false
		})
	],
	exports: [
	],
})
export class AppRoutingModule { }
