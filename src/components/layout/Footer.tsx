export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <p>&copy; {new Date().getFullYear()} Dr. Nome Psicologia. Todos os direitos reservados.</p>
                    <p className="text-sm mt-2">Dedicado ao seu bem-estar mental e crescimento.</p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Email</a>
                </div>
            </div>
        </footer>
    )
}
