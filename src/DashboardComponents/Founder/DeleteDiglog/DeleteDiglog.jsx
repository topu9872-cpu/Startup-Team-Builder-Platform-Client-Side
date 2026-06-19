"use client";

import React from "react";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2, AlertTriangle, X } from "lucide-react";

export default function DeleteDialog({ projectName = "My Awesome Project", onDelete }) {
  return (
    <AlertDialog>
      {/* Trigger Button */}
      <Button className="bg-red-950/40 hover:bg-red-900/60  text-red-400 font-medium text-xs btn btn-sm tracking-wider uppercase  py-2 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg shadow-red-950/20 active:scale-98">
        <Trash2 className="size-3.5" />
        Delete
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
                This will completely purge <span className="text-red-400 font-semibold bg-red-500/5 px-1.5 py-0.5 rounded border border-red-500/10">{" "}{projectName}{" "}</span> and all associated ecosystem configurations. This structural teardown action <span className="text-slate-200 font-medium underline decoration-red-500/40 underline-offset-2">cannot be reversed</span>.
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
                slot="close" 
                onClick={onDelete}
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