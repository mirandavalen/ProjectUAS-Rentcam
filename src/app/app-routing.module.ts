import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'book-edit/:id',
    loadChildren: () => import('./book-edit/book-edit.module').then( m => m.BookEditPageModule)
  },
  {
    path: 'book-detail/:id',
    loadChildren: () => import('./book-detail/book-detail.module').then( m => m.BookDetailPageModule)
  },
  {
    path: 'mhs',
    loadChildren: () => import('./mhs/mhs.module').then( m => m.MhsPageModule)
  },
  {
    path: 'canon',
    loadChildren: () => import('./canon/canon.module').then( m => m.CanonPageModule)
  },
  {
    path: 'canon6000d',
    loadChildren: () => import('./canon6000d/canon6000d.module').then( m => m.Canon6000dPageModule)
  },
  {
    path: 'sonya7',
    loadChildren: () => import('./sonya7/sonya7.module').then( m => m.Sonya7PageModule)
  },
  {
    path: 'nikond850',
    loadChildren: () => import('./nikond850/nikond850.module').then( m => m.Nikond850PageModule)
  },
  {
    path: 'sony-details',
    loadChildren: () => import('./sony-details/sony-details.module').then( m => m.SonyDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
