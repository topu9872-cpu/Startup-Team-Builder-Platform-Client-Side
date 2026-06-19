"use client";

import { Pagination } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

export function PaginationWithEllipsis({ totalPages = 1 }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get the current page from URL params, default to 1
  const currentPage = Number(searchParams.get("page")) || 1;

  // Helper logic to calculate pages array with ellipses
  const getPageNumbers = () => {
    const pages = [];
    pages.push(1);

    if (currentPage > 3) {
      pages.push("ellipsis");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("ellipsis");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (p) => {
    if (p < 1 || p > totalPages) return;
    router.push(`/opportunities?page=${p}`);
  };

  // Generate the pages array before rendering
  const pages = getPageNumbers();

  return (
    <div className="w-full max-w-2xs overflow-x-auto sm:max-w-full bg-slate-950 p-6 flex justify-center rounded-lg border border-slate-900">
      <Pagination className="justify-center select-none">
        <Pagination.Content className="flex items-center gap-1.5 font-mono text-xs">
          
          {/* Previous Action Trigger */}
          <Pagination.Item>
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="flex items-center gap-1 px-3 h-9 rounded bg-slate-900/60 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            >
              <Pagination.PreviousIcon className="text-slate-200" />
              <span>Previous</span>
            </button>
          </Pagination.Item>

          {/* Render Active/Inactive States */}
          {pages.map((p, i) =>
            p === "ellipsis" ? (
              <Pagination.Item key={`ellipsis-${i}`}>
                <div className="flex items-center justify-center w-9 h-9 text-slate-600 font-bold">
                  ...
                </div>
              </Pagination.Item>
            ) : (
              <Pagination.Item key={p}>
                <button
                  onClick={() => handlePageChange(p)}
                  className={`flex items-center justify-center w-9 h-9 rounded border text-xs font-semibold transition-all cursor-pointer ${
                    p === currentPage
                      ? "bg-purple-700/90 text-white font-bold border-purple-500/40 shadow-lg"
                      : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-slate-700"
                  }`}
                >
                  {p}
                </button>
              </Pagination.Item>
            )
          )}

          {/* Next Action Trigger */}
          <Pagination.Item>
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex items-center gap-1 px-3 h-9 rounded bg-slate-900/60 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            >
              <span>Next</span>
              <Pagination.NextIcon className="text-slate-200" />
            </button>
          </Pagination.Item>
          
        </Pagination.Content>
      </Pagination>
    </div>
  );
}