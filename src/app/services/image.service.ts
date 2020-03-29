import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ImageService {

	constructor() { }

	getPhotoUrl(imageUrl: string) {
		const formattedImageUrl = `${imageUrl}?filter=marketplace/400x300_cropped`;
		return formattedImageUrl;
	}
}
