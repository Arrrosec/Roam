const links = {
  Product: ["Features", "Pricing", "How it works", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Support: ["Help center", "Contact", "Privacy", "Terms"],
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {/* Brand */}
          <div className="md:w-64 shrink-0">
            <div className="text-white text-2xl font-bold tracking-tight mb-4">
              roam<span className="text-emerald-400">.</span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed">
              AI-powered travel planning for curious minds and adventurous souls.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-1 flex-wrap gap-10">
            {Object.entries(links).map(([category, items]) => (
              <div key={category} className="min-w-[120px]">
                <h4 className="text-white text-sm font-semibold mb-4">
                  {category}
                </h4>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                  <li key={item}>
                    <a
                        href="#"
                        className="text-white/30 hover:text-white/70 text-sm transition"
                    >
                        {item}
                    </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2025 Roam. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/20 text-xs">
            <a href="#" className="hover:text-white/50 transition">Twitter</a>
            <a href="#" className="hover:text-white/50 transition">Instagram</a>
            <a href="#" className="hover:text-white/50 transition">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;