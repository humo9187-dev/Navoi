export interface MenuItem {
  name: string;
  href?: string;
  subItems?: MenuItem[];
}

export interface NavigationMenu {
  items: MenuItem[];
  isRoot?: boolean;
}
