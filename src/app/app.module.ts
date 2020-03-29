import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { ListingComponent } from './listing/listing.component';

@NgModule({
	declarations: [
		AppComponent,
		SignupComponent,
		ProfileComponent,
		NavbarComponent,
		FooterComponent,
		LoginComponent,
		SearchComponent,
		ListingComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		NgbModule,
		FormsModule,
		RouterModule,
		AppRoutingModule,
		HomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
