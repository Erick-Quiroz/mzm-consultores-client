"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black pt-20 pb-10 px-4">
      {/* Fondo con opacidad y efecto de cuadrícula */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: "url('fondo.webp')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
      </div>

      {/* Contenido del footer */}
      <div className="relative container mx-auto px-4 grid gap-6 text-center md:grid-cols-3">
        {/* Columna 1: Empresa */}
        <div>
          <h3 className="text-lg font-semibold text-white">MZM</h3>
          <p className="mt-2 text-gray-300">Consultores SRL</p>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contacto</h3>
          <p className="mt-2 text-gray-300">
            📍 Calle Jose Quintin Mendoza N°1286
          </p>
          <p className="text-gray-300">N°1286 Edificio Buganvillas 7D</p>
          <p className="text-gray-300">📧 mariogroverzalles@gmail.com</p>
          <p className="text-gray-300">📱 +591 71720957</p>
          <p className="text-gray-300">📞 (0591-4)4661008</p>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div>
          <h3 className="text-lg font-semibold text-white">Síguenos</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="#" className="text-gray-400 hover:text-white">
              🌐 Facebook
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              🐦 Twitter
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              📸 Instagram
            </Link>
          </div>
        </div>
      </div>

      {/* Línea inferior y derechos reservados */}
      <div className="relative mt-6 border-t border-gray-700 pt-2 text-center text-sm text-gray-400">
        <span>
          © {new Date().getFullYear()} MZM Consultores S.R.L - Todos los
          derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
