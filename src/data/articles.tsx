interface Article {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Noteworthy technology acquisitions 2021',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: '/images/image-1.jpeg',
    link: '/articles/technology-acquisitions-2021',
  },
  {
    id: 2,
    title: 'The rise of AI and machine learning in 2022',
    description:
      'Artificial intelligence and machine learning are set to revolutionize industries in 2022 and beyond.',
    imageUrl: '/images/image-2.jpeg',
    link: '/articles/ai-machine-learning-2022',
  },
  {
    id: 3,
    title: 'Top 10 web development trends in 2023',
    description:
      'Stay ahead of the curve by exploring the top 10 web development trends that will dominate in 2023.',
    imageUrl: '/images/image-3.jpeg',
    link: '/articles/web-development-trends-2023',
  },
  {
    id: 4,
    title: 'Cybersecurity threats to watch out for in 2024',
    description:
      'As technology advances, so do the methods of cyber attackers. Here are the top cybersecurity threats to watch out for in 2024.',
    imageUrl: '/images/image-4.jpeg',
    link: '/articles/cybersecurity-threats-2024',
  },
  {
    id: 5,
    title: 'The future of remote work: What to expect in 2025',
    description:
      'Remote work is here to stay. Explore what the future holds for work-from-home setups and virtual offices.',
    imageUrl: '/images/image-5.jpeg',
    link: '/articles/future-of-remote-work-2025',
  }
];

export default articles;
