import "./App.css";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider
      theme={{ fontFamily: "Be Vietnam Pro, system-ui, sans-serif" }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
