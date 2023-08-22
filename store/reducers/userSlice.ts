import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from 'src/types/redux/types';

const initialState: UserState = {
  socialId: '', // 소셜로그인 유저만
  email: '',
  nickname: '',
  point: 0,
  grade: '',
  role: '',
  cumulativeAmount: 0,
  memberCoupon: 0,
  accessToken: '',
  refreshToken: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setUserNickname: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        nickname: action.payload,
      };
    },
    clearUser: state => {
      return initialState;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        accessToken: action.payload,
      };
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        refreshToken: action.payload,
      };
    },
  },
});

export const { setUser, setUserNickname, clearUser } = userSlice.actions;
export default userSlice;
