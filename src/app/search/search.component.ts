import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../models/listing';
import { ImageService } from '../services/image.service';
import { SearchService } from '../services/search.service';

@Component({
	selector: 'app-landing',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
	searchTerm: string;
	listings: Listing[];
	kslUrl: string;
	listing: any;
	searching: boolean;
	errors: any;

	constructor(private route: ActivatedRoute, private router: Router, private searchService: SearchService, private imageService: ImageService) { }

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			this.searchTerm = params.get('searchTerm');
		});

		if (this.searchTerm) {
			this.search(this.searchTerm);
		}
	}

	search(searchQuery: string) {
		this.searching = true;
		this.reset();
		this.router.navigate([`/search/${this.searchTerm}`]);
		this.searchService.search(searchQuery)
			.subscribe(
				(data: { listings, kslUrl }) => {
					this.listings = data.listings;
					this.kslUrl = data.kslUrl;
					this.searching = false;
				},
				error => {
					this.searching = false;
					this.errors = error;
				});
	}

	getPhotoUrl(imageUrl: string) {
		return this.imageService.getPhotoUrl(imageUrl);
	}

	reset() {
		this.listings = [];
		this.kslUrl = '';
	}
}
