"use client";

import { founderStartupsDataDelete } from "@/api/serverMutation";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function StartupDeleteModal({ company }) {
const router=useRouter()
  const handleDelete = async () => {
    const res = await founderStartupsDataDelete(company._id);
    if (res) {
      router.refresh()
      toast.success(`${company.startupName} is deleted`);
    } else {
      toast.error("Something want !");
    }
  };

  return (
    <AlertDialog>
      <Button className="px-2 py-1 text-xs font-medium bg-black text-red-500 border border-red-500/20 rounded hover:bg-red-500/10">
        🗑️
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100 shadow-[0_0_20px] shadow-purple-400 bg-black">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className="text-white">
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{company.startupName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" >
                Cancel
              </Button>
              <Button
                onClick={() => handleDelete()}
                type="button"
                slot="close"
                variant="danger"
              >
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
