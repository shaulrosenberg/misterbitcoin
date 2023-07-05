import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { StatsComponent } from './views/stats/stats.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { contactResolver } from './resolvers/contact.resolver';
import { SignupPageComponent } from './views/signup-page/signup-page.component';

const routes: Routes = [
    { path: 'contact/:id', component: ContactDetailsComponent },
    { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: contactResolver } },
    { path: 'edit', component: ContactEditComponent },
    { path: 'contact', component: ContactIndexComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'stats', component: StatsComponent },
    { path: '', component: HomePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
