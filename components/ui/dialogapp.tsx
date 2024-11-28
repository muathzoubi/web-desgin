"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function DialogDemo({ open, setOpen }: any) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Dialog Demo</DialogTitle>
            <DialogDescription>
              This is a simple dialog demo using shadcn/ui components.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>
              You can add any content here. This dialog is easy to customize!
            </p>
          </div>
          <Button onClick={() => setOpen(false)}>Close Dialog</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
