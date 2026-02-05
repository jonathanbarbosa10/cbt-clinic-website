import { GraduationCap, Award, Building2 } from "lucide-react"

export function Authority() {
    return (
        <section className="border-y border-slate-100 bg-white py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 justify-items-center text-center">

                    <div className="flex flex-col items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-primary">
                            <Award className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-heading font-semibold text-primary-dark">CRP 00/00000</p>
                            <p className="text-xs text-slate-500">Psicólogo(a) Credenciado(a)</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-primary">
                            <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-heading font-semibold text-primary-dark">Especialista em TCC</p>
                            <p className="text-xs text-slate-500">Mestre em Neuropsicologia</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-primary">
                            <Building2 className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-heading font-semibold text-primary-dark">Consultório Particular</p>
                            <p className="text-xs text-slate-500">Fundado em 2026</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
