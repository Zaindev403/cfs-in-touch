import Image from "next/image"
export default function Footer(){

    return(
        <>
        <footer className="border-t border-slate-800 py-8 sm:py-12 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
                <div className="flex items-center gap-3">
                    <div className=" p-1.5 rounded-lg flex items-center justify-center opacity-70">
                        <div className="relative h-9 w-9 sm:h-10 sm:w-10 overflow-hidden rounded-lg">
                            <Image 
                                src="/logo.png" 
                                alt="Motion-U Logo" 
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm">Motion-U</h4>
                        <p className="text-slate-500 text-xs">© 2026 Motion-U. All rights reserved.</p>
                    </div>
                </div>
                <div className="flex gap-6 sm:gap-8">
                    <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Instagram</a>
                    <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">GitHub</a>
                    <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">LinkedIn</a>
                </div>
            </div>
        </footer>
        </>
    )
}