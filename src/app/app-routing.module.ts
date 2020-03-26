import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs/design',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs/user',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'model/:typeId/:typeName',
    loadChildren: () => import('./pages/model/model.module').then(m => m.ModelPageModule)
  },
  {
    path: 'factory/:typeId/:index/:modelName',
    loadChildren: () => import('./pages/factory/factory.module').then(m => m.FactoryPageModule)
  },
  {
    path: 'tabs/draft',
    loadChildren: () => import('./pages/draft/draft.module').then( m => m.DraftPageModule)
  },
  {
    path: 'detail/:modelId',
    loadChildren: () => import('./pages/model-detail/model-detail.module').then( m => m.ModelDetailPageModule)
  },
  {
    path: 'await-task',
    loadChildren: () => import('./pages/await-task/await-task.module').then( m => m.AwaitTaskPageModule)
  },
  {
    path: 'generate-task/:belong/:modelId',
    loadChildren: () => import('./pages/generate-task/generate-task.module').then( m => m.GenerateTaskPageModule)
  },
  {
    path: 'tabs/released-task',
    loadChildren: () => import('./pages/released-task/released-task.module').then( m => m.ReleasedTaskPageModule)
  },
  {
    path: 'tabs/overdue-task',
    loadChildren: () => import('./pages/overdue-task/overdue-task.module').then( m => m.OverdueTaskPageModule)
  },
  {
    path: 'tabs/accepted-task',
    loadChildren: () => import('./pages/accepted-task/accepted-task.module').then( m => m.AcceptedTaskPageModule)
  },
  {
    path: 'task-detail/:taskId',
    loadChildren: () => import('./pages/task-detail/task-detail.module').then( m => m.TaskDetailPageModule)
  },
  {
    path: 'tabs/expired-task',
    loadChildren: () => import('./pages/expired-task/expired-task.module').then( m => m.ExpiredTaskPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'product-info/:pid',
    loadChildren: () => import('./pages/product-info/product-info.module').then( m => m.ProductInfoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
