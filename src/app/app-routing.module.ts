import { DetailComponent } from './cosmetic/detail/detail.component';
import { ListComponent } from './cosmetic/list/list.component';
import { SiteMap } from './common/config/site-map';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

const routConfig: Routes = [

    // { path: SiteMap.Home, component: HomeComponent },
    { path: SiteMap.Shop, component: ListComponent },
    { path: SiteMap.Detail, component: DetailComponent },
    // { path: SiteMap.Blogs, component: BlogsComponent },
    // { path: SiteMap.BlogDetail, component: BlogDetailComponent },
    // { path: SiteMap.Login, component: LoginComponent },
    // { path: SiteMap.Register, component: RegisterComponent },
    // { path: SiteMap.Contact, component: ContactComponent },
    // { path: SiteMap.About, component: AboutComponent },
    // { path: SiteMap.Cart, component: CartComponent },
    // { path: SiteMap.Checkout, component: CheckoutComponent },
    // { path: SiteMap.Favorite, component: FavoriteComponent },
    { path: '', redirectTo: SiteMap.Shop, pathMatch: 'full' },
    { path: '**', redirectTo: SiteMap.Shop, pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        NgxPaginationModule,
        RouterModule.forRoot(routConfig),
        FormsModule, ReactiveFormsModule,
        NgxSpinnerModule
    ],
    declarations: [
        ListComponent,
        DetailComponent
    ],
    exports: [RouterModule]
})
export class AppRouterModule { }
