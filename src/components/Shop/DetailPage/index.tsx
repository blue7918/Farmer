import styled from '@emotion/styled';
import Category from '../Common/Category';
import Panel from './Panel';
import PreviewPhoto from './PreviewPhoto';
import Footer from '@components/Home/Footer';

const DetailPage = () => {
  return (
    <Styled.Wrapper>
      <div>헤더 들어갈 예정</div>
      <Category />
      <Panel />
      <PreviewPhoto />
      <Footer />
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

export default DetailPage;
