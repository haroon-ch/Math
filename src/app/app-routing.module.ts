import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'test2',
    loadChildren: () => import('./test2/test2.module').then( m => m.Test2PageModule)
  },
  {
    path: 'get',
    loadChildren: () => import('./get/get.module').then( m => m.GetPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'pdf',
    loadChildren: () => import('./pdf/pdf.module').then( m => m.PdfPageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./share/share.module').then( m => m.SharePageModule)
  },
  {
    path: 'clipboard',
    loadChildren: () => import('./clipboard/clipboard.module').then( m => m.ClipboardPageModule)
  },
  {
    path: 'printer',
    loadChildren: () => import('./printer/printer.module').then( m => m.PrinterPageModule)
  },
  {
    path: 'swiper',
    loadChildren: () => import('./swiper/swiper.module').then( m => m.SwiperPageModule)
  },
  {
    path: 'image-picker',
    loadChildren: () => import('./image-picker/image-picker.module').then( m => m.ImagePickerPageModule)
  },  {
    path: 'min-max',
    loadChildren: () => import('./min-max/min-max.module').then( m => m.MinMaxPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
