import { UserRoundPlus, ArrowRight } from "lucide-react";
import { Button } from "../../../components/Button";

interface InviteGuestsStepProps {
  openGuestsModal: () => void;
  emailsToInvite: string[];
  openConfirmTripModal: () => void;
}

export function InviteGuestsStep({
  openGuestsModal,
  emailsToInvite,
  openConfirmTripModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex items-center gap-2 flex-1 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg flex-1">
            {emailsToInvite.length} guests invited
          </span>
        ) : (
          <span className="text-lg text-zinc-400 flex-1">
            Who are you inviting?
          </span>
        )}
      </button>

      <Button onClick={openConfirmTripModal}>
        Confirm trip <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
