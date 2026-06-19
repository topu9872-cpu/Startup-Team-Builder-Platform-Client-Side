import { lazy } from "@/lib/lazy";

const PricingPlansGrid = lazy(
  () => import("@/MainComponents/PricingPlansGrid/PricingPlansGrid"),
);

const PlanPage = () => {
  return (
    <div className="mt-10">
      <PricingPlansGrid />
    </div>
  );
};

export default PlanPage;
