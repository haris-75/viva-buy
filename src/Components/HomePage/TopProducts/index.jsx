import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import { navigateToPage } from '../../../utils/navigation';
import { H2 } from '../../../Common/Typography';

export function TopProducts(props) {
  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)'
  });

  return (
    <div className="mt-5 md:mt-20">
      <div className="mb-[10px] md:mb-5">
        <H2>
          <span className="font-extrabold">Top products </span>
          <span className="font-sans font-light text-black">- best sellers on the marketplace</span>
        </H2>
      </div>
      <div className="flex flex-col flex-wrap sm:flex-row">
        <ProductPair index={0} />
        <ProductPair index={1} />
        <ProductPair index={2} />
        {isMobile ? null : <ProductPair index={3} />}
      </div>
    </div>
  );
}

const ProductPair = (props) => {
  const router = useRouter();
  return (
    <div
      className={`relative flex cursor-pointer flex-row  sm:w-1/3 lg:w-1/4 ${
        props.index % 2 == 0 ? 'sm:flex-col-reverse' : 'sm:flex-col'
      }`}
    >
      {[1, 2].map((ele) => (
        <div
          onClick={() => navigateToPage(router, 'product')}
          key={ele}
          className={`relative h-[145px] w-full max-w-[306px] p-[5px]  lg:p-[10px] ${
            ele % 2 === 0 ? 'sm:h-[180px] lg:h-[220px]' : 'sm:h-[280px] lg:h-[300px]'
          }`}
        >
          <div className="h-full w-full rounded-[5px] bg-gray transition-all hover:shadow-shadow2 md:rounded-[5px]"></div>
          <div className="absolute top-[15px] right-[15px] rounded-[50px] border-[1px] border-solid border-black bg-white py-[2px] px-[15px] text-[10px] md:text-xs">
            10,000 Ks
          </div>
        </div>
      ))}

      {/* price annotation */}
    </div>
  );
};

export default TopProducts;
