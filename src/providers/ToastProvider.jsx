import { Toaster } from 'react-hot-toast';

const ToastProvider = ({ children }) => {
  return (
    <>
      <Toaster
        position="b-center"
        reverseOrder={false}
        containerStyle={{
          bottom: 600,
        }}
        toastOptions={{
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#0D111C',
              secondary: '#F8FAFC',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: 'red',
              secondary: '#0D111C',
            },
          },
          style: {
            backgroundImage: 'linear-gradient(to right, #735CDD, #00A7E1)',
            color: 'white',
            fontSize: '1.3rem',
            lineHeight: '1.8rem',
            minWidth: '2.5rem',
            gap: '10px',
            borderRadius: '1rem',
          },
        }}
      />
      {children}
    </>
  );
};

export default ToastProvider;
