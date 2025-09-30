import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes";
import { WishlistProvider } from "./context/WishlistContext";


function App() {
  return (
    <WishlistProvider>
      <RouterProvider router={router} />
    </WishlistProvider>
  );
}

export default App;
