import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grúas y auxilio mecánico | Monseguro",
  description:
    "Teléfonos de asistencia mecánica y grúas agrupados por aseguradora.",
};

type Aseguradora = {
  nombre: string;
  prestador: string;
  telefonoVisible?: string;
  telefono?: string;
  exteriorVisible?: string;
  exterior?: string;
  whatsapp?: string;
  sms?: {
    numero: string;
    texto: string;
  };
};

const aseguradoras: Aseguradora[] = [
  {
    nombre: "Allianz",
    prestador: "RED SOS",
    telefonoVisible: "0800-888-24324",
    telefono: "080088824324",
    exteriorVisible: "+54 351 485-8321",
    exterior: "+543514858321",
    sms: {
      numero: "70703",
      texto: "SOS + patente",
    },
  },
  {
    nombre: "Federación Patronal",
    prestador: "SOS",
    telefonoVisible: "0800-222-0022",
    telefono: "08002220022",
    exteriorVisible: "+54 351 485-8321",
    exterior: "+543514858321",
    whatsapp: "5491128080012",
    sms: {
      numero: "70703",
      texto: "SOS + patente",
    },
  },
  {
    nombre: "Sancor Seguros",
    prestador: "MAWDY",
    telefonoVisible: "0800-333-2766",
    telefono: "08003332766",
    exteriorVisible: "+54 342 410-3221",
    exterior: "+543424103221",
    whatsapp: "5493493520650",
  },
  {
    nombre: "Zurich",
    prestador: "ZURIHELP",
    telefonoVisible: "0800-222-1600",
    telefono: "08002221600",
    exteriorVisible: "+54 351 485-8321",
    exterior: "+543514858321",
  },
  {
    nombre: "Provincia Seguros",
    prestador: "RED SOS",
    telefonoVisible: "0800-333-2020",
    telefono: "08003332020",
    exteriorVisible: "+54 11 4646-7454",
    exterior: "+541146467454",
  },
  {
    nombre: "Galicia Seguros",
    prestador: "ASISTENCIA GALICIA",
    telefonoVisible: "0800-999-76925",
    telefono: "080099976925",
    exteriorVisible: "+54 11 4324-1380",
    exterior: "+541143241380",
  },
];

export default function GruasPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900">
      <section className="mx-auto max-w-6xl">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
            Monseguro · Asistencia
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Grúas y auxilio mecánico
          </h1>

          <p className="mt-4 text-lg leading-7 text-slate-600">
            Buscá tu aseguradora y comunicate directamente con el prestador de
            asistencia. Tené preparada tu ubicación, la patente y el número de
            póliza.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aseguradoras.map((aseguradora) => {
            const mensajeWhatsApp = encodeURIComponent(
              `Hola, necesito solicitar una grúa. Mi aseguradora es ${aseguradora.nombre}. Mi patente es: `
            );

            const mensajeSms = encodeURIComponent(
              aseguradora.sms?.texto ?? ""
            );

            return (
              <article
                key={aseguradora.nombre}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-bold">{aseguradora.nombre}</h2>

                <p className="mt-2 text-sm text-slate-500">
                  Prestador: {aseguradora.prestador}
                </p>

                <div className="mt-5 grid gap-3">
                  {aseguradora.telefono && (
                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        Desde Argentina
                      </p>

                      <p className="mt-1 text-xl font-bold">
                        {aseguradora.telefonoVisible}
                      </p>

                      <a
                        href={`tel:${aseguradora.telefono}`}
                        className="mt-3 flex min-h-12 items-center justify-center rounded-xl bg-orange-600 px-4 text-center font-bold text-white transition hover:bg-orange-700"
                      >
                        Llamar al 0800
                      </a>
                    </div>
                  )}

                  {aseguradora.exterior && (
                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        Desde el exterior o países limítrofes
                      </p>

                      <p className="mt-1 text-xl font-bold">
                        {aseguradora.exteriorVisible}
                      </p>

                      <a
                        href={`tel:${aseguradora.exterior}`}
                        className="mt-3 flex min-h-12 items-center justify-center rounded-xl bg-slate-800 px-4 text-center font-bold text-white transition hover:bg-slate-900"
                      >
                        Llamar desde el exterior
                      </a>
                    </div>
                  )}

                  {aseguradora.whatsapp && (
                    <a
                      href={`https://wa.me/${aseguradora.whatsapp}?text=${mensajeWhatsApp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-12 items-center justify-center rounded-xl bg-green-600 px-4 text-center font-bold text-white transition hover:bg-green-700"
                    >
                      Contactar por WhatsApp
                    </a>
                  )}

                  {aseguradora.sms && (
                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                      <p className="text-sm text-blue-900">
                        Enviá un SMS al{" "}
                        <strong>{aseguradora.sms.numero}</strong> con el texto:
                      </p>

                      <p className="mt-1 font-bold text-blue-950">
                        {aseguradora.sms.texto}
                      </p>

                      <a
                        href={`sms:${aseguradora.sms.numero}?body=${mensajeSms}`}
                        className="mt-3 flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-4 text-center font-bold text-white transition hover:bg-blue-700"
                      >
                        Enviar SMS
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-slate-500">
          Los teléfonos y prestadores pueden modificarse según la aseguradora,
          el producto o el plan contratado. Verificá también la información
          incluida en tu póliza.
        </p>
      </section>
    </main>
  );
}
