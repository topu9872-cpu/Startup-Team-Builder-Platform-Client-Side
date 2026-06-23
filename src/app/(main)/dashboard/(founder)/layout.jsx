import { handleUser } from "@/lib/user";
import { redirect } from "next/navigation";

const FounderLayout = async({children}) => {
     const user = await handleUser();
      if (user?.role !== "founder") {
        redirect("/unauthorized");
      }
  return children
};

export default FounderLayout;