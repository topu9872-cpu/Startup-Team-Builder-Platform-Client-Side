import Sidebar from "@/DashboardComponents/SideBar/SideBar";

const DashboardLayoutPage = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main className="ml-65 p-6">
        <div className="max-w-7xl h-screen mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayoutPage;
