import { DetailComponent } from './cosmetic/detail/detail.component';
import { ListComponent } from './cosmetic/list/list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

const routConfig: Routes = [
    
    { path: 'cosmetic/list', component: ListComponent },
    { path: 'cosmetic/detail/:id', component: DetailComponent },
    { path: '', redirectTo: 'cosmetic/list', pathMatch: 'full' },
    { path: '**', redirectTo: 'cosmetic/list', pathMatch: 'full' }
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
