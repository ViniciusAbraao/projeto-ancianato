// components/EventCard.tsx
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

interface EventCardProps {
    data: string
    descricao: string
    imagem: string
    local: string
    titulo: string
}

export function EventCard({ data, descricao, imagem, local, titulo }: EventCardProps) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative h-48">
                <Image src={imagem} alt={titulo} fill className="object-cover" />
            </div>
            <div className="p-6">
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{data}</span>
                    <MapPin className="h-4 w-4 ml-2" />
                    <span>{local}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{titulo}</h3>
                <p className="text-gray-600">{descricao}</p>
            </div>
        </div>
    )
}
