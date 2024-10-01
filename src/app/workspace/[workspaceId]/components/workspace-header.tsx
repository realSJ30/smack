"use client";

import Hint from "@/components/custom/hint";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ListFilter, SquarePen } from "lucide-react";
import { useCallback, useState } from "react";
import { Doc } from "../../../../../convex/_generated/dataModel";
import InviteModal from "./invite-modal";
import PreferencesModal from "./preferences-modal";

interface WorkspaceHeaderProps {
  workspace: Doc<"workspaces">;
  isAdmin: boolean;
}

const WorkspaceHeader = ({ workspace, isAdmin }: WorkspaceHeaderProps) => {
  const [openPreferences, setOpenPreferences] = useState(false);
  const [inviteOpen, setInviteOpen] = useState(false);
  const handleOpenPreferenceModal = useCallback(
    (open: boolean) => {
      setOpenPreferences(open);
    },
    [open]
  );
  const handleOpenInviteModal = useCallback(
    (open: boolean) => {
      setInviteOpen(open);
    },
    [open]
  );

  return (
    <>
      <InviteModal
        open={inviteOpen}
        setOpen={handleOpenInviteModal}
        workspaceName={workspace.name}
        joinCode={workspace.joinCode}
      />
      <PreferencesModal
        open={openPreferences}
        setOpen={handleOpenPreferenceModal}
        initialValue={workspace.name}
      />
      <div className="flex items-center justify-between px-4 h-[49px] gap-0.5 w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"transparent"}
              className="font-semibold text-lg w-auto p-1.5 overflow-hidden"
              size={"sm"}
            >
              <span className="truncate">{workspace?.name}</span>
              <ChevronDown className="size-4 ml-1 shrink-0" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="start" className="w-64">
            <DropdownMenuItem className="cursor-pointer capitalize">
              <div className="size-9 relative overflow-hidden text-white bg-neutral-800 font-semibold text-xl rounded-md flex items-center justify-center mr-2">
                {workspace.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col items-start">
                <p className="font-bold">{workspace.name}</p>
                <p className="text-xs text-muted-foreground">
                  Active workspace
                </p>
              </div>
            </DropdownMenuItem>
            {isAdmin && (
              <>
                <DropdownMenuItem
                  className="cursor-pointer py-2 truncate"
                  onClick={() => {
                    handleOpenInviteModal(true);
                  }}
                >
                  Invite people to {workspace.name}
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer py-2 truncate"
                  onClick={() => {
                    handleOpenPreferenceModal(true);
                  }}
                >
                  Preferences
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center gap-0 5">
          <Hint side="bottom" label="Filter conversations">
            <Button variant={"transparent"} size={"iconSm"}>
              <ListFilter className="size-4" />
            </Button>
          </Hint>
          <Hint side="bottom" label="New message">
            <Button variant={"transparent"} size={"iconSm"}>
              <SquarePen className="size-4" />
            </Button>
          </Hint>
        </div>
      </div>
    </>
  );
};

export default WorkspaceHeader;
