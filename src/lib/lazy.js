
import dynamic from "next/dynamic";

export const lazy = (route) =>
  dynamic(route, {
      
    loading: () => (
      <div className="mx-auto my-auto">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    ),
  });
