import { CiCloudOn } from 'react-icons/ci';
import { LuTreeDeciduous } from 'react-icons/lu';
import { PiBird } from 'react-icons/pi';

export const mockCardData = [
  {
    id: 0,
    title: 'Jetty Golf Day Offset',
    color: '#27a93b',
    volume: [
      {
        volume: 0.025,
        type: {
          slug: 'carbon',
          unit: 'tn',
        },
      },
    ],
    location: 'Busselton Jetty',
    sponsor: 'Busselton Jetty',
    imageUrl:
      'https://carbon-credit-club.s3.ap-southeast-1.amazonaws.com/f0a463a9861fab096c6f969fa24f557b.webp',
    logoUrl:
      'https://carbon-credit-club.s3.ap-southeast-1.amazonaws.com/679761860e258ac475db4c9ac3a1a54c.webp',
    rewards: 2,
  },
  {
    id: 1,
    title: 'Plant a Native Tree: Western Australia',
    color: '#8ec83f',
    volume: [
      {
        volume: 1,
        type: {
          slug: 'tree',
          unit: 'tree',
        },
      },
    ],
    location: 'Decarbonology',
    sponsor: 'Decarbonology',
    imageUrl:
      'https://carbon-credit-club.s3.ap-southeast-1.amazonaws.com/c2b886c8d65bc4e4cad85c5d91ccdf5e.webp',
    logoUrl:
      'https://carbon-credit-club.s3.ap-southeast-1.amazonaws.com/0b6a38dd36fd09751c60970b8ddef337.webp',
    rewards: 0,
  },
  {
    id: 2,
    title: 'Plant a Native Tree: Western Australia',
    color: '#4abbe6',
    volume: [
      {
        volume: 0.025,
        type: {
          slug: 'carbon',
          unit: 'tn',
        },
      },
      {
        volume: 0.1,
        type: {
          slug: 'bird',
          unit: 'birds',
        },
      },
    ],
    location: 'Busselton Jetty',
    sponsor: 'Busselton Jetty',
    imageUrl:
      'https://carbon-credit-club.s3.ap-southeast-1.amazonaws.com/3341f0fdc5fbca318cde5889cb748777.webp',
    logoUrl:
      'https://carbon-credit-club.s3.ap-southeast-1.amazonaws.com/679761860e258ac475db4c9ac3a1a54c.webp',
    rewards: 1,
  },
];

export const mappingSlugToIcon: Record<string, React.ElementType> = {
  carbon: CiCloudOn,
  tree: LuTreeDeciduous,
  bird: PiBird,
};
