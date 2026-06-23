import { handleUser } from "@/lib/user";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }) => {
  const user = await handleUser();
  if (user?.role !== "admin") {
    redirect("/unauthorized");
  }
 
  return children;
};

export default AdminLayout;
