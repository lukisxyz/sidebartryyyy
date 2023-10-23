export default async function Record({ params }: { params: { id: string } }) {
  return (
    <main>
      <div className="flex justify-between items-baseline mb-6 mt-3">
        <h2 className="text-stone-700 font-semibold text-xl">{`Record dengan id ${params.id}`}</h2>
      </div>
    </main>
  );
}
