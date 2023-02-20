import React from 'react';

export function InputField(props) {
  return (
    <div className="relative">
      <input
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder ? props.placeholder : ''}
        onChange={props.onChange}
        value={props.value}
        className="w-full rounded-[5px] border-[1px] border-solid border-black bg-white py-[4px] px-3 font-sans text-sm font-[400] leading-6 text-black outline-none  sm:font-light sm:leading-6"
      />
    </div>
  );
}

export function InputLabel(props) {
  return (
    <p className="mb-1">
      <label className={`font-sans text-sm leading-6 text-black`}>{props.children}</label>
    </p>
  );
}

export function InputCheckbox({ label, name, value, checked, onClick, onChange }) {
  return (
    <div className="relative flex h-[20px] items-center pl-[55px]">
      <input
        type="checkbox"
        className="absolute top-0 left-0 z-[1] h-full w-full cursor-pointer appearance-none bg-none opacity-0 outline-none"
        name={name ? name : ''}
        value={value ? value : ''}
        checked={checked ? checked : false}
        onChange={onChange}
        onClick={onClick}
      />
      <label
        htmlFor=""
        className={`border-color absolute top-0 left-0 h-[20px] w-[20px] border-[1px] border-solid bg-transparent transition-all duration-200 ease-in-out before:absolute sm:h-[20px] sm:w-[20px] ${
          checked ? 'before:visible before:opacity-[1] ' : 'before:hidden before:opacity-0 '
        } before:absolute before:-top-[1px] before:left-[5px] before:h-[16px] before:w-2 before:rotate-45 before:border-b-2 before:border-r-2 before:border-b-black  before:border-r-black before:bg-transparent before:transition-all before:duration-200 before:ease-in-out before:content-[""] sm:before:h-4 sm:before:w-2`}
      ></label>
      <span className="font-sans text-base leading-6 text-black sm:text-xl">{label}</span>
    </div>
  );
}

export function InputRadio({ label, name, value, checked, onClick }) {
  return (
    <div className="relative mb-3 flex h-[35px] items-center pl-[55px] sm:mb-4">
      <input
        type="radio"
        name={name ? name : ''}
        value={value ? value : ''}
        checked={checked ? checked : false}
        onClick={onClick}
        className="absolute top-0 left-0 z-[1] h-full w-full cursor-pointer appearance-none bg-none opacity-0 outline-none"
      />

      <label
        htmlFor=""
        className={`border-color absolute top-0 left-0 h-[40px] w-[40px] rounded-full border-[1px] border-solid bg-secondary transition-all duration-200 ease-in-out before:absolute before:top-1/2 before:left-1/2 before:h-[23px] before:w-[23px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-black before:transition-all before:duration-200 before:ease-in-out before:content-[""] sm:h-[35px] sm:w-[35px] ${
          checked ? 'before:visible before:opacity-[1]' : 'before:hidden before:opacity-0'
        }`}
      ></label>
      <span className="font-sans text-base leading-6 text-black sm:text-xl">{label}</span>
    </div>
  );
}

export function InputDropDown({ show, toggleDropDown, labelText, id }) {
  return (
    <>
      <label>{labelText}</label>
      <div
        className="w-full cursor-pointer bg-white text-black border border-black flex  justify-between	p-2.5 rounded-md font-medium "
        onClick={toggleDropDown}
      >
        <span>Select a variant</span>
        <img src="/assets/dropdown.svg" />
      </div>

      <div
        className={`${
          show ? '' : 'hidden'
        } z-10 bg-white border border-black  rounded-md shadow w-full `}
      >
        <ul className="p-2.5">
          {[1, 2, 3, 4].map((ele) => (
            <li key={ele + id} className="my-2.5 px-2.5   rounded-md hover:bg-gray">
              <span>Variant {ele}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
