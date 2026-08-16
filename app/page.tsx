export default function Home() {
  const audiences = [
    {
      title: "Grandes écoles",
      description:
        "Digitalisez vos cursus, suivez la progression de vos étudiants et délivrez des certifications reconnues.",
    },
    {
      title: "Entreprises",
      description:
        "Formez vos collaborateurs à leur rythme, pilotez les compétences et mesurez l'impact de vos formations.",
    },
  ];

  const features = [
    "Catalogue de cours modulaire",
    "Espace formateur pour créer du contenu",
    "Suivi de progression en temps réel",
    "Certifications et attestations",
    "Tableaux de bord pour les administrateurs",
  ];

  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-xl font-bold text-brand">Kynetix</span>
          <nav className="flex gap-6 text-sm font-medium text-gray-600">
            <a href="#audiences" className="hover:text-brand">
              Pour qui ?
            </a>
            <a href="#features" className="hover:text-brand">
              Fonctionnalités
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          La plateforme e-learning pour former à grande échelle
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Kynetix aide les grandes écoles et les entreprises à créer, diffuser
          et suivre des parcours de formation en ligne.
        </p>
      </section>

      <section id="audiences" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-2xl border border-gray-100 p-8 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {audience.title}
              </h2>
              <p className="mt-3 text-gray-600">{audience.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Fonctionnalités clés
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kynetix
      </footer>
    </main>
  );
}
