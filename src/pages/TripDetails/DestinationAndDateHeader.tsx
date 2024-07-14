import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { format } from "date-fns";

interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

export function DestinationAndDateHeader() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState<Trip | undefined>();

  useEffect(() => {
    api.get(`/trips/${tripId}`).then((response) => setTrip(response.data.trip));
  }, [tripId]);

  const displayedDate =
    trip
      ? format(trip.starts_at, "LLL do")
          .concat(" - ")
          .concat(format(trip.ends_at, "LLL do"))
      : null;

  return (
    <div className="px-4 h-16 rounded-lg bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="text-zinc-400 size-5" />
        <span className="text-zinc-100">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="text-zinc-400 size-5" />
          <span className="text-zinc-100">{displayedDate}</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <Button variant="secondary">
          Change details
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
