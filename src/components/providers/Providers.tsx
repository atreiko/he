'use client';

import { ReduxProvider } from '@/store/redux.provider';
// import AuthProvider from '@/context/auth.provider';
// import { ToastContainer } from 'react-toastify';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <AuthProvider>
      <ReduxProvider>
        {children}
      </ReduxProvider>
    // </AuthProvider>
  );
}

export default Providers;

{
  /* <ToastContainer
        position='bottom-center'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      /> */
}
