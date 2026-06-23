import { handleUser } from "@/lib/user";
import { redirect } from "next/navigation";

const CollaboratorLayout = async({children}) => {
     const user = await handleUser();
          if (user?.role !== "collaborator") {
            redirect("/unauthorized");
          }
  return children
};

export default CollaboratorLayout;