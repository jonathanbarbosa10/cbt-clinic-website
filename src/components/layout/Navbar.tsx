import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/Button"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: "Metodologia", href: "#methodology" },
        { name: "Áreas de Atuação", href: "#areas" },
        { name: "Sobre", href: "#about" },
        { name: "Dúvidas", href: "#faq" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <a href="#" className="font-heading text-xl font-bold text-primary-dark">
                        Dr. Nome <span className="text-secondary-DEFAULT font-light">Psicólogo(a)</span>
                    </a>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 transition-colors hover:text-primary-dark"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="accent" size="sm">
                        Agendar Consulta
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="text-slate-600 hover:text-primary-dark"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Abrir menu principal</span>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-dark"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="mt-4 px-3">
                            <Button variant="accent" className="w-full">
                                Agendar Consulta
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
