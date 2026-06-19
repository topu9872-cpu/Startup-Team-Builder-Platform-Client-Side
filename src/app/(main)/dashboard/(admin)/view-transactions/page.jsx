import { lazy } from "@/lib/lazy";

const Transactions=lazy(()=>import("@/DashboardComponents/Admin/Transactions/Transactions")) ;

const ViewTransactionsPage = () => {
  return (
    <div>
      <Transactions/>
    </div>
  );
};

export default ViewTransactionsPage;