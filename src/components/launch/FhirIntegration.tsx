export default function FhirIntegration({ visible }: { visible: boolean }) {
  return (
    <div className="bg-red-500 text-white text-2xl font-bold p-8 rounded-2xl">
      FHIR TEST - If you can see this, the component mounts correctly. Visible: {String(visible)}
    </div>
  );
}
