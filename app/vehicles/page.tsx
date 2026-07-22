import VehicleCard from "@/components/VehicleCard";
import { createVehicleSlug } from "@/utils/utils";
import { vehicles } from "@/data/vehicles";


export default function Vehicles() {
    return (
        <main>
            <h2 className="inline-block bg-[var(--color-accent)] px-4 py-2">Select a vehicle</h2>
            {vehicles.map((vehicle) => {
              const slug = createVehicleSlug(
                vehicle.year,
                vehicle.make,
                vehicle.model
              );

              return (
            <VehicleCard
              key={slug}
              slug={slug}
              year={vehicle.year}
              make={vehicle.make}
              model={vehicle.model}
              description={vehicle.description}
            />
              );
            })}
        </main>
    );
}