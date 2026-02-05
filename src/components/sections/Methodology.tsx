import { Search, BrainCircuit, Footprints } from "lucide-react"

export function Methodology() {
    const steps = [
        {
            id: 1,
            title: "Identificar",
            description: "Trabalhamos juntos para descobrir os padrões de pensamento e comportamentos que podem estar te limitando.",
            icon: Search,
        },
        {
            id: 2,
            title: "Reestruturar",
            description: "Aprenda ferramentas práticas para desafiar pensamentos negativos e ver as situações com maior clareza.",
            icon: BrainCircuit,
        },
        {
            id: 3,
            title: "Agir",
            description: "Implemente novas estratégias em sua vida diária para construir resiliência e alcançar mudanças duradouras.",
            icon: Footprints,
        },
    ]

    return (
        <section id="methodology" className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl font-heading mb-4">
                        Como funciona a TCC
                    </h2>
                    <p className="text-lg leading-8 text-slate-600 font-body">
                        A Terapia Cognitivo-Comportamental é uma abordagem estruturada e prática que ajuda a resolver problemas atuais e mudar pensamentos e comportamentos improdutivos.
                    </p>
                </div>

                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {steps.map((step) => (
                        <div key={step.id} className="relative flex flex-col items-center text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 mb-6 transition-transform hover:scale-105">
                                <step.icon className="h-8 w-8 text-secondary-DEFAULT" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-semibold leading-7 text-primary-dark mb-2">
                                {step.id}. {step.title}
                            </h3>
                            <p className="text-base leading-7 text-slate-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
