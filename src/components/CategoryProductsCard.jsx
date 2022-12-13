import React from "react";

{
  /* category product card */
}
export default function FeaturedProductCard(props) {
  return (
    <div className="flex w-1/2 flex-col flex-nowrap rounded-[5px] p-[5px] sm:w-1/3 lg:rounded-[20px] lg:p-[10px]">
      <div className="rounded-[5px] border-[0.2px] border-black p-2 pb-0 lg:rounded-[20px] lg:p-5 lg:pb-0">
        <div className="grid grid-cols-2 grid-rows-2 gap-1">
          <div className="rounde-l-5 grow overflow-hidden rounded-tl-[5px] bg-gray lg:rounded-tl-[20px]">
            <img
              src="https://i.etsystatic.com/10907262/c/705/560/14/124/il/35c6bc/1504156133/il_340x270.1504156133_pdtu.jpg"
              className=""
            />
          </div>
          <div className="rounde-l-5 grow overflow-hidden rounded-tr-[5px] bg-gray lg:rounded-tr-[20px]">
            <img src="https://i.etsystatic.com/10907262/c/705/560/14/124/il/35c6bc/1504156133/il_340x270.1504156133_pdtu.jpg" />
          </div>
          <div className="rounde-l-5 grow overflow-hidden rounded-bl-[5px] bg-gray lg:rounded-bl-[20px]">
            <img src="https://i.etsystatic.com/10907262/c/705/560/14/124/il/35c6bc/1504156133/il_340x270.1504156133_pdtu.jpg" />
          </div>
          <div className="rounde-l-5 grow overflow-hidden rounded-br-[5px] bg-gray lg:rounded-br-[20px]">
            <img src="https://i.etsystatic.com/10907262/c/705/560/14/124/il/35c6bc/1504156133/il_340x270.1504156133_pdtu.jpg" />
          </div>
        </div>
        <div className="flex items-center justify-center py-[5px] lg:py-[15px] xl:py-[25px]">
          <p className="text-center font-sans text-sm font-bold leading-7 text-black sm:text-lg lg:text-2xl xl:text-3xl">
            Shop name
          </p>
        </div>
      </div>
    </div>
  );
}
