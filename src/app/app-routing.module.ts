import { DetailComponent } from './product/detail/detail.component';
import { ListComponent } from './product/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routConfig: Routes = [
    
    { path: 'product/list', component: ListComponent },
    { path: 'product/detail/:id', component: DetailComponent },
    { path: '', redirectTo: 'product/list', pathMatch: 'full' },
    { path: '**', redirectTo: 'product/list', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        
        RouterModule.forRoot(routConfig),
        FormsModule, ReactiveFormsModule
    ],
    declarations: [
        ListComponent,
        DetailComponent
    ],
    exports: [RouterModule]
})
export class AppRouterModule { }
