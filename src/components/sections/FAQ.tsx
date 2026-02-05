import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"

export function FAQ() {
    const faqs = [
        {
            question: "Do you accept health insurance?",
            answer: "I work as a private practitioner but provide receipts for reimbursement. Many insurance plans cover a significant portion of the session fee through their reimbursement policies.",
        },
        {
            question: "How long is each session?",
            answer: "Standard individual therapy sessions last 50 minutes. This ensures we have enough time to cover meaningful ground while respecting your schedule and cognitive load.",
        },
        {
            question: "Is online therapy as effective as in-person?",
            answer: "Yes, research consistently shows that online CBT is just as effective as face-to-face therapy for anxiety and depression. It also offers the convenience of joining from your own safe space.",
        },
        {
            question: "What is your cancellation policy?",
            answer: "I require a 24-hour notice for cancellations. This allows me to offer the time slot to another client who might be waiting.",
        },
    ]

    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl font-heading mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg leading-8 text-slate-600">
                        Clear answers to help you make an informed decision.
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
