import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { ListingGridComponent } from './shared/listing-grid/listing-grid.component';

@NgModule({
	declarations: [
		AppComponent,
		SignupComponent,
		ProfileComponent,
		NavbarComponent,
		FooterComponent,
		LoginComponent,
		SearchComponent,
		ListingComponent,
		SearchHistoryComponent,
		AboutComponent,
		ListingGridComponent
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
