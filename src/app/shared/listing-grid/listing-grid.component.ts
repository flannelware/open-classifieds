import { Component, Input, OnInit } from '@angular/core';
import { Listing } from 'src/app/models/listing';
import { ImageService } from 'src/app/services/image.service';

@Component({
	selector: 'app-listing-grid',
	templateUrl: './listing-grid.component.html',
	styleUrls: ['./listing-grid.component.css']
})
export class ListingGridComponent implements OnInit {

	@Input() listings: Listing[];

	constructor(private imageService: ImageService) { }

	ngOnInit(): void {
	}

	getPhotoUrl(photoUrl: string) {
		return this.imageService.getPhotoUrl(photoUrl);
	}

}
