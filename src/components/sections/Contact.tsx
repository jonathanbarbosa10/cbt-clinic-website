import { MapPin, Mail, Phone, MessageCircle } from "lucide-react"
import { Button } from "../ui/Button"

export function Contact() {
    return (
        <section id="contact" className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl font-heading mb-6">
                            Get in Touch
                        </h2>
                        <p className="text-lg leading-8 text-slate-600 mb-12">
                            Ready to take the first step? Schedule a consultation or reach out with any questions.
                            I'm here to support your journey.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm text-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold leading-7 text-primary-dark">Office Location</h3>
                                    <p className="mt-1 text-slate-600">
                                        123 Therapy Avenue, Suite 400<br />
                                        Business District, City, ST 12345
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold leading-7 text-primary-dark">Email</h3>
                                    <p className="mt-1 text-slate-600">contact@drclinic.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm text-primary">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold leading-7 text-primary-dark">Phone</h3>
                                    <p className="mt-1 text-slate-600">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20">
                                <MessageCircle className="mr-2 h-5 w-5" />
                                Message on WhatsApp
                            </Button>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-full min-h-[400px] w-full rounded-2xl bg-white p-4 shadow-lg ring-1 ring-slate-900/5">
                        <div className="h-full w-full rounded-xl bg-slate-100 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-74.006,40.7128,12,0/800x600?access_token=YOUR_TOKEN')] bg-cover bg-center opacity-50 grayscale transition-all group-hover:grayscale-0"></div>
                            {/* Note: Standard map styling. Using a simple text here for the placeholder artifact. */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                                <MapPin className="h-12 w-12 text-primary mb-4" />
                                <span className="text-slate-500 font-medium">Google Maps Integration</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
