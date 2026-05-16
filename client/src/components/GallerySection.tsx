import { useState } from 'react'
import { Image as ImageIcon, ChevronDown } from 'lucide-react'
import { GalleryItem } from '@/types'

interface Props {
  items: GalleryItem[]
}

export function GallerySection({ items }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const featured = items.filter((item) => item.featured)
  const regular = items.filter((item) => !item.featured)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
          Acervo Visual: Memória em Imagens
        </h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
          Fotografias que preservam momentos significativos e tesouros visuais da família
        </p>

        {/* Featured gallery */}
        {featured.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-primary mb-8 text-center">
              Destaque Especial
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featured.map((item) => (
                <div
                  key={item.id}
                  className="group bg-muted rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-mono text-primary font-bold mb-2 block">
                      {item.category}
                    </span>
                    <h4 className="text-xl font-serif font-bold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-foreground/70 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular gallery */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-primary mb-8 text-center">
            Coleção Completa
          </h3>
          <div className="space-y-3 max-w-3xl mx-auto">
            {regular.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1 text-left">
                    <ImageIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-serif font-bold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                      expandedId === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedId === item.id && (
                  <div className="px-6 py-4 bg-muted border-t border-border">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full md:w-48 h-auto rounded-lg object-cover"
                        onClick={() => setSelectedImage(item)}
                      />
                      <div>
                        <p className="text-foreground/80 leading-relaxed text-sm">
                          {item.description}
                        </p>
                        {item.year && (
                          <p className="text-xs text-muted-foreground mt-2">
                            Ano: {item.year}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modal para imagem expandida */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <p className="text-white text-center mt-4 font-serif text-lg">
                {selectedImage.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
