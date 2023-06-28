import { useEffect, useState } from 'react';
import InnerBody from '@components/Admin/Common/InnerBody';
import AccountInnerBox from './AccountInnerBox';
import SingleTab from '../../Common/InnerBody/Tab/SingleTab';
import SmallButton from '../../Common/FooterButtonWrapper/SmallButton';
import ManageAccount from '@components/Admin/Common/Modal/ManageAccount';
import { accountList, accountData } from 'src/apis/admin/account';

const AccountBody = () => {
  const [modalOpen, setModalOpen] = useState<number>(0);
  const [fieldName, setFieldName] = useState<string>('username');
  const [data, setData] = useState<string>('');
  const openModal = () => {
    setModalOpen(2);
  };
  const closeModal = () => {
    setModalOpen(0);
  };
  const handleAccountList = async () => {
    try {
      const res = await accountList(fieldName);
      const component = res.data.content.map(i => {
        return (
          <AccountInnerBox
            nickname={i.nickname}
            manager={i.grade}
            registerDate={i.id}
            role={i.role}
          ></AccountInnerBox>
        );
      });
      setData(component);
    } catch (error) {
      console.error(error);
    }
  };
  const handleAccountSearch = async () => {
    try {
      const response = await accountData(15);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleAccountList();
    handleAccountSearch();
  }, []);

  return (
    <>
      {modalOpen === 2 ? (
        <ManageAccount id={1} modalClose={closeModal} />
      ) : null}
      <InnerBody
        tabProps={
          <>
            <SingleTab
              name="createdDate"
              text="등록일순"
              fieldName={fieldName}
              setState={setFieldName}
            />
            <SingleTab
              name="username"
              text="이름순"
              fieldName={fieldName}
              setState={setFieldName}
            />
          </>
        }
        innerBoxProps={data}
        footerButtonProps={
          <>
            <SmallButton text="추가" modalOpen={openModal} />
            <SmallButton text="수정" />
          </>
        }
      />
    </>
  );
};

export default AccountBody;
