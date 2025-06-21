import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Project } from './project/project';
import { About } from './about/about';
import { Contacts } from './contacts/contacts';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'project',
    component: Project,
  },
  {
    path: 'about-me',
    component: About,
  },
  {
    path: 'contacts',
    component: Contacts,
  },
];
