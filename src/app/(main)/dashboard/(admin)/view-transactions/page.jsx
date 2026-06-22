import { getSubcriptions } from "@/api/serverMutation";
import { lazy } from "@/lib/lazy";

const Transactions=lazy(()=>import("@/DashboardComponents/Admin/Transactions/Transactions")) ;

const ViewTransactionsPage = async() => {
  const transactionsData=await getSubcriptions()

  return (
    <div>
    <Transactions transactionsData={transactionsData}/>
    </div>
  );
};

export default ViewTransactionsPage;