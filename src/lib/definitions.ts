export type Post = {
  id: string;
  title: string;
  content: string;
  image: string;
  category: Category;
  author: string;
  createdAt: string;
};

export enum Category {
  TECHNOLOGY = 'Technology',
  BUSINESS = 'Business',
  HEALTH = 'Health',
  EDUCATION = 'Education',
  SPORTS = 'Sports',
  FASHION = 'Fashion',
  TRAVEL = 'Travel',
  FOOD = 'Food',
  ENTERTAINMENT = 'Entertainment',
  OTHER = 'Other',
}

export type User = {
  id: string;
  name: string;
  title: string;
  description: string;
  email: string;
  password: string;
  createdAt: string;
};
