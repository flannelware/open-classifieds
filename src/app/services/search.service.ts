import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cacheable } from 'ngx-cacheable';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class SearchService {

	constructor(private http: HttpClient) { }

	@Cacheable()
	search(searchQuery: string): Observable<any> {
		return this.http.get(`${environment.baseApiUrl}/search/${searchQuery}`);
	}
}
