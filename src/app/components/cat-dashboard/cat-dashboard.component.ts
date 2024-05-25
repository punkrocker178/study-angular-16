import { ChangeDetectionStrategy, Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breed } from 'src/app/models/breed.model';
import { CatService } from 'src/app/services/cat.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-cat-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-dashboard.component.html',
  styleUrl: './cat-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatDashboardComponent {
  public breeds: WritableSignal<Breed[]> = signal([]);
  public isLoadMore: WritableSignal<boolean> = signal(false);

  public pagingParams = signal({
    limit: 10,
    page: 0
  })

  public nextPagingParams: Signal<{ limit: number, page: number }> = computed((() => ({
    limit: this.pagingParams().limit,
    page: this.pagingParams().page + 1
  })));

  constructor(
    private _catService: CatService
  ) {
  }

  ngOnInit(): void {
    this._getBreeds(this.pagingParams()).subscribe();

  }

  loadMore(): void {
    this._getBreeds(this.pagingParams()).subscribe();
  }

  private _getBreeds(params: any): Observable<Breed[]> {
    return this._catService.getBreeds(params).pipe(
      tap((response) => {
        if (this.isLoadMore() === false) this.isLoadMore.set(true);

        this.breeds.set([...this.breeds(), ...response]);

        if (response?.length === 0) {
          this.isLoadMore.set(false);
        }

        if (this.nextPagingParams()?.page) {
          this.pagingParams.set({
            page: this.nextPagingParams().page,
            limit: 10
          })
        }

        console.log(this.pagingParams(), this.nextPagingParams());
      }));
  }
}
