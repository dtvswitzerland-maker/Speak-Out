import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Badge } from "./components/ui/badge";
import { CheckCircle, Shield, Megaphone, Phone, Video, Globe2, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const LANGS = [
  "Albanisch", "Amharisch", "Arabisch", "Englisch", "Französisch", "Farsi/Dari",
  "Kurdisch/Kurmancî", "Portugiesisch", "Rumänisch", "Russisch", "Serbisch",
  "Somalisch", "Spanisch", "Tamil", "Tigrinya", "Türkisch", "Ukrainisch", "Ungarisch",
];

const CANTONS = ["AG","AI","AR","BE","BL","BS","FR","GE","GL","GR","JU","LU","NE","NW","OW","SG","SH","SO","SZ","TG","TI","UR","VD","VS","ZG","ZH"];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 text-slate-800">
      <Nav />
      <Hero />
      <Stats />
      <Mission />
      <Wwd />
      <Languages />
      <Distribution />
      <Timeline />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

function Container({ children }){
  return <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">{children}</div>
}

function Nav(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-rose-100">
      <Container>
        <div className="flex items-center justify-between py-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-rose-600 text-white font-bold shadow-sm">SO</span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Speak Out — Phase 2</p>
              <p className="text-xs text-slate-500">2025–2026 · Diaspora TV Switzerland</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#mission" className="hover:text-rose-700">Projekt</a>
            <a href="#wwd" className="hover:text-rose-700">Inhalte</a>
            <a href="#languages" className="hover:text-rose-700">Sprachen</a>
            <a href="#distribution" className="hover:text-rose-700">Verbreitung</a>
            <a href="#timeline" className="hover:text-rose-700">Zeitplan</a>
            <a href="#partners" className="hover:text-rose-700">Partner</a>
            <a href="#contact" className="hover:text-rose-700">Kontakt</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="rounded-2xl">
              <a href="#contact">Mitmachen</a>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.15),transparent_60%)]"/>
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 py-14 md:py-20 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Speak out, break the silence, get help, <span className="text-rose-600">STOP the violence</span>
            </motion.h1>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl">
              Ein nationales Präventionsprojekt (2025–2026) mit 162 mehrsprachigen Kurzfilmen für Menschen mit Migrationshintergrund in der ganzen Schweiz. Geschichten aus der Realität, klare Informationen zu Rechten und Unterstützung – in 18 Sprachen.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#wwd"><Video className="mr-2 h-4 w-4"/> Kurzfilme ansehen</a>
              </Button>
              <Button variant="outline" asChild className="rounded-2xl">
                <a href="#contact"><Megaphone className="mr-2 h-4 w-4"/> Partner werden</a>
              </Button>
              <Button variant="ghost" asChild className="rounded-2xl">
                <a href="#help"><Phone className="mr-2 h-4 w-4"/> Hilfe finden</a>
              </Button>
            </div>
            <div id="help" className="mt-6 text-sm text-slate-500">
              <p className="inline-flex items-center gap-2"><Shield className="h-4 w-4"/> Wenn Sie oder jemand in Gefahr ist: <strong>112 / 117</strong>. Opferhilfe Schweiz: zentrale Anlaufstellen über die Kantone (ersetzen Sie diesen Link mit Ihrer offiziellen Ressource).</p>
            </div>
          </div>
          <div className="relative">
            <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} className="rounded-3xl bg-white shadow-xl p-6 border border-rose-100">
              <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-rose-200 via-rose-100 to-white grid place-content-center text-center">
                <p className="text-sm uppercase tracking-widest text-rose-600 font-semibold">Trailer Platzhalter</p>
                <p className="text-xs text-slate-500">Ersetzen Sie dies mit einem eingebetteten Video</p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <StatBox kpi="162" label="Videoproduktionen"/>
                <StatBox kpi="18" label="Sprachen"/>
                <StatBox kpi="26+" label="Kantone"/>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function StatBox({kpi, label}){
  return (
    <div className="rounded-xl bg-rose-50 border border-rose-100 p-4">
      <div className="text-2xl font-extrabold text-rose-700">{kpi}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  )
}

function Stats(){
  return (
    <section className="py-4">
      <Container>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
          <div className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4"/> Schweizweit: Deutsch · Französisch · Italienisch · Rätoromanisch</div>
          <div className="inline-flex items-center gap-2"><Calendar className="h-4 w-4"/> Laufzeit: 01.01.2025 – 31.12.2026</div>
          <div className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> Kantonsübergreifend: {CANTONS.join(" · ")}</div>
        </div>
      </Container>
    </section>
  )
}

