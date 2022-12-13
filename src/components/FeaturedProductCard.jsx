import React from "react";
{
  /* featured product card */
}
export default function FeaturedProductCard(props) {
  return (
    <div className="flex w-1/2 flex-col flex-nowrap rounded-[5px] p-[5px] lg:w-1/3 lg:rounded-[20px] lg:p-[10px] xl:w-1/4">
      <div className="rounded-[5px] lg:rounded-[20px]">
        <div className="overflow-hidden rounded-[5px] bg-gray lg:rounded-[20px]">
          <img
            src="https://i.etsystatic.com/10907262/c/705/560/14/124/il/35c6bc/1504156133/il_340x270.1504156133_pdtu.jpg"
            className="w-full "
          />
        </div>
        <div className="mt-[5px]">
          <p className="font-sans  text-sm leading-5 text-black line-clamp-1 md:text-xl md:leading-7 lg:text-2xl">
            Product name lorem ipsum dolor sit amet
          </p>
        </div>
        <div>
          <p className="font-sans text-sm font-bold leading-5 text-black md:text-xl md:leading-7 lg:text-2xl">
            10,000 K
          </p>
        </div>
        <div>
          <p className="font-sans text-sm leading-5 text-black md:leading-7 lg:text-xl">
            Shop name
          </p>
        </div>
      </div>
    </div>
  );
}
