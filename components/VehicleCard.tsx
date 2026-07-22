import Card from "@/components/Card";

type VehicleCardProps = {
  slug: string;
  make: string;
  model: string;
  year: number;
  description: string;
};

export default function VehicleCard({
  slug,
  make,
  model,
  year,
  description,
}: VehicleCardProps) {
  return (
    <Card href={`/vehicles/${slug}`} className="min-h-32 card--secondary">
      <h2>
        {year} {make} {model}
      </h2>

      <p>{description}</p>

      <span className="card-link-cue action-space-top action-align-right">
        View Vehicle →
      </span>
    </Card>
  );
}