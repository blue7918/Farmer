import styled from '@emotion/styled';
import theme from '@styles/theme';

interface tabProps {
  fieldState: boolean;
}


const Styled = {
  TabWrapper: styled.div`
    height: 113px;
    width: 100%;
    padding-right: 40px;
    background: #fbfbfb;
    border: 1px solid #ababab;
    border-bottom: none !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  TabContainer: styled.div`
    display: flex;
    height: 100%;
  `,
  TabBox: styled.div<tabProps>`
    width: 200px;
    height: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => (props.fieldState ? `${theme.colors.blue}` : 'black')};
    &:hover {
      border-bottom: 1px solid ${theme.colors.blue};
      color: ${theme.colors.blue};
    }
  `,
};

export default Styled;
