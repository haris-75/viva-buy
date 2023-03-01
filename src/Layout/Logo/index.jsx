import { useRouter } from 'next/router';
import React from 'react';
import { navigateToPage } from '../../utils/navigation';

export default function Logo(props) {
  const route = useRouter();
  return (
    <img
      className="cursor-pointer"
      src="/assets/logo.svg"
      onClick={() => navigateToPage(route, '/')}
    />
  );
}
