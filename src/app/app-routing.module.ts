import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'add-blog',
    loadChildren: () =>
      import('./add-blog/add-blog.module').then((m) => m.AddBlogPageModule),
  },
  {
    path: 'addblog',
    loadChildren: () =>
      import('./addblog/addblog.module').then((m) => m.AddblogPageModule),
  },
  {
    path: 'viewblog',
    loadChildren: () =>
      import('./viewblog/viewblog.module').then((m) => m.ViewblogPageModule),
  },
  {
    path: 'reportblog',
    loadChildren: () =>
      import('./reportblog/reportblog.module').then(
        (m) => m.ReportblogPageModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminPageModule),
  },
  {
    path: 'aboutus',
    loadChildren: () =>
      import('./aboutus/aboutus.module').then((m) => m.AboutusPageModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then(
        (m) => m.CategoriesPageModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'viewusers',
    loadChildren: () =>
      import('./viewusers/viewusers.module').then((m) => m.ViewusersPageModule),
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('./blogs/blogs.module').then((m) => m.BlogsPageModule),
  },
  {
    path: 'myprofile',
    loadChildren: () =>
      import('./myprofile/myprofile.module').then((m) => m.MyprofilePageModule),
  },
  {
    path: 'reportlist',
    loadChildren: () =>
      import('./reportlist/reportlist.module').then(
        (m) => m.ReportlistPageModule
      ),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomePageModule),
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./editblog/editblog.module').then((m) => m.EditblogPageModule),
  },
  {
    path: 'allblogs',
    loadChildren: () =>
      import('./allblogs/allblogs.module').then((m) => m.AllblogsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
