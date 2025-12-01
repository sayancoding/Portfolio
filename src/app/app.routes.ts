import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Experience } from './component/experience/experience';
import { Project } from './component/project/project';
import { Contact } from './component/contact/contact';

export const routes: Routes = [
    {
        path:"",
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'experience',
        component: Experience
    },
    {
        path: 'project',
        component: Project
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
