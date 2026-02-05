import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card"
import { Brain, CloudRain, Zap, Briefcase } from "lucide-react"

export function AreasOfFocus() {
    const areas = [
        {
            title: "Anxiety Disorders",
            description: "Overcome generalized anxiety, panic attacks, and social anxiety with proven techniques.",
            icon: Brain,
        },
        {
            title: "Depression",
            description: "Find your way back to yourself. Break the cycle of low mood and negative thinking.",
            icon: CloudRain,
        },
        {
            title: "Burnout & Stress",
            description: "Recover from professional exhaustion and build sustainable work-life boundaries.",
            icon: Zap,
        },
        {
            title: "Life Transitions",
            description: "Navigate career changes, relationship shifts, and personal growth with confidence.",
            icon: Briefcase,
        },
    ]

    return (
        <section id="areas" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl font-heading mb-4">
                        Areas of Focus
                    </h2>
                    <p className="text-lg leading-8 text-slate-600">
                        Specialized support for the challenges that matter most.
                    </p>
                </div>

                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {areas.map((area) => (
                        <Card key={area.title} className="hover:border-secondary/50 transition-colors group">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 group-hover:bg-secondary/10 transition-colors">
                                    {area.icon && <area.icon className="h-6 w-6 text-primary group-hover:text-secondary-DEFAULT transition-colors" />}
                                    {!area.icon && <Brain className="h-6 w-6 text-primary" />}
                                    {/* Fallback if icon missing (BatteryWarning might be invalid) */}
                                </div>
                                <CardTitle>{area.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-6 text-slate-600">
                                    {area.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
