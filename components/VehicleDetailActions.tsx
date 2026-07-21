"use client";

import Link from "next/link";

type VehicleDetailActionsProps = {
    slug: string;
};

export default function VehicleDetailActions({
    slug,
}: VehicleDetailActionsProps) {
    function handleSelectVehicle() {
        localStorage.setItem("selectedVehicleSlug", slug);
    }

    return (
        <div className="card-footer">
            <Link className="card-action-secondary" href="/vehicles">
                ← Back to Vehicles
            </Link>

            <button className="card-action-primary" onClick={handleSelectVehicle}>
                Select Vehicle →
            </button>
        </div>
    );
}