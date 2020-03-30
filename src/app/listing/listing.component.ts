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
	sellerData: any;
	loading: boolean;

	constructor(private route: ActivatedRoute, private listingService: ListingService, private imageService: ImageService) { }

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.listingId = +params.get('id');
		});
		this.listing = null;
		this.loading = true;
		this.getListing(this.listingId);
	}

	getListing(id: number): any {
		this.listingService.getListing(this.listingId)
			.subscribe((data: { listing, kslUrl, sellerData }) => {
				this.listing = data.listing;
				this.sellerData = data.sellerData;
				this.kslUrl = data.kslUrl;
				this.loading = false;
			});

	}

	getPhotoUrl(imageUrl: string) {
		return this.imageService.getPhotoUrl(imageUrl);
	}

	formatDate(date: any) {
		return new Date(date * 1000);
	}

}
