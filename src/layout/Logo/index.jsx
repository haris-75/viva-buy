import { useRouter } from 'next/router';
import React from 'react';
import { navigateToPage } from '../../utils/navigation';

export default function Logo(props) {
  const router = useRouter();
  return (
    <p
      onClick={() => navigateToPage(router, '/')}
      className="h-max font-sans text-sm font-bold text-black lg:text-2xl  cursor-pointer"
    >
      LOGO
    </p>
  );
}
