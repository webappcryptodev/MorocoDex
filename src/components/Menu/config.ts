import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://54.213.239.106:43677/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://54.213.239.106:37965/farms',
  },
  {
    label: 'Banks',
    icon: 'PoolIcon',
    href: 'http://54.213.239.106:37965/pools',
  },
  {
    label: 'Roulette',
    icon: 'TicketIcon',
    href: 'http://54.213.239.106:43677/freeroutlet',
  },
  // {
  //   label: 'NFTs (soon)',
  //   icon: 'NftIcon',
  //   href: '',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://pancakeswap.finance/ifo',
  // },

  // {
  //   label: 'Smart Contract Audit',
  //   icon: 'TicketIcon',
  //   href: 'https://github.com/solidproof/smart-contract-audits/blob/main/SmartContract_Audit_Solidproof_ZONOSwap.pdf',
  // },
    {
    label: 'Evangelism',
    icon: 'IfoIcon',
    href: 'http://54.213.239.106:43677/evanglism',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [

      {
        label: 'Github',
        href: '',
      },
      {
        label: 'Docs',
        href: '',
      },
      {
        label: 'Blog',
        href: '',
      },
    ],
  },
]

export default config
