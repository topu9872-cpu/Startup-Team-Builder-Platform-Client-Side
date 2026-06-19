"use client";

import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { User, Image as ImageIcon, Sparkles, FileText } from "lucide-react";

export function ProfileEditModalCollaborator() {
  return (
    <Modal>
      {/* Trigger Button */}
      <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition-all active:scale-98 shadow-sm">
        Edit Profile
      </Button>

      <Modal.Backdrop className="bg-black/60 backdrop-blur-sm transition-opacity">
        <Modal.Container placement="center" className="p-4">
          <Modal.Dialog className="w-full sm:max-w-lg bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl relative">
            <Modal.CloseTrigger className="absolute top-4 right-4 text-neutral-400 hover:text-white transition rounded-md p-1 hover:bg-neutral-900" />

            {/* Header */}
            <Modal.Header className="p-6 pb-4 border-b border-neutral-800 bg-linear-to-b from-neutral-900/30 to-transparent">
              <div className="flex items-center gap-3.5">
                <Modal.Icon className="h-10 w-10 bg-purple-600/10 text-purple-400 rounded-xl flex items-center justify-center border border-purple-500/20">
                  <User className="size-5" />
                </Modal.Icon>
                <div>
                  <Modal.Heading className="text-lg font-bold text-white tracking-tight">Edit Profile</Modal.Heading>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Update your personal information, expertise, and digital bio.
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">
              <Surface variant="default" className="bg-transparent border-0 p-0">
                <form className="space-y-4">
                  
                  {/* Name and Image Fields Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TextField name="name" variant="secondary" className="space-y-1.5">
                      <Label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                        <User className="size-3.5 text-neutral-500" /> Full Name
                      </Label>
                      <Input 
                        placeholder="Enter your name" 
                        className="w-full bg-neutral-900 border border-neutral-800 text-white text-sm px-3.5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition placeholder:text-neutral-600"
                      />
                    </TextField>

                    <TextField name="image" variant="secondary" className="space-y-1.5">
                      <Label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                        <ImageIcon className="size-3.5 text-neutral-500" /> Avatar Image URL
                      </Label>
                      <Input 
                      
                      type="file"
                        placeholder="https://images.unsplash.com/..." 
                        className="w-full bg-neutral-900 border border-neutral-800 text-white text-sm px-3.5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition placeholder:text-neutral-600"
                      />
                    </TextField>
                  </div>

                  {/* Skills Field */}
                  <TextField name="skills" variant="secondary" className="space-y-1.5">
                    <Label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                      <Sparkles className="size-3.5 text-neutral-500" /> Core Skills
                    </Label>
                    <Input 
                      placeholder="React, Next.js, TypeScript, Tailwind" 
                      className="w-full bg-neutral-900 border border-neutral-800 text-white text-sm px-3.5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition placeholder:text-neutral-600"
                    />
                  </TextField>

                  {/* Bio Field */}
                  <TextField name="bio" variant="secondary" className="space-y-1.5">
                    <Label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                      <FileText className="size-3.5 text-neutral-500" /> Biography Description
                    </Label>
                    <TextArea 
                      rows={3}
                      placeholder="Write a brief intro about your journey and expertise..." 
                      className="w-full bg-neutral-900 border border-neutral-800 text-white text-sm px-3.5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition placeholder:text-neutral-600 resize-none"
                    />
                  </TextField>

                </form>
              </Surface>
            </Modal.Body>

            {/* Footer */}
            <Modal.Footer className="p-4 bg-neutral-900/40 border-t border-neutral-800 flex justify-end items-center gap-2">
              <Button 
                slot="close" 
                variant="secondary"
                className="px-4 py-2 border border-neutral-800 hover:bg-neutral-900  text-xs font-medium rounded-lg transition"
              >
                Cancel
              </Button>

              <Button 
                slot="close" 
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded-lg transition shadow-md shadow-purple-600/10"
              >
                Save Changes
              </Button>
            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}