import { useMemo } from 'react'

function App() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute -left-1/2 top-0 h-[600px] w-[1200px] rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-500/30 to-indigo-500/30 blur-3xl" />
          <div className="absolute -right-1/3 -bottom-20 h-[500px] w-[900px] rounded-full bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />
        </div>

        <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30 flex items-center justify-center font-bold">W</div>
            <span className="text-lg font-semibold tracking-tight">WebpaysdeRetz</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-blue-100/80">
            <a href="#approche" className="hover:text-white transition-colors">Approche</a>
            <a href="#offre" className="hover:text-white transition-colors">Offre</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 pt-8 pb-20 md:pt-16 md:pb-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
                Pays de Retz • Sites qui convertissent
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                WebpaysdeRetz : Je crée des sites internet qui vous apportent des clients
              </h1>
              <p className="mt-5 text-lg text-blue-100/90 leading-relaxed">
                Votre site est-il vraiment votre meilleur commercial ? Un beau site qui ne vous rapporte
                aucun contact, c'est de la frustration et des opportunités perdues chaque jour.
              </p>
              <p className="mt-3 text-blue-100/80">
                Ici, dans le Pays de Retz, je conçois des sites au service de votre activité : clairs,
                rapides et orientés conversion — pas juste du « joli ». Mon objectif : transformer vos
                visiteurs en clients.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold px-5 py-3 shadow-lg shadow-blue-600/30"
                >
                  Demander un échange gratuit
                </a>
                <a
                  href="#offre"
                  className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 transition-colors text-white font-semibold px-5 py-3 border border-white/20"
                >
                  Voir mon approche
                </a>
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm text-blue-200/80">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" />Sites performants</div>
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-400" />Contenu orienté client</div>
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400" />Suivi & optimisation</div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-blue-500/20 bg-slate-800/40 p-4 md:p-6 shadow-2xl shadow-blue-900/40 backdrop-blur">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 grid place-items-center text-center p-6">
                  <div>
                    <div className="text-6xl mb-4">💼</div>
                    <p className="text-blue-100/90 text-lg font-medium">Votre site, votre meilleur commercial</p>
                    <p className="text-blue-200/70 mt-2 text-sm">Conçu pour convaincre, positionner et convertir.</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    {k:"SEO local", e:"📍"},
                    {k:"Chargement rapide", e:"⚡"},
                    {k:"Formulaires efficaces", e:"✉️"},
                  ].map((f, i) => (
                    <div key={i} className="rounded-lg bg-white/5 border border-white/10 py-3 text-center">
                      <div className="text-xl">{f.e}</div>
                      <div className="text-xs text-blue-100/80">{f.k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Approach */}
      <section id="approche" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[ 
            {
              title: 'Comprendre votre activité',
              desc: 'Un échange clair pour cerner vos clients, vos offres et vos objectifs. On aligne le site avec votre réalité terrain.',
              emoji: '🧭'
            },
            {
              title: 'Concevoir pour convertir',
              desc: 'Structure, messages et appels à l’action pensés pour transformer un visiteur en prise de contact.',
              emoji: '🎯'
            },
            {
              title: 'Mesurer et optimiser',
              desc: 'Mise en place d’analyses et améliorations continues pour augmenter la performance commerciale.',
              emoji: '📈'
            }
          ].map((card, i) => (
            <div key={i} className="rounded-2xl bg-slate-800/60 border border-white/10 p-6">
              <div className="text-3xl mb-3">{card.emoji}</div>
              <h3 className="font-semibold text-xl">{card.title}</h3>
              <p className="text-blue-100/80 mt-2 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offer */}
      <section id="offre" className="bg-slate-800/40 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ce que je livre</h2>
              <ul className="mt-6 space-y-3 text-blue-100/90">
                <li className="flex gap-3"><span className="mt-1">✅</span> Design sobre, moderne et crédible</li>
                <li className="flex gap-3"><span className="mt-1">✅</span> Textes orientés bénéfices & preuves</li>
                <li className="flex gap-3"><span className="mt-1">✅</span> Mobile first, rapide et sécurisé</li>
                <li className="flex gap-3"><span className="mt-1">✅</span> Optimisations SEO local (Pays de Retz)</li>
                <li className="flex gap-3"><span className="mt-1">✅</span> Intégration Google Analytics & suivi</li>
              </ul>

              <div className="mt-6 text-blue-200/80 text-sm">
                Pas de bla-bla technique. Je m’occupe de tout et vous gardez la main sur l’essentiel :
                votre message et vos résultats.
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-6 border border-blue-500/20">
              <h3 className="text-xl font-semibold">Formule démarrage</h3>
              <p className="text-blue-100/80 mt-2">Idéale pour artisans, indépendants, petites entreprises locales.</p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                {[ '1 à 5 pages', 'Charte et visuels', 'Formulaire de contact', 'Suivi de conversions', 'Hébergement & Domaine', 'Mises à jour faciles' ].map((p, i) => (
                  <div key={i} className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">{p}</div>
                ))}
              </div>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold px-5 py-3 shadow-md shadow-blue-600/30">
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {n: 'Performant', d: 'Temps de chargement optimisé, bon pour vos visiteurs et pour Google.'},
            {n: 'Clair', d: 'Des pages qui expliquent simplement qui vous êtes et pourquoi vous choisir.'},
            {n: 'Orienté résultats', d: 'Chaque page a un objectif : le contact, la demande de devis, la prise de rendez-vous.'}
          ].map((b, i) => (
            <div key={i} className="rounded-2xl bg-slate-800/60 border border-white/10 p-6">
              <h4 className="font-semibold text-lg">{b.n}</h4>
              <p className="text-blue-100/80 mt-2">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-800/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Parlons de votre projet</h2>
              <p className="mt-3 text-blue-100/85">Expliquez-moi votre activité et vos objectifs. Je vous dis franchement ce qui est possible, les délais et un budget clair.</p>
              <div className="mt-6 space-y-3 text-blue-100/90">
                <div className="flex items-center gap-3"><span className="text-xl">🤝</span> Échange gratuit et sans engagement</div>
                <div className="flex items-center gap-3"><span className="text-xl">📅</span> Disponibilités rapides</div>
                <div className="flex items-center gap-3"><span className="text-xl">📍</span> Basé dans le Pays de Retz</div>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <form className="grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm text-blue-100/80 mb-1">Votre nom</label>
                  <input type="text" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Ex: Marie Dupont" />
                </div>
                <div>
                  <label className="block text-sm text-blue-100/80 mb-1">Email</label>
                  <input type="email" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="vous@exemple.com" />
                </div>
                <div>
                  <label className="block text-sm text-blue-100/80 mb-1">Message</label>
                  <textarea className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Parlez-moi de votre projet..." />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="mailto:contact@votre-domaine.fr" className="flex-1 inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold px-5 py-3">Envoyer par email</a>
                  <a href="tel:+33000000000" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 transition-colors text-white font-semibold px-5 py-3 border border-white/10">Appeler</a>
                </div>
                <p className="text-xs text-blue-200/60">Pas d’envoi automatique pour l’instant. Cliquez sur “Envoyer par email” pour me contacter directement.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-10 text-sm text-blue-200/70">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {year} WebpaysdeRetz — Tous droits réservés.</div>
          <div className="flex items-center gap-4">
            <a href="/test" className="hover:text-white transition-colors">Test connexion</a>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
