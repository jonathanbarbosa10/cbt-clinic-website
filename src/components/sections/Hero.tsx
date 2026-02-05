import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "../ui/Button"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-16 md:pt-20 lg:pt-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Content Column */}
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center rounded-full border border-secondary/50 bg-secondary/10 px-3 py-1 text-sm font-medium text-teal-800 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-secondary mr-2"></span>
                            Accepting New Patients
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-primary-dark sm:text-5xl lg:text-6xl mb-6 font-heading">
                            Evidence-Based Therapy for <span className="text-primary">Clarity & Growth</span>
                        </h1>
                        <p className="text-lg leading-8 text-slate-600 mb-8 font-body">
                            Reconnect with your true self through Cognitive Behavioral Therapy (CBT).
                            A scientific, empathetic approach to overcoming anxiety, burnout, and life transitions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button size="lg" variant="accent" className="font-semibold text-lg">
                                Schedule Consultation
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg group">
                                Learn Methodology
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-secondary-DEFAULT" />
                                <span>Licensed Psychologist</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-secondary-DEFAULT" />
                                <span>Online & In-Person</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
                            {/* Placeholder for Professional Photo */}
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                                <span className="text-lg font-medium">Professional Photo Placeholder</span>
                            </div>
                            {/* Optional: Add an actual image tag later */}
                            {/* <img src="..." alt="Psychologist Portrait" className="object-cover w-full h-full" /> */}
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -right-6 -top-6 -z-10 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>
                        <div className="absolute -left-6 -bottom-6 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
