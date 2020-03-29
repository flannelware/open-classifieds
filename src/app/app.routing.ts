import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ListingComponent } from './listing/listing.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
	{ path: 'search/:searchTerm', component: SearchComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'search-history', component: SearchHistoryComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'listing/:id', component: ListingComponent },
	{ path: '', redirectTo: 'search', pathMatch: 'full' }
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
