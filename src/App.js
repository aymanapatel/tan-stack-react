import "./styles.css";
import { ReactLocation, Router } from "react-location";
import Home from "./components/Home";
import ReactTable from "./components/ReactTable";
const reactLocation = new ReactLocation();
export default function App() {
  return (
    <Router
      location={reactLocation}
      routes={[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/tanstack-table",
          element: <ReactTable />
        }
      ]}
    />
  );
}
