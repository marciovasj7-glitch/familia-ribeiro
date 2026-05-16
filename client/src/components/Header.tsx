export function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-primary to-accent py-20">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary-foreground animate-fade-in">
            Família Ribeiro de Carvalho
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-foreground via-primary-foreground to-transparent mx-auto opacity-60"></div>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light max-w-2xl mx-auto">
            Memorial Genealógico e Patrimônio Familiar
          </p>
          <p className="text-sm md:text-base text-primary-foreground/75 max-w-2xl mx-auto leading-relaxed">
            Preservando a história, memória e legado de gerações através de registros genealógicos, documentos históricos e testemunhos familiares
          </p>
        </div>
      </div>
    </header>
  )
}
