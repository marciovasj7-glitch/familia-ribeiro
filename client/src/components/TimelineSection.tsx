import { TimelineEvent } from '@/types'

interface Props {
  events: TimelineEvent[]
}

export function TimelineSection({ events }: Props) {
  const sortedEvents = [...events].sort((a, b) => a.year - b.year)

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      birth: 'bg-secondary',
      marriage: 'bg-accent',
      death: 'bg-primary',
      milestone: 'bg-primary',
    }
    return colors[category] || 'bg-primary'
  }

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      birth: 'Nascimento',
      marriage: 'Casamento',
      death: 'Falecimento',
      milestone: 'Marco',
    }
    return labels[category] || category
  }

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
          Linha do Tempo Genealógica
        </h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
          Marcos importantes na história da Família Ribeiro de Carvalho
        </p>

        <div className="max-w-3xl mx-auto">
          {/* Timeline vertical */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {sortedEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`flex items-center gap-8 animate-slide-up ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className={`${index % 2 === 1 ? 'text-right' : ''}`}>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-2 ${getCategoryColor(event.category)}`}>
                        {getCategoryLabel(event.category)}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-foreground/70 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                    <p className="text-center font-bold text-primary mt-2">{event.year}</p>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
