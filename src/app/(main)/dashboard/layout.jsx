import Sidebar from "@/DashboardComponents/SideBar/SideBar";

const DashboardLayoutPage = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main className="ml-80 p-6">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayoutPage;
