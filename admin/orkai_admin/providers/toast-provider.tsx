"user client";

import { Toaster } from "react-hot-toast";

export const ToasterProvider = () => {
  return <Toaster
  toastOptions={{
    success: {
      iconTheme: {
        primary: 'black',
        secondary: 'yellow',
      },
    },
  }}
/>
};
