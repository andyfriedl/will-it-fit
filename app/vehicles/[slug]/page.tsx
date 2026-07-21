import Card from "@/components/Card";
import { VehicleDetailCard } from "@/components/VehicleDetailCard";
import { vehicles } from "@/data/vehicles";
import { createVehicleSlug } from "@/utils/utils";

type VehicleDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function VehicleDetailPage({
  params,
}: VehicleDetailPageProps) {
  const { slug } = await params;

  const vehicle = vehicles.find((vehicle) => {
    const vehicleSlug = createVehicleSlug(
      vehicle.year,
      vehicle.make,
      vehicle.model
    );

    return vehicleSlug === slug;
  });

  if (!vehicle) {
    return (
      <main>
        <Card>
          <h1>Vehicle not found</h1>
          <p>No vehicle matches this URL.</p>
        </Card>
      </main>
    );
  }

  return (
    <main>
      <VehicleDetailCard slug={slug} vehicle={vehicle} />
    </main>
  );
}