import { Icons } from '@/components/icons/icons';
import type { LinkItemType } from 'fumadocs-ui/layouts/links';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const title = 'Folio';
export const description =
  'Automate your workflows with AI. Connect your favorite tools, build intelligent automations, and let AI handle the repetitive work.';
export const owner = 'Folio';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title,
  },
  githubUrl: 'https://github.com/ruixenui/ruixen.com',
};

export const linkItems: LinkItemType[] = [
  {
    text: 'Features',
    url: '/#features',
    active: 'url',
  },
  {
    text: 'Testimonials',
    url: '/#testimonials',
    active: 'url',
  },
  {
    text: 'FAQ',
    url: '/#faq',
    active: 'url',
  },
  {
    icon: <Icons.phone />,
    text: 'Contact',
    url: '/contact',
    active: 'url',
  },
];

export const postsPerPage = 5;
