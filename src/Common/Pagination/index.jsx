import React from 'react';
import { RoundSvgButton } from '../Buttons';

export default function Pagination() {
  return (
    <div className="flex gap-1 justify-center">
      <RoundSvgButton className="px-[4px]">
        <img src="/assets/dropdown2.svg" width={15} className="rotate-90" />
      </RoundSvgButton>
      {[1, 2, 3].map((ele) => (
        <RoundSvgButton className="px-[8px] text-xs w-[25px]" key={ele}>
          {ele}
        </RoundSvgButton>
      ))}
      <RoundSvgButton className="px-[4px]">
        <img src="/assets/dropdown2.svg" width={15} className="rotate-[270deg]" />
      </RoundSvgButton>
    </div>
  );
}
