import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Injector, WritableSignal, effect, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  public count: WritableSignal<number> = signal(0);
  public currentCount = effect(() => {
    console.log(`current: ${this.count()}`);
  });

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _injector: Injector
  ) {}

  ngOnInit(): void {}

  increment(): void {
    this.count.update(count => count + 1);
  }
}
