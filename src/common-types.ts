export interface Image {
    id: string;
    alt_description: string;
    likes: number;
    urls: {
      regular: string;
      small: string;
    };
    user: {
      name: string;
    };
  }