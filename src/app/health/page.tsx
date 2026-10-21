import { Suspense } from "react";

async function HealthData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <>
      <p className="mt-2">Status: {res.ok ? "OK" : "Error"}</p>
      <pre className="mt-4 overflow-x-auto rounded-card bg-muted p-4 text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
      <p className="mt-2 text-sm">
        Env: {process.env.NEXT_PUBLIC_APP_ENV ?? "unset"}
      </p>
    </>
  );
}

export default function HealthPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Health check</h1>
      <Suspense fallback={<p className="mt-2">Loading…</p>}>
        <HealthData />
      </Suspense>
    </section>
  );
}