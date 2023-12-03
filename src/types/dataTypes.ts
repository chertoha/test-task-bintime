export type Article = {
  author: string;
  urlToImage: string;
  title: string;
  description: string;
  publishedAt: Date;
  url: string;
  source: {
    id: string;
    name: string;
  };
  content: string;
};

export type News = {
  articles: Article[];
  status: string;
  totalResults: number;
};
