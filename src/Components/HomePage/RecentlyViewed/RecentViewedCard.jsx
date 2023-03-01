import { useRouter } from 'next/router';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { navigateToPage } from '../../../utils/navigation';
import { HeartOutlinedIcon } from '../../Svg';

{
  /* Recent view card  */
}
export default function RecentViewedCard(props) {
  const route = useRouter();
  const isMobile = useMediaQuery({
    query: '(max-width: 530px)'
  });
  return (
    <div
      onClick={() => navigateToPage(route, 'shop')}
      className="flex w-[35%] flex-col flex-nowrap rounded-[5px] p-[5px] transition-all hover:shadow-shadow1 lg:w-1/5 lg:rounded-[5px] lg:p-[10px] xl:w-1/6"
    >
      <div className="cursor-pointer rounded-[5px] lg:rounded-[5px] relative group/item">
        <div className="absolute border-2 rounded-full xs-m:p-1 py-[2px] px-[4px] bg-white  xs-m:right-2.5 xs-m:top-2.5 right-[2px] top-[2px] hover:shadow-shadow1 hover:border-white group-hover/item:block hidden">
          <HeartOutlinedIcon
            width={isMobile ? '15' : '20'}
            className="fill-black hover:fill-[#FF0000] xs-m:w-auto  w-[15px]"
          />
        </div>
        <div className="overflow-hidden rounded-[5px] bg-gray lg:rounded-[5px]">
          <img
            src="https://i.etsystatic.com/10907262/c/705/560/14/124/il/35c6bc/1504156133/il_340x270.1504156133_pdtu.jpg"
            className="w-full "
          />
        </div>
        <div className="mt-[5px]">
          <p className="overflow-hidden  font-sans text-sm leading-5 text-black line-clamp-1 md:text-base md:leading-4">
            Product name lorem ipsum dolor sit amet
          </p>
        </div>

        <div className="mt-[5px]">
          <p className="font-sans text-sm font-bold leading-5 text-black md:text-base md:leading-4">
            10,000 K
          </p>
        </div>
        <div>
          <p className="font-sans text-sm leading-5 text-black md:text-sm md:leading-7">
            Shop name
          </p>
        </div>
      </div>
    </div>
  );
}
