export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {/* Social Socials Placeholders */}
                    <div className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                        <span className="sr-only">Instagram</span>
                        Instragram
                    </div>
                    <div className="text-slate-400 hover:text-primary transition-colors cursor-pointer">
                        <span className="sr-only">LinkedIn</span>
                        LinkedIn
                    </div>
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-slate-500">
                        &copy; 2026 Dr. Name Psychology. All rights reserved. CRP 00/00000.
                    </p>
                    <div className="mt-2 text-center text-xs text-slate-400 flex justify-center gap-4">
                        <a href="#" className="hover:text-primary-dark">Privacy Policy</a>
                        <a href="#" className="hover:text-primary-dark">Code of Ethics</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
