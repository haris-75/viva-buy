import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import RegisterModal from '../common/Modals/RegisterModal';
import SignInModal from '../common/Modals/SignInModal';

export default function WebApp({ children }) {
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
      <div className="mx-auto box-content max-w-page-mx px-4 md:px-14 ">
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
