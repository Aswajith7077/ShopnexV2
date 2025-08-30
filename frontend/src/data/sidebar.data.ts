import { SidebarDataType } from '@/types/sidebar.type';
import { HiShoppingCart } from 'react-icons/hi';
import { MdPayments } from 'react-icons/md';
import { RiShip2Fill } from 'react-icons/ri';
import { SiSinglestore } from 'react-icons/si';
import { MdSpaceDashboard } from 'react-icons/md';

const sidebar_data: SidebarDataType = {
  sidebar_profile: {
    fullname: 'Aswajith S',
    username: 'voicedaswa',
  },
  sidebar_dashboard: {
    title: 'Dashboard',
    url: 'dashboard',
    icon: MdSpaceDashboard,
  },
  sidebar_category: {
    title: 'Category',
    items: [
      {
        title: 'Productivity',
        url: '',
      },
      {
        title: 'Women',
        url: '',
      },
      {
        title: 'Luxury',
        url: '',
      },
      {
        title: 'Men',
        url: '',
      },
    ],
  },
  sidebar_utilities: [
    {
      title: 'Connections',
      url: 'cart',
      icon: HiShoppingCart,
    },
    {
      title: 'On Progress',
      url: 'shipping',
      icon: RiShip2Fill,
    },
    {
      title: 'Payment History',
      url: 'payment_history',
      icon: MdPayments,
    },
    {
      title: 'Zevrium',
      url: 'nex_store',
      icon: SiSinglestore,
    },
  ],
};

export { sidebar_data };
