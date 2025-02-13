import { Category, Post } from './definitions';

export const getPosts = () => {
  return posts;
};

export const getRandomPost = () => {
  return posts[Math.floor(Math.random() * posts.length)];
};

export const getPostByID = (id: string) => {
  return posts.find((post) => post.id === id);
};

export const getPostsByCategory = (category: Category) => {
  return posts.filter((post) => post.category === category);
};

export const getPostsByAuthor = (author: string) => {
  return posts.filter((post) => post.author === author);
};

export const getPostsByTitle = (title: string) => {
  return posts.filter((post) => post.title.toLowerCase().includes(title.toLowerCase()));
};

const ranomImage = () => {
  const images = [
    'https://img.lovepik.com/photo/50094/8712.jpg_wh860.jpg',
    'https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_640.jpg',
    'https://img.freepik.com/free-photo/hand-cupping-stethoscope-health-concept_53876-129536.jpg?semt=ais_hybrid',
    'https://st4.depositphotos.com/3367263/19970/i/450/depositphotos_199707812-stock-photo-digital-composite-books-graduation-hat.jpg',
    'https://img.freepik.com/free-photo/business-man-with-laptop-computer-office_23-2147924356.jpg?w=1060&t=st=1690263162~exp=1690263762~hmac=f8c0f0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b0a0b',
  ];
  return images[Math.floor(Math.random() * images.length)];
};

const posts: Post[] = [
  {
    id: '1',
    title: 'The Future of AI',
    content: 'Exploring the advancements in artificial intelligence...',
    image: ranomImage(),
    category: Category.TECHNOLOGY,
    author: 'John Doe',
    createdAt: '2023-01-01',
  },
  {
    id: '2',
    title: 'Starting a Business 101',
    content: 'Tips and tricks for starting your own business...',
    image: ranomImage(),
    category: Category.BUSINESS,
    author: 'Jane Smith',
    createdAt: '2023-01-02',
  },
  {
    id: '3',
    title: 'Healthy Living Tips',
    content: 'How to maintain a healthy lifestyle...',
    image: ranomImage(),
    category: Category.HEALTH,
    author: 'Alice Johnson',
    createdAt: '2023-01-03',
  },
  {
    id: '4',
    title: 'The Importance of Education',
    content: 'Why education is crucial for personal development...',
    image: ranomImage(),
    category: Category.EDUCATION,
    author: 'Bob Brown',
    createdAt: '2023-01-04',
  },
  {
    id: '5',
    title: 'Latest Sports News',
    content: 'Updates on the latest sports events...',
    image: ranomImage(),
    category: Category.SPORTS,
    author: 'Charlie Davis',
    createdAt: '2023-01-05',
  },
  {
    id: '6',
    title: 'Fashion Trends 2023',
    content: 'What’s in and what’s out in fashion...',
    image: ranomImage(),
    category: Category.FASHION,
    author: 'Diana Evans',
    createdAt: '2023-01-06',
  },
  {
    id: '7',
    title: 'Top Travel Destinations',
    content: 'Best places to visit this year...',
    image: ranomImage(),
    category: Category.TRAVEL,
    author: 'Evan Foster',
    createdAt: '2023-01-07',
  },
  {
    id: '8',
    title: 'Delicious Recipes',
    content: 'Try these mouth-watering recipes...',
    image: ranomImage(),
    category: Category.FOOD,
    author: 'Fiona Green',
    createdAt: '2023-01-08',
  },
  {
    id: '9',
    title: 'Entertainment News',
    content: 'Latest updates from the entertainment industry...',
    image: ranomImage(),
    category: Category.ENTERTAINMENT,
    author: 'George Harris',
    createdAt: '2023-01-09',
  },
  {
    id: '10',
    title: 'Miscellaneous Topics',
    content: 'Various interesting topics...',
    image: ranomImage(),
    category: Category.OTHER,
    author: 'Hannah White',
    createdAt: '2023-01-10',
  },
  {
    id: '11',
    title: 'AI in Healthcare',
    content: 'How AI is revolutionizing healthcare...',
    image: ranomImage(),
    category: Category.TECHNOLOGY,
    author: 'Ivy King',
    createdAt: '2023-01-11',
  },
  {
    id: '12',
    title: 'Business Strategies',
    content: 'Effective strategies for business growth...',
    image: ranomImage(),
    category: Category.BUSINESS,
    author: 'Jack Lee',
    createdAt: '2023-01-12',
  },
  {
    id: '13',
    title: 'Mental Health Awareness',
    content: 'Understanding the importance of mental health...',
    image: ranomImage(),
    category: Category.HEALTH,
    author: 'Karen Martinez',
    createdAt: '2023-01-13',
  },
  {
    id: '14',
    title: 'Online Learning',
    content: 'The rise of online education...',
    image: ranomImage(),
    category: Category.EDUCATION,
    author: 'Liam Nelson',
    createdAt: '2023-01-14',
  },
  {
    id: '15',
    title: 'Sports Highlights',
    content: 'Highlights from recent sports events...',
    image: ranomImage(),
    category: Category.SPORTS,
    author: 'Mia Owens',
    createdAt: '2023-01-15',
  },
  {
    id: '16',
    title: 'Sustainable Fashion',
    content: 'The impact of sustainable fashion...',
    image: ranomImage(),
    category: Category.FASHION,
    author: 'Noah Parker',
    createdAt: '2023-01-16',
  },
  {
    id: '17',
    title: 'Adventure Travel',
    content: 'Top destinations for adventure seekers...',
    image: ranomImage(),
    category: Category.TRAVEL,
    author: 'Olivia Quinn',
    createdAt: '2023-01-17',
  },
  {
    id: '18',
    title: 'Healthy Recipes',
    content: 'Delicious and healthy recipes...',
    image: ranomImage(),
    category: Category.FOOD,
    author: 'Paul Roberts',
    createdAt: '2023-01-18',
  },
  {
    id: '19',
    title: 'Movie Reviews',
    content: 'Reviews of the latest movies...',
    image: ranomImage(),
    category: Category.ENTERTAINMENT,
    author: 'Quinn Scott',
    createdAt: '2023-01-19',
  },
  {
    id: '20',
    title: 'Random Thoughts',
    content: 'A collection of random thoughts...',
    image: ranomImage(),
    category: Category.OTHER,
    author: 'Rachel Turner',
    createdAt: '2023-01-20',
  },
];
