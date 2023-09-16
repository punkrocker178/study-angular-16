import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
params = null;
  constructor(private _activeRoute: ActivatedRoute) {
    this._activeRoute.queryParams.subscribe((qp) => {
      this.params = this._activeRoute.snapshot.params['id'] ?? 'No param';
    });
  }
}
