import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Star,
  Clock,
  ShieldCheck,
  Microscope,
  HeartHandshake,
  MapPin,
  Phone,
  Stethoscope,
  Activity,
  Search,
  Sparkles,
  Navigation,
} from "lucide-react";
import drRafael from "@/assets/dr-rafael.jpg";
import clinicHero from "@/assets/clinic-hero.jpg";

const WHATSAPP_URL =
  "https://wa.me/5518996471470?text=" +
  encodeURIComponent("Olá, Dr. Rafael! Gostaria de agendar uma consulta/urgência.");
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Av. Otto Ribeiro, 731 - Jardim Paulista, Assis - SP");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tratamento de Canal Sem Dor em Assis-SP | Dr. Rafael Mamede" },
      {
        name: "description",
        content:
          "Endodontista em Assis-SP. Tratamento de canal rápido, seguro e sem dor. Atendimento humanizado, tecnologia de ponta e urgências 24h. Nota 5.0 no Google. Agende pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Tratamento de Canal Sem Dor em Assis-SP | Dr. Rafael Mamede",
      },
      {
        property: "og:description",
        content:
          "Especialista em Endodontia com atendimento humanizado e suporte 24h para urgências. ★ 5.0 no Google.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Dr. Rafael Mamede – Endodontia",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Otto Ribeiro, 731 - Jardim Paulista",
            addressLocality: "Assis",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          telephone: "+55-18-99647-1470",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "17",
          },
          openingHours: "Mo-Su 00:00-23:59",
        }),
      },
    ],
  }),
  component: LandingPage,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function CtaButton({
  children,
  className = "",
  pulse = false,
  variant = "solid",
}: {
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
  variant?: "solid" | "ghost" | "outline";
}) {
  const styles: Record<string, string> = {
    solid: "bg-whatsapp text-whatsapp-foreground shadow-lg",
    ghost:
      "bg-primary-foreground/15 text-primary-foreground backdrop-blur-sm border border-primary-foreground/40",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  };
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] transition-all hover:scale-[1.03] active:scale-[0.98] ${
        styles[variant]
      } ${pulse ? "animate-pulse-ring" : ""} ${className}`}
    >
      {children}
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
    </a>
  );
}

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-star text-star" />
      ))}
    </span>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== HERO ===== */}
      <header
        className="relative flex min-h-[92vh] flex-col overflow-hidden bg-primary bg-cover bg-center"
        style={{ backgroundImage: `url(${clinicHero})` }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />

        <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary-foreground/40 text-primary-foreground">
              <Stethoscope className="h-5 w-5" />
            </span>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-base font-light tracking-wide text-primary-foreground">
                Dr. <span className="font-semibold">Rafael Mamede</span>
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">
                Endodontia
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-8 lg:flex">
            {[
              ["Diferenciais", "#diferenciais"],
              ["Serviços", "#servicos"],
              ["Sobre", "#sobre"],
              ["Avaliações", "#avaliacoes"],
              ["Localização", "#localizacao"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-xs uppercase tracking-[0.14em] text-primary-foreground/85 transition-colors hover:text-primary-foreground"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm">
            <Stars />
            <span className="text-xs font-medium tracking-wide text-primary-foreground">
              5.0 no Google • 17+ avaliações
            </span>
          </div>

          <h1 className="text-3xl font-light leading-tight tracking-tight text-primary-foreground sm:text-5xl sm:leading-[1.15]">
            Tratamento de canal <span className="font-semibold">rápido, seguro e sem dor</span>{" "}
            em Assis-SP
          </h1>

          <p className="mt-5 max-w-2xl text-base font-light text-primary-foreground/85 sm:text-lg">
            Especialista em Endodontia com atendimento humanizado, tecnologia de ponta e
            suporte 24h para urgências.
          </p>

          <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <CtaButton variant="ghost" className="w-full sm:w-auto">
              Agendar
            </CtaButton>
            <a
              href="#servicos"
              className="inline-flex w-full items-center justify-center rounded-full border border-primary-foreground/70 px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary sm:w-auto"
            >
              Saiba mais
            </a>
          </div>

          <p className="mt-7 flex items-center gap-2 text-xs font-light text-primary-foreground/75">
            <Clock className="h-3.5 w-3.5" /> Atendimento 24h • Plantão de urgências todos os dias
          </p>
        </div>
      </header>

      {/* ===== BANNER DE URGÊNCIA ===== */}
      <section className="bg-accent">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex min-w-0 items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground animate-float-soft">
              <Activity className="h-7 w-7" />
            </span>
            <div className="min-w-0">
              <h2 className="text-lg font-light text-accent-foreground sm:text-xl">
                Está com dor de dente agora?
              </h2>
              <p className="text-sm font-medium text-accent-foreground/80">
                Não espere a dor piorar. Atendimento de urgência com alívio rápido e seguro.
              </p>
            </div>
          </div>
          <CtaButton pulse className="shrink-0">
            Atendimento de Urgência 24h
          </CtaButton>
        </div>
      </section>

      {/* ===== DIFERENCIAIS ===== */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary/60">
            Por que escolher o Dr. Rafael
          </p>
          <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
            Cuidado que une tecnologia e tranquilidade
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: HeartHandshake,
              title: "Tratamento Humanizado",
              text: "Foco total no seu conforto: anestesia eficiente e procedimento com zero dor, do início ao fim.",
            },
            {
              icon: Microscope,
              title: "Tecnologia Avançada",
              text: "Diagnóstico preciso com recursos modernos e tratamento concluído em poucas sessões.",
            },
            {
              icon: ShieldCheck,
              title: "Especialista em Endodontia",
              text: "Atendimento dedicado exclusivamente a salvar o seu dente, com segurança e experiência.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== SERVIÇOS ===== */}
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary/60">Serviços</p>
            <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
              Especialidades em Endodontia
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Stethoscope,
                title: "Tratamento e Retratamento de Canal",
                text: "Procedimentos precisos para eliminar a infecção e preservar seu dente natural.",
              },
              {
                icon: Activity,
                title: "Urgência e Dor Aguda",
                text: "Atendimento imediato, 24h, para aliviar a dor e tratar a causa com segurança.",
              },
              {
                icon: Search,
                title: "Diagnóstico de Dores Orofaciais",
                text: "Investigação detalhada para identificar a origem exata da sua dor.",
              },
              {
                icon: Sparkles,
                title: "Micro-Endodontia e Preservação",
                text: "Técnicas minimamente invasivas com microscópio para máxima preservação dentária.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CtaButton>Agendar minha avaliação</CtaButton>
          </div>
        </div>
      </section>

      {/* ===== SOBRE ===== */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid items-center gap-10 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] bg-accent" aria-hidden="true" />
            <img
              src={drRafael}
              alt="Dr. Rafael Mamede, endodontista em Assis-SP"
              width={896}
              height={1024}
              loading="lazy"
              className="relative w-full rounded-[2rem] object-cover shadow-xl"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary/60">
              Sobre o especialista
            </p>
            <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
              Dr. Rafael Mamede
            </h2>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              Endodontista • Especialista em Tratamento de Canal
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Dedicado à saúde bucal da comunidade de Assis e região, o Dr. Rafael Mamede
              construiu sua reputação com um atendimento que coloca o paciente em primeiro
              lugar: escuta atenta, explicações claras e procedimentos sem dor.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Seu compromisso é devolver o bem-estar e o sorriso de cada paciente — salvando
              dentes que muitos acreditavam perdidos, com tecnologia de ponta e um cuidado
              genuinamente humano.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <CtaButton>Falar com o Dr. Rafael</CtaButton>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                <Stars /> 5.0 no Google
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROVA SOCIAL ===== */}
      <section className="bg-primary">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <div className="text-center">
            <div className="mx-auto inline-flex items-center gap-3 rounded-2xl bg-primary-foreground/10 px-5 py-3">
              <span className="text-3xl font-light text-primary-foreground">5.0</span>
              <div className="text-left leading-tight">
                <Stars />
                <p className="text-xs font-semibold text-primary-foreground/80">
                  17+ avaliações no Google
                </p>
              </div>
            </div>
            <h2 className="mt-6 text-2xl font-light tracking-tight text-primary-foreground sm:text-3xl">
              Quem tratou, recomenda
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                name: "Mariana S.",
                text: "Estava com muito medo do tratamento de canal, mas o Dr. Rafael me explicou tudo com calma. Não senti dor nenhuma. Profissional excepcional!",
              },
              {
                name: "Carlos E.",
                text: "Tive uma urgência num domingo à noite e fui atendido prontamente. Alívio imediato da dor e um cuidado que eu nunca tinha visto. Recomendo de olhos fechados.",
              },
              {
                name: "Fernanda L.",
                text: "Consultório moderno, atendimento humanizado e resultado perfeito. Salvou meu dente que eu achava que teria que extrair. Nota mil!",
              },
            ].map(({ name, text }) => (
              <figure
                key={name}
                className="rounded-2xl bg-card p-6 shadow-lg"
              >
                <Stars />
                <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  “{text}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-sm font-bold text-primary">
                    {name[0]}
                  </span>
                  <span className="text-sm font-bold">{name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCALIZAÇÃO ===== */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary/60">
            Localização
          </p>
          <h2 className="mt-2 text-2xl font-light tracking-tight sm:text-3xl">
            Perto de você, em Assis-SP
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col justify-center gap-5 rounded-2xl border border-border bg-card p-7">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-bold">Endereço</p>
                <p className="text-sm text-muted-foreground">
                  Av. Otto Ribeiro, 731 - Jardim Paulista
                  <br />
                  Assis - SP
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-bold">Telefone / WhatsApp</p>
                <p className="text-sm text-muted-foreground">(18) 99647-1470</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-bold">Atendimento</p>
                <p className="text-sm text-muted-foreground">
                  24h • Plantão de Urgências
                </p>
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-primary px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Navigation className="h-4 w-4" />
                Como Chegar (Google Maps)
              </a>
              <CtaButton className="px-5 py-3 text-sm">Chamar no WhatsApp</CtaButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Mapa — Dr. Rafael Mamede, Av. Otto Ribeiro, 731, Assis-SP"
              src="https://www.google.com/maps?q=Av.+Otto+Ribeiro,+731+-+Jardim+Paulista,+Assis+-+SP&output=embed"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL / FOOTER ===== */}
      <footer className="bg-primary">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center">
          <h2 className="text-2xl font-light tracking-tight text-primary-foreground sm:text-3xl">
            Não conviva com a dor. Resolva hoje.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm font-medium text-primary-foreground/75">
            Agende sua consulta ou urgência diretamente pelo WhatsApp. Resposta rápida,
            atendimento 24h.
          </p>
          <div className="mt-7">
            <CtaButton pulse>Falar com o Dr. Rafael no WhatsApp</CtaButton>
          </div>

          <div className="mt-12 grid gap-8 border-t border-primary-foreground/15 pt-8 text-left sm:grid-cols-3">
            <div>
              <p className="font-bold text-primary-foreground">Dr. Rafael Mamede</p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                Endodontia • Tratamento de Canal
                <br />
                Assis - SP
              </p>
            </div>
            <div>
              <p className="font-bold text-primary-foreground">Horários</p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                Atendimento 24h
                <br />
                Plantão de Urgências todos os dias
              </p>
            </div>
            <div>
              <p className="font-bold text-primary-foreground">Contato</p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                (18) 99647-1470
                <br />
                Av. Otto Ribeiro, 731 - Jardim Paulista
              </p>
            </div>
          </div>

          <p className="mt-8 text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Dr. Rafael Mamede – Endodontia. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>

      {/* ===== BOTÃO FLUTUANTE WHATSAPP ===== */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl animate-pulse-ring transition-transform hover:scale-110 active:scale-95"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </div>
  );
}
