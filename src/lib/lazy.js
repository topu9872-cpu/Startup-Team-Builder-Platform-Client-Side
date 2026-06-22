
import dynamic from "next/dynamic";

export const lazy = (route) =>
  dynamic(route, {
      
    loading: () => (
      <div className="mx-auto flex justify-center items-center mt-10">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    ),
  });
