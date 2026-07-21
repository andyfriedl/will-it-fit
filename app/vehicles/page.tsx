import VehicleCard from "@/components/VehicleCard";
import { createVehicleSlug } from "@/utils/utils";
import { vehicles } from "@/data/vehicles";


export default function Vehicles() {
    return (
        <main>
            <h1>Vehicles</h1>
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