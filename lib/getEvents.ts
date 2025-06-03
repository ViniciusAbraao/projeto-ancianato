import { Evento } from "./types";

export async function getEventos(): Promise<Evento[]> {

  const res = await fetch(`https://projeto-ancianato.vercel.app/api/eventos`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar eventos da API");
  }

  return res.json();
}
