import { Dispatch, SetStateAction } from 'react';
import { ISortOption } from 'src/types/search/types';
import { RootState } from 'store';

export const idSelector = (state: RootState) => state.productId;
export const categprySelector = (state: RootState) => state.categoryId;
export const userToken = (state: RootState) => state.user.email;

export interface ProductAPI {
  productId: number;
  imgUrl: string;
  productName: string;
  discountRate: number;
  price: number;
  averageStarRating: number;
  reviewCount?: number;
}

export interface ReviewAPI {
  memberNickname: string;
  fiveStarRating: number;
  createdDate: string;
  productName: string;
  optionName: string;
  imgUrl: string;
  likeCount: number;
  content: string;
}

export interface OptionBarProps {
  optionList: ISortOption[];
  width?: string;
  setProductOption?: Dispatch<SetStateAction<string>>;
  productOption?: string;
}


export interface categoryReduxType {
  name: string;
  id: number;
}

export interface ProductListProps {
  id?: number;
  categoryId?: number;
  categoryName?: string;
  name?: string;
  stockQuantity?: number;
  price?: number;
  sellQuantity?: number;
  discountRate?: number;
  options?: string[];
  thumbnailImg?: string;
  size?: string;
  description?: string;
  detailImg1?: string;
  detailImg2?: string;
  detailImg3?: string;
  detailImg4?: string;
  detailImg5?: string;
}

export interface StarOptionProps {
  setPopStarOption: React.Dispatch<React.SetStateAction<boolean>>;
  popStarOption: boolean;
  setStarOption: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface SingleReviewProps {
  content: string;
  createdDate: string;
  fiveStarRating: number;
  imgUrl: string;
  likeCount: number;
  memberNickname: string;
  optionName: string;
  productName: string;
  reviewId: number;
}

export type secretQuestion = 'GENERAL' | 'SECRET';

export interface QnAProps {
  qnaId: number;
  memberName: string;
  productName: string;
  subject: string;
  content: string;
  answer: boolean;
  secretQuestion: secretQuestion;
  qcreatedDate: string;
}

//modal
export interface DetailQnAProps {
  qnaId: number;
  subject: string;
  detailClose: () => void;
  setDetailOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  content: string;
  answer: string | null;
  qcreatedDate: string;
  acreatedDate: string;
}

export interface QnAModalProps {
  modalName: string;
  reviewItem?: string[];
  modalClose: () => void;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

//common
export interface ProductWrapperProps {
  productList: ProductListProps[];
  setProductOption: React.Dispatch<React.SetStateAction<string>>;
  productOption: string;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  totalIndex: number;
  isExceptional?: boolean;
  pageElements: number;
}

export interface PaginationProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  totalIndex: number;
  isExceptional?: boolean;
}

export interface OptionBoxProps {
  isPanel?: boolean;
  selectList: selectListProps[];
  setSelectList: React.Dispatch<React.SetStateAction<selectListProps[]>>;
}

export interface selectOptionProps {
  id: number;
  optionName: string;
  optionPrice: number;
}

export interface selectListProps {
  id: number;
  optionName: string;
  optionPrice: number;
}

export interface OnOffProps {
  myButton: boolean;
  setMyButton: React.Dispatch<React.SetStateAction<boolean>>;
}