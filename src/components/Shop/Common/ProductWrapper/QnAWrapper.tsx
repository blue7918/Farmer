import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {  getDetailQnA } from 'src/apis/shop/qna';
import VerticalLine from '@components/Shop/Common/VerticalLine';
import DetailQnA from '@components/Common/MiniModal/DetailQnA';
import secret from '@assets/images/shop/secretIcon.svg';

interface Props {
  detailList: any[];
}
const QnAWrapper = (props: Props) => {
  const { detailList } = props;
  const handleNickname = (str: string) => {
    let originStr = str;
    let maskingStr = '';
    let strLength = originStr.length;
    if (strLength < 3) maskingStr = originStr.replace(/(?<=.{1})./gi, '*');
    else maskingStr = originStr.replace(/(?<=.{2})./gi, '*');

    return maskingStr;
  };
  const [qnaId, setQnaId] = useState<number>(0);
  const [subject, setDetailSubject] = useState<string>();
  const [content, setContent] = useState<string>();
  const [answer, setAnswer] = useState<string>();
  const [qcreatedDate, setQcreatedDate] = useState<string>();
  const [acreatedDate, setAcreatedDate] = useState<string>();
  const [isSecret, setIsSecret] = useState<boolean>(false);
  const [detailOpen, setDetailOpen] = useState<boolean>(false);

  const detailClose = () => {
    setDetailOpen(false);
  };
  const handleDetailData = async () => {
    console.log('개별 데이터 호출!!!');
    try {
      const response = await getDetailQnA(qnaId);
      setDetailSubject(response.subject);
      setContent(response.content);
      setAnswer(response.answer);
      setQcreatedDate(response.qcreatedDate);
      setAcreatedDate(response.acreatedDate);
      if (response.qcreatedDate) setIsSecret(false);  
    } catch (err) {
      if (err.response.data.message == '비밀글 입니다') {
        setIsSecret(true);
      }
    }
  };
  useEffect(() => {
    handleDetailData();
  }, [detailOpen, qnaId]);
  return (
    <>
      {detailOpen === true && isSecret != true ? (
          <DetailQnA
            qnaId={qnaId}
            subject={subject}
            detailClose={detailClose}
            setDetailOpen={setDetailOpen}
            content={content}
            answer={answer}
            qcreatedDate={qcreatedDate}
            acreatedDate={acreatedDate}
          />
        ) : null}
      {detailList.map(item => (
        <Styled.Single
          key={item.qnaId}
          onClick={() => {
            setQnaId(item.qnaId);
            setDetailOpen(true);
          }}
        >
          <div>
            <div>구매</div>
            <VerticalLine height={13.5} />
            <div>상품</div>
            <VerticalLine height={13.5} />
            <div>미답변</div>
          </div>
          <div>
            <div>{handleNickname(item.memberName)}</div>
            <VerticalLine height={15} />
            <div>{item.qcreatedDate}</div>
          </div>
          {item.secretQuestion == 'SECRET' ? (
            <Styled.Question>
              <div>Q</div>
              <Styled.SecretIcon />
              <div>비밀글입니다.</div>
            </Styled.Question>
          ) : (
            <Styled.OpenQuestion>
              <div>Q</div>
              <div>
                <Styled.ProductName>{item.productName}</Styled.ProductName>
                <div>{item.subject}</div>
              </div>
            </Styled.OpenQuestion>
          )}
        </Styled.Single>
      ))}
    </>
  );
};

const Styled = {
  Single: styled.div`
    display: flex;
    font-size: 12px;
    font-weight: 500;
    flex-direction: column;
    cursor: pointer;
    & > div {
      display: flex;
      gap: 3px;
    }
  `,
  OpenQuestion: styled.div`
    margin-top: 12px;
    gap: 9px !important;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    align-content: center;
    margin-bottom: 26px;
    & > div {
      height: fit-content;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
    }
    & > div > div {
      display: flex;
      flex-direction: column;
    }
  `,
  Question: styled.div`
    margin-top: 12px;
    gap: 9px !important;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    align-items: center;
    margin-bottom: 26px;
  `,
  SecretIcon: styled(secret)``,
  ProductName: styled.div`
    font-size: 12px;
    margin-top: 5px;
  `,
};
export default QnAWrapper;