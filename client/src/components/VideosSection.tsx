import { Video } from '@/types'
import { Play } from 'lucide-react'

interface Props {
  videos: Video[]
}

export function VideosSection({ videos }: Props) {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
          Documentários Familiares
        </h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
          Registros em vídeo da trajetória e legado da Família Ribeiro de Carvalho
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              {/* Video thumbnail/player */}
              <div className="relative bg-black h-64 md:h-72 flex items-center justify-center overflow-hidden">
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  poster={video.thumbnail}
                  src={video.url}
                  controls
                  controlsList="nodownload"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Play className="w-16 h-16 text-white fill-white" />
                </div>
              </div>

              {/* Video info */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {video.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {video.description}
                </p>
                <div className="mt-4 flex gap-2">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Documentário
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informação sobre acesso aos vídeos */}
        <div className="mt-12 max-w-3xl mx-auto bg-accent/10 rounded-lg p-6 text-center">
          <p className="text-foreground/80 text-sm">
            Os vídeos documentários registram a trajetória histórica e o legado vivo da família,
            preservando testemunhos e momentos significativos para as gerações futuras.
          </p>
        </div>
      </div>
    </section>
  )
}
