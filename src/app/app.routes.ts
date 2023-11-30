import { Routes } from '@angular/router';

import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [{path: 'blog/post', component: BlogComponent},{path: 'contact', component: ContactComponent}, ];
