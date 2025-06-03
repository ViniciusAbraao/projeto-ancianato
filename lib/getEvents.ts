// lib/getEvents.ts
import { Evento } from "./types";

export async function getEventos(): Promise<Evento[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/eventos`, {
    cache: 'no-store', // Para evitar cache na produção
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar eventos da API");
  }

  return res.json();
}
