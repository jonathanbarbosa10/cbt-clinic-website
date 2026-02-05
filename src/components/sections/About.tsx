import { Button } from "../ui/Button"

export function About() {
    return (
        <section id="about" className="overflow-hidden bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">

                    <div className="lg:order-2">
                        <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl font-heading mb-6">
                            A Safe Space for Your Journey
                        </h2>
                        <div className="space-y-6 text-lg leading-8 text-slate-600 font-body">
                            <p>
                                Hello, I'm <span className="font-semibold text-primary">Dr. Name</span>.
                                My practice is built on the belief that everyone has the capacity for change and growth.
                            </p>
                            <p>
                                With over 10 years of experience in clinical psychology, I combine the scientific rigor of
                                Cognitive Behavioral Therapy with a warm, non-judgmental approach. I understand that taking
                                the first step towards therapy can be daunting, which is why I prioritize creating a
                                structured yet flexible environment where you feel heard and understood.
                            </p>
                            <p>
                                My goal is isn't just to help you feel better in the short term, but to equip you with
                                lifelong tools to navigate future challenges independently.
                            </p>
                        </div>
                        <div className="mt-8">
                            <Button variant="outline">Read Full Bio</Button>
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
