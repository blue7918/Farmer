export interface IndexPageProps {
  banner: IBanner[];
  category: ICategory[];
  bestPlant: IPlant[];
  bestReview: IReview[];
  news: INews;
}

export interface IBanner {
  id: number;
  name: string;
  linkUrl: string;
  imgUrl: string;
}

export interface INews {
  subject: string;
  content: string;
  imgUrl: string;
}

export interface IPlant {
  productId?: number;
  ranking?: number;
  productName: string;
  discountRate: number;
  price: number;
  averageStarRating: number;
  reviewCount?: number;
}

export interface IReview {
  memberNickName: string;
  imgUrl: string;
  content: string;
  likeCount: number;
  fiveStarRating: number;
}

export interface ICategory {
  categoryId: number;
  categoryName: string;
  imgUrl: string;
}

export interface IBtnProps {
  content: string;
  color?: string;
}

export interface ITitleProps {
  title: string;
  color?: string;
}

export interface IconProps {
  src: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}
