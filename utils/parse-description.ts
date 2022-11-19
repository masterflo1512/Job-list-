export default function parseDescription(description: string) {
  description = description.replace(/:\n/g, "");
  const responsibilitiesIndex = description.indexOf("Responsopilities");
  const compensationIndex = description.indexOf("Compensation & Benefits");
  const descriptionStart = description.slice(0, responsibilitiesIndex).trim();
  const responsibilities = description
    .slice(responsibilitiesIndex + "Responsopilities".length, compensationIndex)
    .trim();
  const benefits = description
    .slice(compensationIndex + "Compensation & Benefits".length)
    .trim();
  const benefitsList = benefits
    .split(".")
    .filter(Boolean)
    .map((benefit) => benefit.trim());
  return {
    description: descriptionStart,
    responsibilities,
    benefits: benefitsList,
  };
}
