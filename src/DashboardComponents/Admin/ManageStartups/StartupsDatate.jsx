"use client";

import React from "react";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2, AlertTriangle, X } from "lucide-react";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { founderStartupsDataDelete } from "@/api/serverMutation";

export default function StarupsDelete({ id }) {
  const router = useRouter();
  const handleDelete = async () => {
    const deleteItem =  await founderStartupsDataDelete(id._id);
    if (deleteItem.deletedCount === 1) {
      toast.success(`${id.startupName} is deleted`);
      router.refresh();
    } else {
      toast.error(`Faild to delete ${id.startupName}`);
    }
  };
  
  return (
    <AlertDialog>
      <Button
      
        className="h-7 w-7 rounded-lg bg-transparent border border-slate-800 hover:border-red-500/30 text-slate-400 hover:text-red-400 flex items-center justify-center transition hover:bg-red-950/20 cursor-pointer"
        title="Delete Startup"
      >
        <Trash2 className="size-3.5" />
      </Button>
     

      {/* Backdrop Overlays */}
      <AlertDialog.Backdrop className="bg-black/75 backdrop-blur-xs transition-all">
        <AlertDialog.Container placement="center" className="p-4">
          <AlertDialog.Dialog className="w-full max-w-md bg-[#0d0e12] border border-red-500/20 rounded-2xl overflow-hidden shadow-2xl relative text-sm text-slate-100">
            {/* Top Warning Accent Indicator Rail */}
            <div className="h-1 bg-linear-to-r from-transparent via-red-500 to-transparent w-full absolute top-0 left-0" />

            {/* Custom Interactive Close Trigger */}
            <AlertDialog.CloseTrigger className="absolute top-4 right-4 text-slate-500 hover:text-white p-1 rounded-md hover:bg-slate-900 transition-colors">
              <X className="size-4" />
            </AlertDialog.CloseTrigger>

            {/* Header Content */}
            <AlertDialog.Header className="p-6 pb-2 flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center rounded-full mb-3.5 shadow-inner">
                <AlertTriangle className="size-5.5 animate-pulse" />
              </div>
              <AlertDialog.Heading className="text-base font-bold tracking-tight text-white">
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            {/* Body Content */}
            <AlertDialog.Body className="px-6 pb-6 text-center">
              <p className="text-slate-400 text-xs leading-relaxed">
                This will completely purge{" "}
                <span className="text-red-400 font-semibold bg-red-500/5 px-1.5 py-0.5 rounded border border-red-500/10">
                  {id.startupName}
                </span>{" "}
                and all associated ecosystem configurations. This structural
                teardown action{" "}
                <span className="text-slate-200 font-medium underline decoration-red-500/40 underline-offset-2">
                  cannot be reversed
                </span>
                .
              </p>
            </AlertDialog.Body>

            {/* Action Bottom Rail Layout */}
            <AlertDialog.Footer className="p-4 bg-[#111217] border-t border-slate-900 flex items-center justify-end gap-2.5">
              <Button
                slot="close"
                className="px-4 h-9 rounded-lg bg-transparent border border-slate-800 hover:bg-slate-900 transition text-slate-400 hover:text-slate-200 text-xs font-medium"
              >
                Cancel
              </Button>
              <Button
                type="button"
                slot="close"
                onClick={() => handleDelete()}
                className="px-4 h-9 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-lg shadow-red-900/30 transition active:scale-98"
              >
                Confirm Destructive Purge
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
