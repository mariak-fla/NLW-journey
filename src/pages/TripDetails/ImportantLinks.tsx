import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/Button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h3 className="font-medium text-zinc-100">Reservations</h3>
            <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              https://www.airbnb.com/rooms/104700532617839217635011
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h3 className="font-medium text-zinc-100">Reservations</h3>
            <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              https://www.airbnb.com/rooms/104700532617839217635011
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <Plus className="size-5" /> Add link
      </Button>
    </div>
  );
}
