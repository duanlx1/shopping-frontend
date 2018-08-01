import { DetailComponent } from './cosmetic/detail/detail.component';
import { ListComponent } from './cosmetic/list/list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routConfig: Routes = [
    { path: 'cosmetic/list', component: ListComponent },
    { path: 'cosmetic/detail', component: DetailComponent },
    { path: '', redirectTo: 'cosmetic/list', pathMatch: 'full' },
    { path: '**', redirectTo: 'cosmetic/list', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routConfig)],
    declarations: [
        ListComponent,
        DetailComponent
    ],
    exports: [RouterModule]
})

export class AppRouterModule { }
