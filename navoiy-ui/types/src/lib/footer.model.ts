export interface Contact {
  name: string;
  value: string;
}

export interface CategoryItem {
  name: string;
  href: string;
}

export interface FooterNavigationMenu {
  heading: string;
  href: string;
  categories: CategoryItem[];
}

export interface Footer {
  contacts: Contact[];
  rights: string;
  navigation: FooterNavigationMenu[];
}
