import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Breed } from "../models/breed.model";

@Injectable()
export class CatService {
    private _baseUrl = `https://api.thecatapi.com`;

    constructor(
        private _httpClient: HttpClient
    ) { }

    public getBreeds(params: any): Observable<Breed[]> {
        return this._httpClient.get(`${this._baseUrl}/v1/breeds`, { params }).pipe(
            map(
                (response: any) =>  response.map((item: any) => Object.assign(new Breed(), item))
            )
        );
    }

    public getBreedDetail(id: string): Observable<Breed> {
        return this._httpClient.get(`${this._baseUrl}/breeds/${id}`).pipe(
            map(response => Object.assign(new Breed(), response))
        ); 
    }
}