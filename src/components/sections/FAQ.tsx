import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"

export function FAQ() {
    const faqs = [
        {
            question: "O que posso esperar da primeira sessão?",
            answer: "A primeira sessão é uma oportunidade para nos conhecermos. Discutiremos o que o traz à terapia, sua história e seus objetivos. É um espaço seguro para fazer perguntas e ver se nos encaixamos bem.",
        },
        {
            question: "Quanto tempo dura cada sessão?",
            answer: "As sessões normalmente duram 50 minutos. Começamos com um check-in, estabelecemos uma pauta para o tempo juntos, trabalhamos nas questões principais e revisamos o que levar para a semana.",
        },
        {
            question: "Aceita convênios?",
            answer: "Atualmente, meu consultório é particular. Posso fornecer um recibo (superbill) que você pode enviar ao seu convênio para possível reembolso, dependendo do seu plano.",
        },
        {
            question: "A terapia é confidencial?",
            answer: "Absolutamente. A confidencialidade é a base da terapia. O que compartilhamos permanece privado, com algumas excepções legais relacionadas à segurança imediata que discutiremos na nossa primeira reunião.",
        },
    ]

    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl font-heading mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-lg leading-8 text-slate-600 font-body">
                        Respostas para perguntas comuns sobre o processo terapêutico.
                    </p>
                </div>

                <div className="mx-auto max-w-3xl divide-y divide-slate-100">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-6">
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                className="flex w-full items-start justify-between text-left text-slate-900"
                            >
                                <span className="text-lg font-semibold leading-7">{faq.question}</span>
                                <span className="ml-6 flex h-7 items-center">
                                    <ChevronDown
                                        className={cn(
                                            "h-6 w-6 transform text-secondary-DEFAULT transition-transform duration-200",
                                            index === openIndex ? "rotate-180" : "rotate-0"
                                        )}
                                    />
                                </span>
                            </button>
                            <AnimatePresence initial={false}>
                                {index === openIndex && (
                                    <motion.div
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={{
                                            open: { opacity: 1, height: "auto", marginTop: 16 },
                                            collapsed: { opacity: 0, height: 0, marginTop: 0 },
                                        }}
                                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <p className="text-base leading-7 text-slate-600">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
