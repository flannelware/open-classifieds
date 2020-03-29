import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../models/listing';
import { ImageService } from '../services/image.service';
import { ListingService } from '../services/listing.service';

@Component({
	selector: 'app-listing',
	templateUrl: './listing.component.html',
	styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

	kslUrl: string;
	listingId: number;
	listing: Listing;
	loading: boolean;

	constructor(private route: ActivatedRoute, private listingService: ListingService, private imageService: ImageService) { }

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.listingId = +params.get('id');
		});

		this.loading = true;
		this.getListing(this.listingId);
	}


	getListing(id: number): any {
		this.listingService.getListing(this.listingId)
			.subscribe((data: { listing, kslUrl }) => {
				this.listing = data.listing;
				this.kslUrl = data.kslUrl;
				this.loading = false;
			});

	}

	getPhotoUrl(imageUrl: string) {
		return this.imageService.getPhotoUrl(imageUrl);
	}

}
