import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { ToastComponent } from './toast/toast.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { TabsComponent } from './tabs/tabs.component';

import { PaginationComponent } from './pagination/pagination.component';
import { AmapComponent } from './amap/amap.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MarkdownComponent } from './markdown/markdown.component';


const routers: Routes = [
  {
    path: 'materials',
    component: AdminComponent,
    children: [
      {
        path: 'toast',
        component: ToastComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'tooltips',
        component: TooltipsComponent
      },
      {
        path: 'dialogs',
        component: DialogsComponent
      },
      {
        path: 'lists',
        component: ListsComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'slider',
        component: SliderComponent
      },
      {
        path: 'tabs',
        component: TabsComponent
      },
      {
        path: 'pagination',
        component: PaginationComponent
      },
      {
        path: 'amap',
        component: AmapComponent
      },
      {
        path: 'datepicker',
        component: DatePickerComponent
      },
      {
        path: 'markdown',
        component: MarkdownComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routers, {useHash: true})],
  exports: [RouterModule],
  providers: []
})

export class RoutingModule {
}
