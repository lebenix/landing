// Final CTA banner — closing call to action
export default function CtaBanner() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto bg-[#3BA58F] rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Empieza a trabajar con las herramientas que tu práctica merece
        </h2>
        <p className="text-lg text-white/80 mb-8">
          Empieza gratis. Sin tarjeta de crédito. Configura tu centro en
          minutos.
        </p>
        <a
          href="https://app.lebenix.com/register"
          className="inline-block bg-white text-[#3BA58F] font-semibold text-lg px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors"
        >
          Crear cuenta gratis
        </a>
      </div>
    </section>
  );
}
