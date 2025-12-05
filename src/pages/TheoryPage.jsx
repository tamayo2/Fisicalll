import TheoryCard from "../components/Theory/TheoryCard";

const BAND_INFO = [
    {
        id: "radio",
        name: "Ondas de radio",
        range: "≈ 10³ Hz – 10⁹ Hz",
        uses: "Radiodifusión, radio AM/FM, comunicaciones de larga distancia.",
    },
    {
        id: "micro",
        name: "Microondas",
        range: "≈ 10⁹ Hz – 10¹¹ Hz",
        uses: "Wi‑Fi, Bluetooth, radares, hornos microondas.",
    },
    {
        id: "ir",
        name: "Infrarrojo",
        range: "≈ 10¹¹ Hz – 4×10¹⁴ Hz",
        uses: "Sensores térmicos, cámaras infrarrojas, controles remotos.",
    },
    {
        id: "vis",
        name: "Luz visible",
        range: "≈ 4×10¹⁴ Hz – 7.5×10¹⁴ Hz",
        uses: "Visión humana, iluminación, pantallas.",
    },
    {
        id: "uv",
        name: "Ultravioleta",
        range: "≈ 7.5×10¹⁴ Hz – 10¹⁶ Hz",
        uses: "Esterilización, fluorescencia, procesos fotoquímicos.",
    },
    {
        id: "x",
        name: "Rayos X",
        range: "≈ 10¹⁶ Hz – 10¹⁹ Hz",
        uses: "Diagnóstico médico, análisis de materiales.",
    },
    {
        id: "gamma",
        name: "Rayos gamma",
        range: "> 10¹⁹ Hz",
        uses: "Física nuclear, radioterapia, astrofísica de alta energía.",
    },
];

function BandCard({ name, range, uses }) {
    return (
        <div className="bg-white rounded-2xl shadow p-4 border border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900">{name}</h3>
            <p className="text-xs text-slate-500 mt-1">Rango aproximado: {range}</p>
            <p className="text-xs text-slate-700 mt-2">{uses}</p>
        </div>
    );
}

export default function TheoryPage() {
    return (
        <div className="min-h-screen bg-slate-100">
            <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
                {/* Encabezado */}
                <header className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-slate-900">
                        Teoría del Espectro Electromagnético
                    </h1>
                    <p className="text-sm text-slate-600">
                        Sección teórica del proyecto: resume los conceptos necesarios para
                        entender las simulaciones 2D y 3D desarrolladas en el software.
                    </p>
                </header>

                {/* Tarjeta de fundamentos (la que ya habíamos creado) */}
                <TheoryCard />

                {/* Sección de bandas del espectro */}
                <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-slate-900">
                        Mapa de bandas del espectro
                    </h2>
                    <p className="text-sm text-slate-700">
                        El espectro electromagnético se organiza en bandas que abarcan desde las
                        frecuencias más bajas (ondas de radio) hasta las más altas (rayos gamma).
                        Cada banda se utiliza en tecnologías y aplicaciones específicas.
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 mt-2">
                        {BAND_INFO.map((band) => (
                            <BandCard key={band.id} {...band} />
                        ))}
                    </div>
                </section>

                {/* Sección de ecuaciones clave */}
                <section className="space-y-3">
                    <h2 className="text-xl font-semibold text-slate-900">
                        Ecuaciones fundamentales
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-white rounded-2xl shadow-inner p-4">
                            <h3 className="font-semibold text-slate-800 mb-2">
                                Relación entre frecuencia y longitud de onda
                            </h3>
                            <div className="bg-slate-100 rounded-lg p-3 text-center mb-2">
                                <code className="font-mono text-sm">λ = c / f</code>
                            </div>
                            <p className="text-slate-700">
                                Donde <strong>λ</strong> es la longitud de onda, <strong>f</strong>{" "}
                                la frecuencia y <strong>c</strong> la velocidad de la luz
                                (<strong>c ≈ 3×10⁸ m/s</strong>). Esta relación se utiliza en la
                                calculadora del software para completar el dato faltante.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-inner p-4">
                            <h3 className="font-semibold text-slate-800 mb-2">
                                Energía asociada al fotón
                            </h3>
                            <div className="bg-slate-100 rounded-lg p-3 text-center mb-2">
                                <code className="font-mono text-sm">E = h · f</code>
                            </div>
                            <p className="text-slate-700">
                                Cada fotón de luz lleva una energía proporcional a su frecuencia.
                                En el proyecto se calcula la energía tanto en joules (J) como en
                                electronvoltios (eV), usando la constante de Planck{" "}
                                <strong>h = 6.626×10⁻³⁴ J·s</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Relación con el software */}
                <section className="space-y-3 mb-8">
                    <h2 className="text-xl font-semibold text-slate-900">
                        Relación con el simulador desarrollado
                    </h2>
                    <p className="text-sm text-slate-700">
                        El software implementado utiliza estas ecuaciones para:
                    </p>
                    <ul className="list-disc ml-6 text-sm text-slate-700 space-y-1">
                        <li>
                            Calcular frecuencia, longitud de onda y energía a partir de los datos
                            ingresados por el usuario.
                        </li>
                        <li>
                            Determinar en qué banda del espectro se encuentra la radiación y
                            mostrarla en la barra de espectro.
                        </li>
                        <li>
                            Generar las simulaciones 2D y 3D ajustando la forma de la onda según
                            la frecuencia y la longitud de onda.
                        </li>
                        <li>
                            Actuar como un laboratorio virtual donde es posible experimentar de
                            forma segura con parámetros físicos difíciles de observar directamente.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}