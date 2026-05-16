import { useState } from 'react'
import { ChevronDown, Heart } from 'lucide-react'
import { FamilyMember } from '@/types'

interface Props {
  members: FamilyMember[]
}

export function MembersSection({ members }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
          Membros da Família
        </h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
          Genealogia e história pessoal de cada membro que compõe o patrimônio familiar
        </p>

        <div className="space-y-4 max-w-4xl mx-auto">
          {members.map((member) => (
            <div
              key={member.id}
              className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card"
            >
              <button
                onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
                className="w-full px-6 py-5 flex items-start justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1 text-left">
                  {member.photo && (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-serif font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                    {member.dates || member.birth ? (
                      <p className="text-xs text-muted-foreground">
                        {member.dates || `${member.birth}${member.death ? ` - ${member.death}` : ''}`}
                      </p>
                    ) : null}
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 mt-1 ${
                    expandedId === member.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === member.id && (
                <div className="px-6 py-4 bg-muted/30 border-t border-border">
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    {member.description}
                  </p>
                  {member.isDeponent && (
                    <div className="flex items-center gap-2 text-primary text-sm">
                      <Heart className="w-4 h-4" />
                      <span className="font-medium">Depoente importante do memorial</span>
                    </div>
                  )}
                  {member.inMemoriam && (
                    <div className="text-secondary text-sm font-medium">
                      In Memoriam
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
