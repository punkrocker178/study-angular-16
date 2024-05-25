import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { CatService } from './services/cat.service';
import { CatDashboardComponent } from './components/cat-dashboard/cat-dashboard.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { httpRequestInterceptor } from './interceptors/http-request.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        HomeComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        SharedModule,
        CatDashboardComponent,
        CatDetailsComponent
    ],
    providers: [
        provideClientHydration(),
        CatService,
        provideHttpClient(
            withInterceptors([httpRequestInterceptor]),
            withInterceptorsFromDi()
        )
    ]
})
export class AppModule { }
