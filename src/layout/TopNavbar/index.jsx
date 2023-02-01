import React from "react";

export default function TopNavbar(props) {
  return (
    <div className="relative">
      <div className="pt-[15px]">
        <ul className="flex flex-row justify-between">
          <CategoryLink>Clothing & Shoes</CategoryLink>
          <CategoryLink>Jewellery & Accessories</CategoryLink>
          <CategoryLink>Home & Living</CategoryLink>
          <CategoryLink>Art & Crafts</CategoryLink>
          <CategoryLink>Toys & Entertainment</CategoryLink>
          <CategoryLink>Food & Drink</CategoryLink>
        </ul>
      </div>
    </div>
  );
}

const CategoryLink = (props) => {
  return (
    <li className="group grow border-b-[2px] border-b-[#E8E7E7] py-[15px]">
      <span className="cursor-pointer font-sans text-sm font-medium text-black xl:text-[16px]">
        {props.children}
      </span>
      <DropdownMenu />
    </li>
  );
};

const SubCategoryLink = (props) => {
  return (
    <li className="mt-[10px]">
      <span className="cursor-pointer font-sans text-sm font-medium text-black hover:underline sm:text-[16px]">
        {props.children}
      </span>
    </li>
  );
};

const DropdownMenu = () => {
  return (
    <div className="absolute top-[72px] left-0 z-1 hidden h-max max-h-[600px] w-full rounded-br-[10px] rounded-bl-[10px] bg-white py-[25px] px-[40px] shadow-shadow2 group-hover:block">
      <div className="flex h-full flex-row flex-wrap gap-x-[50px] gap-y-[20px] overflow-auto">
        <div>
          <h3 className="text-[22px] font-bold">Subcategory</h3>
          <ul className="mt-[10px] font-[22px]">
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
          </ul>
        </div>

        <div>
          <h3 className="text-[22px] font-bold">Subcategory</h3>
          <ul className="mt-[10px] font-[22px]">
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
          </ul>
        </div>

        <div>
          <h3 className="text-[22px] font-bold">Subcategory</h3>
          <ul className="mt-[10px] font-[22px]">
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
          </ul>
        </div>

        <div>
          <h3 className="text-[22px] font-bold">Subcategory</h3>
          <ul className="mt-[10px] font-[22px]">
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
          </ul>
        </div>

        <div>
          <h3 className="text-[22px] font-bold">Subcategory</h3>
          <ul className="mt-[10px] font-[22px]">
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
            <SubCategoryLink>Lorem ipsum dolor sit amet</SubCategoryLink>
          </ul>
        </div>
      </div>
    </div>
  );
};
