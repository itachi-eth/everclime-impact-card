import { CiCloudOn } from 'react-icons/ci';

export const mockCardData = [
  {
    id: 1,
    title: 'Jetty Golf Day Offset',
    amount: 0.025,
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
    unit: 'tn',
    location: 'Busselton Jetty',
    sponsor: 'Busselton Jetty',
    imageUrl:
      'https://carbon-credit-club.s3.ap-southeast-1.amazonaws.com/f0a463a9861fab096c6f969fa24f557b.webp',
    logoUrl:
      'https://carbon-credit-club.s3.ap-southeast-1.amazonaws.com/679761860e258ac475db4c9ac3a1a54c.webp',
    rewards: 2,
  },
];

export const mappingSlugToIcon: Record<string, React.ElementType> = {
  carbon: CiCloudOn,
};
