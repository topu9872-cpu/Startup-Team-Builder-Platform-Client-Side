import { lazy } from "@/lib/lazy";

const Sidebar = lazy(() => import("@/DashboardComponents/SideBar/SideBar"));

const DashboardLayoutPage = async ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main className="md:ml-65 mb-100 md:mb-50 p-6 ">
        <div className="max-w-7xl h-screen mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayoutPage;
