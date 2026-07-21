"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/Card";

type VehicleDetailCardProps = {
  slug: string;
  vehicle: {
    year: number;
    make: string;
    model: string;
    description: string;
    cargo: {
      width: number;
      height: number;
      depth: number;
    };
  };
};

export function VehicleDetailCard({
  slug,
  vehicle,
}: VehicleDetailCardProps) {
const [isSelected, setIsSelected] = useState(false);

useEffect(() => {
  const savedVehicleSlug = localStorage.getItem("selectedVehicleSlug");

  if (savedVehicleSlug === slug) {
    setIsSelected(true);
  }
}, [slug]);

function handleSelectVehicle() {
  localStorage.setItem("selectedVehicleSlug", slug);
  setIsSelected(true);
}

function handleUnselectVehicle() {
  localStorage.removeItem("selectedVehicleSlug");
  setIsSelected(false);
}

  return (
    <Card
      variant={isSelected ? "success" : "primary"}
      className="min-h-80 card-stack"
    >
      <div>
        <h1>
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h1>

        <p>{vehicle.description}</p>

        <h2>Cargo Dimensions</h2>

        <p>Width: {vehicle.cargo.width} in</p>
        <p>Height: {vehicle.cargo.height} in</p>
        <p>Depth: {vehicle.cargo.depth} in</p>
      </div>

        <div className="card-footer">
          {isSelected ? (
            <button className="card-action-secondary" onClick={handleUnselectVehicle}>
              Unselect Vehicle
            </button>
          ) : (
            <Link className="card-action-secondary" href="/vehicles">
              ← Back to Vehicles
            </Link>
          )}

          {isSelected ? (
            <Link className="card-action-dark" href="/fit-check">
                Will It Fit? →
            </Link>
          ) : (
            <button className="card-action-primary" onClick={handleSelectVehicle}>
              Select Vehicle →
            </button>
          )}
        </div>
    </Card>
  );
}