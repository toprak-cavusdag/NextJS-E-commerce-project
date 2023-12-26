'use client';

import PageContainer from '../containers/PageContainer';

const DetailClient = ({ product }: any) => {
  return (
    <div>
      <PageContainer>{product?.name}</PageContainer>
    </div>
  );
};

export default DetailClient;
