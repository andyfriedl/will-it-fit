export function createVehicleSlug(
  year: number,
  make: string,
  model: string
) {
  return `${year}-${make}-${model}`
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(".", "")
    .replaceAll("/", "-");
}