import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "../ui/Button"

export function Contact() {
    return (
        <section id="contact" className="bg-white py-24 sm:py-32 border-t border-slate-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl font-heading mb-6">
                            Entre em Contato
                        </h2>
                        <p className="text-lg leading-8 text-slate-600 mb-10 font-body">
                            Pronto para dar o próximo passo? Entre em contato para agendar sua consulta inicial ou tirar dúvidas.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-none flex items-center justify-center h-12 w-12 rounded-full bg-secondary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary-dark">Localização</h3>
                                    <p className="text-slate-600">Rua Exemplo, 123, Sala 405</p>
                                    <p className="text-slate-600">Bairro Central, Cidade, UF</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-none flex items-center justify-center h-12 w-12 rounded-full bg-secondary/10 text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary-dark">Telefone</h3>
                                    <p className="text-slate-600">(11) 99999-9999</p>
                                    <p className="text-sm text-slate-500">Disponível no WhatsApp</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-none flex items-center justify-center h-12 w-12 rounded-full bg-secondary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary-dark">Email</h3>
                                    <p className="text-slate-600">contato@drnome.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-none flex items-center justify-center h-12 w-12 rounded-full bg-secondary/10 text-primary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary-dark">Horário de Atendimento</h3>
                                    <p className="text-slate-600">Seg - Sex: 9h às 18h</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent">
                                Agendar via WhatsApp
                            </Button>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-full min-h-[400px] w-full rounded-2xl bg-white p-4 shadow-lg ring-1 ring-slate-900/5">
                        <div className="h-full w-full rounded-xl bg-slate-100 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                                <span className="text-slate-400 font-medium">Mapa Google (Placeholder)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
