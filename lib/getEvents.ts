// lib/getEvents.ts
export async function getEventos() {
  const baseUrl =
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/eventos`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar eventos da API");
  }

  return res.json();
}
