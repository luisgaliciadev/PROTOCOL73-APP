import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/layout/layout.module').then( m => m.LayoutModule),
        canLoad: []
    },
    {
        path: 'login',
        loadChildren: () => import('./authentication/login/login.module').then( m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./authentication/register/register.module').then( m => m.RegisterModule)
    },
    {
        path: '**',
        loadChildren: () => import('./authentication/pagenotfound/pagenotfound.module').then( m => m.PagenotfoundModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes, { useHash: true, relativeLinkResolution: 'legacy' } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}