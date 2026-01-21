import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t border-glass-border bg-black">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/ORamA.png"
                            alt="Orama Logo"
                            width={48}
                            height={48}
                            className="dark:invert"
                        />
                        <div>
                            <div className="text-xl font-semibold">orama.</div>
                            <div className="text-xs text-gray-400">by caden erwin & jayden mccarthy</div>
                            <div className="text-xs text-gray-500">RIGHTS RESERVED, 2026</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 text-sm">
                        <div className="font-semibold">Contact</div>
                        <div className="text-gray-400">951-842-9745 (CE)</div>
                        <div className="text-gray-400">909-353-8775 (JM)</div>
                        <div className="text-xs text-gray-500 mt-2">cerwin42451@beaumontusd.k12.ca.us</div>
                        <div className="text-xs text-gray-500">jmccarthy35750@beaumontusd.k12.ca.us</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
