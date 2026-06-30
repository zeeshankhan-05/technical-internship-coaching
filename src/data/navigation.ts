export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'Program', href: '/program' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Apply', href: '/apply' },
];

export const footerNav: NavItem[] = [
  { label: 'Program', href: '/program' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Apply', href: '/apply' },
  { label: 'Book a Call', href: '/book' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

export const headerCta = {
  label: 'Book a Free Strategy Call',
  href: '/book',
};
