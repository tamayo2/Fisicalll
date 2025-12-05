export default function TheoryCard() {
    return (
        <section className="bg-white rounded-2xl shadow-lg p-6 leading-relaxed">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
                Fundamentos Teóricos del Espectro Electromagnético
            </h2>

            <p className="text-sm text-slate-700 mb-3">
                Las ondas electromagnéticas son perturbaciones que se propagan en el espacio
                transportando energía sin necesidad de un medio material. Están formadas por
                un campo eléctrico y uno magnético que oscilan perpendicularmente entre sí
                y a la dirección de propagación.
            </p>

            <h3 className="text-lg font-medium text-slate-800 mt-4 mb-2">
                Relación entre frecuencia y longitud de onda
            </h3>

            <p className="text-sm text-slate-700 mb-3">
                La frecuencia (<strong>f</strong>) y la longitud de onda (<strong>λ</strong>)
                están relacionadas por la velocidad de la luz (<strong>c</strong>):
            </p>

            <div className="bg-slate-100 rounded-lg p-4 text-center my-3 shadow-inner">
                <code className="font-mono text-sm">
                    λ = c / f
                </code>
            </div>

            <p className="text-sm text-slate-700 mb-4">
                Donde <strong>c = 3 × 10⁸ m/s</strong>.
                Con esta ecuación, es posible obtener la frecuencia si conocemos la longitud
                de onda, o viceversa.
            </p>

            <h3 className="text-lg font-medium text-slate-800 mt-4 mb-2">
                Energía del fotón
            </h3>

            <p className="text-sm text-slate-700 mb-3">
                Cada fotón posee una energía asociada a su frecuencia, dada por la ecuación de Planck:
            </p>

            <div className="bg-slate-100 rounded-lg p-4 text-center my-3 shadow-inner">
                <code className="font-mono text-sm">
                    E = h × f
                </code>
            </div>

            <p className="text-sm text-slate-700 mb-4">
                Donde <strong>h = 6.626 × 10⁻³⁴ J·s</strong> es la constante de Planck.
                Esta relación indica que las ondas de mayor frecuencia, como los rayos X
                y gamma, transportan más energía.
            </p>

            <h3 className="text-lg font-medium text-slate-800 mt-4 mb-2">
                El espectro electromagnético
            </h3>

            <p className="text-sm text-slate-700">
                El espectro electromagnético abarca todas las frecuencias posibles de
                radiación EM, desde ondas de radio de muy baja frecuencia hasta rayos gamma
                extremadamente energéticos. Cada región tiene aplicaciones características:
            </p>

            <ul className="list-disc ml-6 text-sm text-slate-700 mt-2 space-y-1">
                <li><strong>Radio:</strong> telecomunicaciones, radiodifusión.</li>
                <li><strong>Microondas:</strong> Wi‑Fi, radares, hornos microondas.</li>
                <li><strong>Infrarrojo:</strong> sensores térmicos, controles remotos.</li>
                <li><strong>Visible:</strong> percepción humana del color.</li>
                <li><strong>Ultravioleta:</strong> esterilización, fluorescencia.</li>
                <li><strong>Rayos X:</strong> diagnóstico médico.</li>
                <li><strong>Rayos gamma:</strong> física nuclear, medicina avanzada.</li>
            </ul>

            <p className="text-sm text-slate-700 mt-4">
                Esta aplicación permite visualizar de forma interactiva la posición de una
                frecuencia o longitud de onda en el espectro, así como sus propiedades físicas.
            </p>
        </section>
    );
}
