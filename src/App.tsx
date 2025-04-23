import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-main text-primary min-h-screen overflow-x-auto">
      <Outlet />
    </div>
  );
}

export default App;
