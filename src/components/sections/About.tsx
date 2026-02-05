import { Button } from "../ui/Button"

export function About() {
    return (
        <section id="about" className="overflow-hidden bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">

                    <div className="lg:order-2">
                        <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl font-heading mb-6">
                            Um Espaço Seguro para sua Jornada
                        </h2>
                        <div className="space-y-6 text-lg leading-8 text-slate-600 font-body">
                            <p>
                                Olá, eu sou <span className="font-semibold text-primary">Dr. Nome</span>.
                                Minha prática é construída na crença de que todos têm a capacidade de mudança e crescimento.
                            </p>
                            <p>
                                Com mais de 10 anos de experiência em psicologia clínica, combino o rigor científico da
                                Terapia Cognitivo-Comportamental com uma abordagem calorosa e sem julgamentos. Entendo que dar
                                o primeiro passo para a terapia pode ser intimidante, por isso priorizo criar um
                                ambiente estruturado, mas flexível, onde você se sinta ouvido e compreendido.
                            </p>
                            <p>
                                Meu objetivo não é apenas ajudá-lo a se sentir melhor a curto prazo, mas equipá-lo com
                                ferramentas para a vida toda para enfrentar desafios futuros de forma independente.
                            </p>
                        </div>
                        <div className="mt-8">
                            <Button variant="outline">Ler Biografia Completa</Button>
                        </div>
                    </div>

                    <div className="lg:order-1 relative">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-900/10">
                            {/* Placeholder for About Photo */}
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                                <span className="text-lg font-medium">Dr. Portrait Placeholder</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
