import { X, AtSign, Plus } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/Button";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewGuests: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvites: (email: string) => void;
}

export function InviteGuestsModal({
  closeGuestsModal,
  emailsToInvite,
  addNewGuests,
  removeEmailFromInvites,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Select guests</h2>
            <button type="button" onClick={closeGuestsModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p>
            Guests will receive e-mail invitations to the trip you've planned.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="py-1.5 px-2.5 rounded-mt bg-zinc-800 flex items-center gap-2"
              >
                <span className="text-zinc-300">{email}</span>
                <button
                  type="button"
                  onClick={() => removeEmailFromInvites(email)}
                >
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-zinc-800" />
        <form
          onSubmit={addNewGuests}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="flex items-center gap-2 px-2 flex-1">
            <AtSign className="text-zinc-400 size-5" />

            <input
              type="email"
              name="email"
              placeholder="Guest's e-mail"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>

          <Button type="submit">
            Invite <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
