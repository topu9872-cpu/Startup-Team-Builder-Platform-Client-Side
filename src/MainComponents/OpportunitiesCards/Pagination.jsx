"use client";

import { Pagination } from "@heroui/react";
import { useState } from "react";

export function PaginationWithEllipsis() {
  const [page, setPage] = useState(1);
  const totalPages = 12;

  const getPageNumbers = () => {
    const pages = [];

    pages.push(1);

    if (page > 3) {
      pages.push("ellipsis");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) {
      pages.push("ellipsis");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="w-full max-w-2xs overflow-x-auto sm:max-w-full bg-slate-950 p-6 flex justify-center rounded-lg border border-slate-900">
      <Pagination className="justify-center select-none">
        <Pagination.Content className="flex items-center gap-1.5 font-mono text-xs">
          
          {/* Previous Action Trigger */}
          <Pagination.Item>
            <Pagination.Previous 
              isDisabled={page === 1} 
              onPress={() => setPage((p) => p - 1)}
              className="flex items-center gap-1 px-3 h-9 rounded bg-slate-900/60 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            >
              <Pagination.PreviousIcon className="text-slate-200" />
              <span>Previous</span>
            </Pagination.Previous>
          </Pagination.Item>

          {/* Render Active/Inactive States */}
          {getPageNumbers().map((p, i) =>
            p === "ellipsis" ? (
              <Pagination.Item key={`ellipsis-${i}`}>
                <div className="flex items-center justify-center w-9 h-9 text-slate-600 font-bold">
                  ...
                </div>
              </Pagination.Item>
            ) : (
              <Pagination.Item key={p}>
                <Pagination.Link 
                  isActive={p === page} 
                  onPress={() => setPage(p)}
                  className={`flex items-center justify-center w-9 h-9 rounded border text-xs font-semibold transition-all cursor-pointer ${
                    p === page
                      ? "bg-purple-700/90 text-white font-bold border-purple-500/40 shadow-lg"
                      : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-slate-700"
                  }`}
                >
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ),
          )}

          {/* Next Action Trigger */}
          <Pagination.Item>
            <Pagination.Next 
              isDisabled={page === totalPages} 
              onPress={() => setPage((p) => p + 1)}
              className="flex items-center gap-1 px-3 h-9 rounded bg-slate-900/60 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            >
              <span>Next</span>
              <Pagination.NextIcon className="text-slate-200" />
            </Pagination.Next>
          </Pagination.Item>

        </Pagination.Content>
      </Pagination>
    </div>
  );
}