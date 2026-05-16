import { Header } from '@/components/Header'
import { MembersSection } from '@/components/MembersSection'
import { TimelineSection } from '@/components/TimelineSection'
import { GallerySection } from '@/components/GallerySection'
import { VideosSection } from '@/components/VideosSection'
import { Footer } from '@/components/Footer'
import { familyData } from '@/data/familyData'
import { useState, useEffect } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar sticky */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg py-2'
            : 'bg-gradient-to-b from-primary/20 to-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-primary">
              🏛️
            </span>
            <span className={`font-serif font-bold transition-colors ${
              scrolled ? 'text-primary' : 'text-primary-foreground'
            }`}>
              Memorial
            </span>
          </a>

          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Membros', href: '#membros' },
              { label: 'Cronologia', href: '#cronologia' },
              { label: 'Galeria', href: '#galeria' },
              { label: 'Documentários', href: '#videos' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu hint */}
          <div className="md:hidden text-primary-foreground font-medium">
            Menu
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        {/* Header */}
        <div className="pt-16">
          <Header />
        </div>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 text-center">
              Sobre Este Memorial
            </h2>
            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              <p>
                Este memorial genealógico preserva a história e memória da <span className="font-bold text-primary">Família Ribeiro de Carvalho</span>,
                resgatada das páginas de uma Bíblia antiga que pertenceu a Lídia Vasconcelos Ribeiro. Seus filhos, com dedicação especial,
                registraram com cuidado os nomes, datas e conexões que formam nossa árvore genealógica.
              </p>
              <p>
                Aqui honramos essas contribuições, documentamos nosso patrimônio familiar e convidamos as gerações futuras a explorar e compreender
                as raízes profundas que nos unem como família, estabelecidas primeiramente em Itamari, Bahia, e espalhadas através dos tempos.
              </p>
              <p className="italic text-primary">
                "A memória é o tesouro da família. Através destes registros, garantimos que as vozes de nossos antepassados ecoem para sempre."
              </p>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section id="membros">
          <MembersSection members={familyData.members} />
        </section>

        <section id="cronologia">
          <TimelineSection events={familyData.timeline} />
        </section>

        <section id="galeria">
          <GallerySection items={familyData.gallery} />
        </section>

        <section id="videos">
          <VideosSection videos={familyData.videos} />
        </section>

        {/* Additional info section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
              Contribuições e Depoimentos
            </h2>
            <div className="grid gap-6">
              {familyData.members.filter(m => m.isDeponent).map(member => (
                <div key={member.id} className="bg-muted rounded-lg p-6 border-l-4 border-primary">
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