function Mission(){
  return (
    <section id="mission" className="py-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Warum dieses Projekt?</h2>
            <p className="mt-4 text-slate-600">
              Häusliche Gewalt betrifft viele Familien – besonders Menschen mit Migrationsgeschichte sind gefährdet: Sprachbarrieren, Stress, Traumata, unsichere Arbeitssituationen und kulturelle Unterschiede verstärken das Risiko. Unser Ziel ist es, Zugang zu <strong>Information, Rechten, Schutz und Unterstützung</strong> zu erleichtern – über TV, soziale Medien und direkte Verbreitung an Beratungsstellen.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-5 w-5 text-rose-600"/> 9 Kurzfilme à 5–8 Minuten zu: körperlicher/sexueller Gewalt, psychischer/finanzieller Gewalt sowie Gewalt an/gegen Kinder & Auswirkungen.</li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-5 w-5 text-rose-600"/> Jede Geschichte basiert auf realen Situationen, ergänzt mit Interviews: Opfer/Angehörige (anonymisiert), Beratungsstellen, Polizei, Justiz, Psychologie, KESB, Kinderrechte u.v.m.</li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-5 w-5 text-rose-600"/> Alle Videos werden in <strong>18 Sprachen</strong> vertont und schweizweit verbreitet.</li>
            </ul>
          </div>
          <Card className="rounded-3xl border-rose-100 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Ziele & Wirkung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>• Information, Sensibilisierung & Wissensvermittlung für Menschen mit Migrationshintergrund.</p>
              <p>• Stärkung der Kooperation mit öffentlichen & privaten Organisationen gegen häusliche Gewalt.</p>
              <p>• Förderung von Gleichstellung, Schutz von Betroffenen und der Rechte von Frauen, Mädchen und Kindern.</p>
              <p>• Unterstützung der Integration durch Prävention, Enttabuisierung und mehrsprachige Aufklärung.</p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}

function Wwd(){
  const blocks = [
    {
      title: "Körperliche & sexuelle Gewalt",
      desc: "Erkennen, Grenzen ziehen, Schutz & rechtliche Schritte.",
    },
    {
      title: "Psychische & finanzielle Gewalt",
      desc: "Gaslighting, Drohungen, ökonomische Abhängigkeit – Wege aus der Kontrolle.",
    },
    {
      title: "Kinder im Fokus",
      desc: "Gewalt an Kindern und Auswirkungen von häuslicher Gewalt – Hilfe und Meldestellen.",
    },
  ];
  return (
    <section id="wwd" className="py-16 bg-white">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center">Was entsteht</h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">Neun realitätsnahe Kurzfilme, je 5–8 Minuten, mit Expert*innen-Statements und klaren Handlungsoptionen – vertont in 18 Sprachen.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {blocks.map((b, i) => (
            <Card key={i} className="rounded-3xl border-rose-100">
              <CardHeader>
                <CardTitle className="text-lg">{b.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">{b.desc}</CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Card className="rounded-3xl border-rose-100">
            <CardHeader>
              <CardTitle className="text-lg">Beispiel-Galerie (Platzhalter)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_,i)=> (
                  <div key={i} className="aspect-video rounded-2xl bg-rose-100/60 border border-rose-200 grid place-content-center text-slate-500 text-xs">Video-Thumbnail</div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}

function Languages(){
  return (
    <section id="languages" className="py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center">18 Sprachen – barrierearm informiert</h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">Wir erreichen Menschen in der Sprache, die sie verstehen – für einen niederschwelligen Zugang zu Rechten, Beratung und Schutz.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {LANGS.map((l) => (
            <Badge key={l} variant="secondary" className="rounded-2xl border border-rose-100 bg-rose-50 text-rose-700">{l}</Badge>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Distribution(){
  return (
    <section id="distribution" className="py-16 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Verbreitung & Reichweite</h2>
            <ul className="mt-4 space-y-3 text-slate-700 text-sm">
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-5 w-5 text-rose-600"/> 
                Versand an Beratungsstellen für häusliche Gewalt, Migrantenvereine, Asylbehörden, SEM, EKM, kant. Integrations- & Gesundheitsdirektionen.
              </li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-5 w-5 text-rose-600"/> Ausspielung via Diaspora TV Switzerland auf Sunrise & Swisscom Kabel sowie über Social Media.</li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-5 w-5 text-rose-600"/> Kostenfreie Nutzung der Beiträge für Institutionen & Migrationsmedien.</li>
            </ul>
          </div>
          <Card className="rounded-3xl border-rose-100">
            <CardHeader>
              <CardTitle className="text-lg">Schweizweite Abdeckung</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {CANTONS.map(c => (
                  <span key={c} className="px-3 py-1 text-xs rounded-full bg-rose-50 border border-rose-100 text-rose-700">{c}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}

function Timeline(){
  return (
    <section id="timeline" className="py-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center">Zeitplan 2025–2026</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Milestone title="Konzept & Pre-Production" period="Q1–Q2 2025" details={[
            "Story-Entwicklung & Fact-Checking",
            "Kooperation mit Beratungsstellen & Behörden",
            "Casting/Interviews, Übersetzungsvorbereitung",
          ]} />
          <Milestone title="Drehs & Postproduktion" period="Q3–Q4 2025" details={[
            "Dreharbeiten & Schnitt",
            "Mehrsprachige Vertonung (18 Sprachen)",
            "Pilot-Release & Feedback-Schleife",
          ]} />
          <Milestone title="Rollout & Evaluation" period="2026" details={[
            "Schweizweite Verbreitung",
            "Monitoring: Views, Reichweiten, Institutionen-Feedback",
            "Abschlussbericht & Empfehlungen",
          ]} />
        </div>
      </Container>
    </section>
  )
}

function Milestone({title, period, details}){
  return (
    <Card className="rounded-3xl border-rose-100">
      <CardHeader>
        <CardTitle className="text-lg flex items-center justify-between">
          <span>{title}</span>
          <span className="text-xs font-normal text-rose-700 bg-rose-50 border border-rose-100 rounded-full px-2 py-0.5">{period}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
          {details.map((d,i)=> <li key={i}>{d}</li>)}
        </ul>
      </CardContent>
    </Card>
  )
}

function Partners(){
  return (
    <section id="partners" className="py-16 bg-white">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center">Trägerschaft & Kooperation</h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-8 items-start">
          <Card className="rounded-3xl border-rose-100">
            <CardHeader>
              <CardTitle className="text-lg">Trägerschaft</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-1">
              <p><strong>Diaspora TV Switzerland</strong></p>
              <p>Märitgasse 4 · 3058 Zollikofen · 032 313 30 30</p>
              <p><a className="underline decoration-rose-300 underline-offset-4" href="mailto:info@diaspora-tv.ch">info@diaspora-tv.ch</a></p>
              <p>Leitung: Mark Bamidele Emmanuel · <a className="underline decoration-rose-300 underline-offset-4" href="mailto:info@diaspora-tv.ch">info@diaspora-tv.ch</a> · 078 812 51 84</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-rose-100">
            <CardHeader>
              <CardTitle className="text-lg">Kooperationspartner (Auszug)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600">
              <ul className="list-disc pl-5 space-y-1">
                <li>Beratungsstellen Häusliche Gewalt (CH)</li>
                <li>Kantonspolizei & Strafverfolgungsbehörden</li>
                <li>KESB & Vertretungen der Kinderrechte</li>
                <li>SEM, EKM, kant. Integrations- & Gesundheitsdirektionen</li>
                <li>Migrationsmedien & Vereine</li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">Fügen Sie hier Logos/Links ein, sobald bestätigt.</p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}

function Contact(){
  return (
    <section id="contact" className="py-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Kontakt & Teilnahme</h2>
            <p className="mt-3 text-slate-600">Möchten Sie mitwirken, Material nutzen oder eine Beratung empfehlen? Schreiben Sie uns – wir melden uns kurzfristig.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <Card className="rounded-2xl border-rose-100">
                <CardHeader className="pb-2"><CardTitle className="text-base">Allgemein</CardTitle></CardHeader>
                <CardContent>
                  <p><a className="underline decoration-rose-300 underline-offset-4" href="mailto:info@diaspora-tv.ch">info@diaspora-tv.ch</a></p>
                  <p>Tel. 032 313 30 30</p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-rose-100">
                <CardHeader className="pb-2"><CardTitle className="text-base">Projektleitung</CardTitle></CardHeader>
                <CardContent>
                  <p>Mark Bamidele Emmanuel</p>
                  <p><a className="underline decoration-rose-300 underline-offset-4" href="mailto:info@diaspora-tv.ch">info@diaspora-tv.ch</a></p>
                  <p>Mobil 078 812 51 84</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="rounded-3xl border-rose-100 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Nachricht senden</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-3" onSubmit={(e)=> e.preventDefault()}>
                <Input placeholder="Ihr Name" />
                <Input type="email" placeholder="Ihre E-Mail" />
                <Textarea rows={5} placeholder="Ihre Nachricht…" />
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-500">Mit dem Absenden stimmen Sie der Kontaktaufnahme zu.</div>
                  <Button className="rounded-2xl" type="submit">Senden</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}

function Footer(){
  return (
    <footer className="border-t border-rose-100 bg-white/60">
      <Container>
        <div className="py-8 grid md:grid-cols-2 gap-4 items-center">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Diaspora TV Switzerland — Speak Out Phase 2</p>
          <div className="justify-self-end text-xs text-slate-400">
            <a className="hover:text-rose-700" href="#">Impressum</a>
            <span className="mx-2">·</span>
            <a className="hover:text-rose-700" href="#">Datenschutz</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}