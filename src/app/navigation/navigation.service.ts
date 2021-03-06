import { Injectable } from '@angular/core';
import { INav } from './navigation.models';

/**
 * Service defining nested navigation menus that are injected into the sidenav and toolbar
 * where they are displayed in a dropdown-nested manner
 */
@Injectable({
  providedIn: 'root'
})
export class NavService {
  readonly navLinks: INav[] = [
    {
      label: 'Search',
      link: 'search',
      icon: 'search',
      isExpanded: false
    },

    {
      label: 'About',
      icon: 'info',
      isExpanded: false,
      // link: 'about',
      children: [
        {
          label: 'Background',
          link: 'about',
          isFA: true,
          icon: 'landmark'
        },
        {
          label: 'Documentation',
          // link: 'documentation' ,
          isFA: true,
          icon: 'book',
          children: [
            {
              label: 'Background',
              link: 'background',
              isFA: true,
              icon: 'landmark'
            },
            {
              label: 'Documentation',
              link: 'docs',
              isFA: true,
              icon: 'book'
            },
            {
              label: 'Contact',
              link: 'contact',
              icon: 'mail',
              isExpanded: false
            }
          ]
        },
        {
          label: 'Contact',
          link: 'contact',
          icon: 'mail',
          isExpanded: false
        }
      ]
    },
    {
      label: 'Contact',
      link: 'contact',
      icon: 'mail',
      isExpanded: false
    }
  ];

  constructor() {}

  getNavLinks() {
    return [...this.navLinks];
  }
}
