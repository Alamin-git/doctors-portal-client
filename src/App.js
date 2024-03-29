// import './App.css';

import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes/Routes";

function App() {
   return (
      <div className='max-w-[1440] mx-auto'>
         <RouterProvider router={router}></RouterProvider>
         <Toaster/>
      </div>
   );
}

export default App;
