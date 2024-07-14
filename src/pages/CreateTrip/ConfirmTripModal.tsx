import { X, User, Mail } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/Button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (name: string) => void;
  setOwnerEmail: (email: string) => void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirm trip</h2>
            <button type="button" onClick={closeConfirmTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p>
            To confirm your trip to{" "}
            <span className="text-zinc-100 font-semibold">Location</span>, set
            from <span className="text-zinc-100 font-semibold">date</span> to{" "}
            <span className="text-zinc-100 font-semibold">date</span>, please
            fill out the form below.
          </p>
        </div>

        <form className="space-y-3" onSubmit={createTrip}>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />

            <input
              name="name"
              placeholder="Your full name"
              onChange={(event) => setOwnerName(event.target.value)}
              className="bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="text-zinc-400 size-5" />

            <input
              type="text"
              name="text"
              placeholder="Your email"
              onChange={(event) => setOwnerEmail(event.target.value)}
              className="bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>

          <Button type="submit" size="full">
            Confirm trip
          </Button>
        </form>
      </div>
    </div>
  );
}
