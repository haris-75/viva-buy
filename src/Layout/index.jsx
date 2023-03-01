import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import RegisterModal from '../Common/Modals/RegisterModal';
import SignInModal from '../Common/Modals/SignInModal';

export default function Layout({ children }) {
  const [registerModal, setRegisterModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

  const setRegisterModalToggle = () => {
    setSignInModal(false);
    setRegisterModal(true);
  };

  const setSignInModalToggle = () => {
    setRegisterModal(false);
    setSignInModal(true);
  };
  return (
    <div className="w-full ">
      <div className="mx-auto box-content max-w-page-mx px-4 md:px-4 lg:px-14 sm:px-8  xs:px-4">
        <Header setRegisterModal={setRegisterModal} />
        <main>{children}</main>
      </div>

      <Footer />

      {registerModal ? (
        <RegisterModal
          close={() => setRegisterModal(false)}
          setSignInModalToggle={setSignInModalToggle}
        ></RegisterModal>
      ) : null}

      {signInModal ? (
        <SignInModal
          close={() => setSignInModal(false)}
          setRegisterModalToggle={setRegisterModalToggle}
        ></SignInModal>
      ) : null}
    </div>
  );
}
