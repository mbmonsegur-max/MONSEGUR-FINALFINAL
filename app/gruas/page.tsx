"use client";

import { useMemo, useState } from "react";

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
  const [busqueda, setBusqueda] = useState("");

  const aseguradorasFiltradas = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();

    if (!texto) return aseguradoras;

    return aseguradoras.filter(
      (aseguradora) =>
        aseguradora.nombre.toLowerCase().includes(texto) ||
        aseguradora.prestador.toLowerCase().includes(texto)
    );
  }, [busqueda]);

  return (
    <main className="min-h-screen bg-[#F3FBF8] px-4 py-10 text-[#214E49] sm:py-14">
      <section className="mx-auto max-w-6xl">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#DDF3ED] px-4 py-2 text-sm font-bold text-[#347B71]">
            Monseguro · Asistencia
          </span>

          <div className="mt-6 text-5xl">🚗</div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#205A57] sm:text-5xl">
            Asistencia en ruta
          </h1>

          <p className="mt-4 text-lg leading-7 text-[#587571]">
            Elegí tu aseguradora y contactá directamente al prestador de grúas
            o auxilio mecánico.
          </p>

          <div className="mx-auto mt-7 max-w-xl">
            <label htmlFor="buscador" className="sr-only">
              Buscar aseguradora
            </label>

            <input
              id="buscador"
              type="search"
              value={busqueda}
              onChange={(event) => setBusqueda(event.target.value)}
              placeholder="Buscar aseguradora..."
              className="w-full rounded-2xl border border-[#CBE8E0] bg-white px-5 py-4 text-base text-[#214E49] shadow-sm outline-none transition placeholder:text-[#8AA6A1] focus:border-[#74C6B7] focus:ring-4 focus:ring-[#74C6B7]/20"
            />
          </div>
        </header>

        {aseguradorasFiltradas.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aseguradorasFiltradas.map((aseguradora) => {
              const mensajeWhatsApp = encodeURIComponent(
                `Hola, necesito solicitar una grúa. Mi aseguradora es ${aseguradora.nombre}. Mi patente es: `
              );

              const mensajeSms = encodeURIComponent(
                aseguradora.sms?.texto ?? ""
              );

              return (
                <article
                  key={aseguradora.nombre}
                  className="flex flex-col rounded-3xl border border-[#D8ECE7] bg-white p-6 shadow-[0_12px_35px_rgba(74,135,124,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(74,135,124,0.14)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6B9B92]">
                        Aseguradora
                      </p>

                      <h2 className="mt-2 text-2xl font-bold text-[#205A57]">
                        {aseguradora.nombre}
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5F6F1] text-2xl">
                      🚘
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-[#F5FBF9] p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#78928E]">
                      Prestador
                    </p>
                    <p className="mt-1 font-semibold text-[#315F59]">
                      {aseguradora.prestador}
                    </p>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {aseguradora.telefono && (
                      <div className="rounded-2xl border border-[#DCEDE9] bg-[#FBFEFD] p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-[#78928E]">
                          Desde Argentina
                        </p>

                        <p className="mt-1 text-xl font-bold text-[#205A57]">
                          {aseguradora.telefonoVisible}
                        </p>

                        <a
                          href={`tel:${aseguradora.telefono}`}
                          className="mt-3 flex min-h-12 items-center justify-center rounded-xl bg-[#6EC6B8] px-4 text-center font-bold text-white transition hover:bg-[#59B6A7]"
                        >
                          Llamar al 0800
                        </a>
                      </div>
                    )}

                    {aseguradora.exterior && (
                      <div className="rounded-2xl border border-[#DCEDE9] bg-[#FBFEFD] p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-[#78928E]">
                          Exterior o países limítrofes
                        </p>

                        <p className="mt-1 text-xl font-bold text-[#205A57]">
                          {aseguradora.exteriorVisible}
                        </p>

                        <a
                          href={`tel:${aseguradora.exterior}`}
                          className="mt-3 flex min-h-12 items-center justify-center rounded-xl bg-[#3F7770] px-4 text-center font-bold text-white transition hover:bg-[#315F59]"
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
                        className="flex min-h-12 items-center justify-center rounded-xl bg-[#9ADBCD] px-4 text-center font-bold text-[#174E4A] transition hover:bg-[#82CFC0]"
                      >
                        Contactar por WhatsApp
                      </a>
                    )}

                    {aseguradora.sms && (
                      <div className="rounded-2xl border border-[#CDE8E1] bg-[#EDF8F5] p-4">
                        <p className="text-sm text-[#315F59]">
                          Enviá un SMS al{" "}
                          <strong>{aseguradora.sms.numero}</strong> con el texto:
                        </p>

                        <p className="mt-1 font-bold text-[#205A57]">
                          {aseguradora.sms.texto}
                        </p>

                        <a
                          href={`sms:${aseguradora.sms.numero}?body=${mensajeSms}`}
                          className="mt-3 flex min-h-12 items-center justify-center rounded-xl bg-[#B7E5DB] px-4 text-center font-bold text-[#205A57] transition hover:bg-[#A1D9CD]"
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
        ) : (
          <div className="mx-auto max-w-xl rounded-3xl border border-[#D8ECE7] bg-white p-8 text-center shadow-sm">
            <p className="text-lg font-bold text-[#205A57]">
              No encontramos esa aseguradora
            </p>
            <p className="mt-2 text-[#6A8580]">
              Revisá el nombre o buscá por el prestador de asistencia.
            </p>
          </div>
        )}

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#D8ECE7] bg-white/80 p-5 text-center">
          <p className="text-sm leading-6 text-[#66817C]">
            Tené preparada tu ubicación, patente y número de póliza. Los
            teléfonos y prestadores pueden modificarse según la aseguradora, el
            producto o el plan contratado.
          </p>
        </div>
      </section>
    </main>
  );
}
