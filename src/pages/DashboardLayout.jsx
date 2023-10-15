import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="">
      <nav>dasboard nav</nav>
      <Outlet />
    </div>
  );
};
export default DashboardLayout;
