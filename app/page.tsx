import { Button } from "@/components/ui/button"
import { Calendar, Heart, Info, Mail, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Logo.png" // Substitua pelo caminho da sua imagem
              alt="Logo Org"
              width={200} // Ajuste o tamanho conforme necessário
              height={200}
              className="mx-6" // Ajuste o tamanho conforme necessário
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#home" className="text-sm font-medium text-blue-700 hover:text-blue-900">
              Início
            </Link>
            <Link href="#who-we-are" className="text-sm font-medium text-blue-700 hover:text-blue-900">
              Sobre Nós
            </Link>
            <Link href="#transparency" className="text-sm font-medium text-blue-700 hover:text-blue-900">
              Transparência
            </Link>
            <Link href="#how-to-help" className="text-sm font-medium text-blue-700 hover:text-blue-900">
              Como ajudar
            </Link>
            <Link href="#events" className="text-sm font-medium text-blue-700 hover:text-blue-900">
              Eventos
            </Link>
            <Link href="#contact" className="text-sm font-medium text-blue-700 hover:text-blue-900">
              Contatos
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden" size="icon">
            <span className="sr-only">Alternar menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Home Section */}
        <section id="home" className="relative">
          <div className="absolute inset-0 bg-blue-900/80 z-10" />
          <div className="relative h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container px-4 md:px-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Fazendo a diferença juntos
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-white/90 md:text-xl">
                  Junte-se a nós em nossa missão de criar mudanças positivas em nossa comunidade e além.
                </p>
                <div className="space-x-4">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Ajudar</Button>
                  <Button variant="outline" className="bg-white text-blue-700 hover:bg-blue-50">
                    Saiba mais
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section - Removed "Our Team" as requested */}
        <section id="who-we-are" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Nossa história</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                  Sobre Nós
                </h2>
                <p className="text-gray-600 md:text-lg">
                  Fundada em 2010, nossa organização tem se dedicado a causar um impacto positivo em nossa comunidade. Nós
                  acreditamos no poder da ação coletiva e na importância da transparência em tudo o que fazemos.
                </p>
                <p className="text-gray-600 md:text-lg">
                  Nossa equipe é formada por indivíduos apaixonados de diversas origens, todos unidos por um objetivo comum:
                  criar mudanças significativas e construir um futuro melhor para todos.
                </p>
                {/* Removed "Our Team" section as requested */}
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image src="/placeholder.svg?height=400&width=600" alt="Team photo" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Seção da Transparencia */}
        <section id="transparency" className="py-16 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-4">
                Nosso Compromisso
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Transparência
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-600 md:text-lg">
                Acreditamos em ser abertos e honestos sobre nossas operações, finanças e impacto.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Info className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-2">Relatórios Financeiros</h3>
                <p className="text-gray-600 mb-4">
                  Publicamos relatórios financeiros detalhados trimestralmente, mostrando exatamente como as doações são usadas.
                </p>
                <Button variant="link" className="text-blue-700 p-0">
                  Ver relatórios →
                </Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Info className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-2">Métricas de Impacto</h3>
                <p className="text-gray-600 mb-4">
                  Medimos e compartilhamos o impacto real de nossos programas e iniciativas.
                </p>
                <Button variant="link" className="text-blue-700 p-0">
                  Ver relatórios →
                </Button>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Info className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-2">Governança</h3>
                <p className="text-gray-600 mb-4">
                  Saiba mais sobre nossa estrutura de liderança e processos de tomada de decisão.
                </p>
                <Button variant="link" className="text-blue-700 p-0">
                  Ver relatórios →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Como ajudar */}
        <section id="how-to-help" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Volunteers helping"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700">Ajude</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                  Como ajudar
                </h2>
                <p className="text-gray-600 md:text-lg">
                  Há muitas maneiras de contribuir para nossa missão e fazer a diferença. Seja por meio de
                  doações, voluntariado ou divulgação, cada ação conta.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <Heart className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">Doação</h3>
                      <p className="text-gray-600">Seu apoio financeiro nos ajuda a continuar nosso importante trabalho.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">Seja Voluntário</h3>
                      <p className="text-gray-600">
                        Junte-se à nossa equipe de voluntários dedicados que fazem a diferença na prática.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">Espalhe a palavra</h3>
                      <p className="text-gray-600">
                        Compartilhe nossa missão com sua rede e nos ajude a alcançar mais pessoas.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Removed the "Get Involved Now" button as requested */}
              </div>
            </div>
          </div>
        </section>

        {/* Seção dos Eventos */}
        <section id="events" className="py-16 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-4">Junte-se a nós</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Eventos
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-gray-600 md:text-lg">
                Descubra os próximos eventos e atividades onde você pode se envolver e fazer a diferença.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Community cleanup event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>Junho 15, 2025</span>
                    <MapPin className="h-4 w-4 ml-2" />
                    <span>Três Corações</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Dia de Limpeza Comunitária</h3>
                  <p className="text-gray-600">
                    Junte-se a nós para um dia de limpeza de parques e ruas locais para criar um ambiente mais limpo.
                  </p>
                  {/* Removed the "Register Now" button as requested */}
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Fundraising gala"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>Julho 10, 2025</span>
                    <MapPin className="h-4 w-4 ml-2" />
                    <span>Três Corações</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Gala Anual de Arrecadação de Fundos</h3>
                  <p className="text-gray-600">
                    Uma noite elegante de jantar, entretenimento e arrecadação de fundos para nossas principais iniciativas.
                  </p>
                  {/* Removed the "Get Tickets" button as requested */}
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Workshop event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>Agosto 5, 2025</span>
                    <MapPin className="h-4 w-4 ml-2" />
                    <span>Três Corações</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Série de workshops educacionais</h3>
                  <p className="text-gray-600">
                    Aprenda habilidades e conhecimentos práticos para ajudar a fazer a diferença na sua comunidade.
                  </p>
                  {/* Removed the "Sign Up" button as requested */}
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button className="bg-red-600 hover:bg-red-700 text-white">Visualizar todos os Eventos</Button>
            </div>
          </div>
        </section>

        {/* Contact Section - Removed form as requested */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Entre em contato</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                  Contatos
                </h2>
                <p className="text-gray-600 md:text-lg">
                  Tem perguntas ou quer se envolver? Gostaríamos muito de ouvir de você. Use as informações de contato abaixo
                  para entrar em contato conosco.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">Endereço</h3>
                      <p className="text-gray-600">Rua José Ferreira Coelho, 220 - Vila Jessê - Três Corações - MG</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">Email</h3>
                      <p className="text-gray-600">ancianatotc@yahoo.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-red-600 mt-1"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">Telefone</h3>
                      <p className="text-gray-600">(35) 2146-4154</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Rodapé mais compacto */}
      <footer className="bg-blue-400 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Image src="/images/Logo.png" alt="Logo Org" width={150} height={150} className="mx-2" />
              <div className="text-sm">
                <p>&copy; {new Date().getFullYear()} OrganizationName. Todos os direitos reservados.</p>
              </div>
            </div>
            <div>
              <ul className="flex flex-wrap gap-4 justify-center">
                <li>
                  <Link href="#home" className="text-sm hover:text-white">
                   Início
                  </Link>
                </li>
                <li>
                  <Link href="#who-we-are" className="text-sm hover:text-white">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#transparency" className="text-sm hover:text-white">
                    Transparência
                  </Link>
                </li>
                <li>
                  <Link href="#how-to-help" className="text-sm hover:text-white">
                    Como ajudar
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-sm hover:text-white">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm hover:text-white">
                    Contatos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

