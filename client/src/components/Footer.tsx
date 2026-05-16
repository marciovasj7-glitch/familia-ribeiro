export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Memorial Genealógico</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Preservação e documentação do patrimônio genealógico da Família Ribeiro de Carvalho através de registros históricos, memórias familiares e arquivo visual.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary-foreground/60 transition-colors">
                  Membros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground/60 transition-colors">
                  Cronologia
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground/60 transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground/60 transition-colors">
                  Documentários
                </a>
              </li>
            </ul>
          </div>

          {/* Repository */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Acervo</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Este memorial é mantido com dedicação à memória familiar e preservação da história.
            </p>
            <a
              href="https://github.com/marciovasj7-glitch/familia-ribeiro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-primary-foreground text-primary rounded-lg font-medium text-sm hover:bg-primary-foreground/90 transition-colors"
            >
              Ver no GitHub
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>
              © {currentYear} Memorial Genealógico - Família Ribeiro de Carvalho. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido com cuidado pela família para as gerações futuras
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
