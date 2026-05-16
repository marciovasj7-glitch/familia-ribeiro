import { GeologicalData } from '@/types'

const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/marciovasj7-glitch/familia-ribeiro/main'

export const familyData: GeologicalData = {
  members: [
    {
      id: 'joao-ribeiro',
      name: 'João Ribeiro de Carvalho',
      role: 'Fundador da Linhagem',
      dates: '1906 - 1988',
      description: 'Patriarca da família Ribeiro de Carvalho. Estabeleceu a linhagem em Itamari, Bahia, e foi figura central na formação da história familiar documentada neste memorial.',
      photo: `${GITHUB_RAW_URL}/Jo%C3%A3o%20Ribeiro%20e%20Lidia%20Vasconcelos.jpeg`,
      children: ['ebenezer', 'darcy'],
    },
    {
      id: 'lidia-vasconcelos',
      name: 'Lídia Vasconcelos Ribeiro',
      role: 'Guardiã da Bíblia Familiar',
      dates: '? - 2001',
      description: 'Esposa de João Ribeiro de Carvalho. A Bíblia que pertenceu a Lídia preserva os registros genealógicos preciosos da família, documento fundamental para este memorial.',
      photo: `${GITHUB_RAW_URL}/Jo%C3%A3o%20Ribeiro%20e%20Lidia%20Vasconcelos.jpeg`,
      children: ['ebenezer', 'darcy'],
    },
    {
      id: 'ebenezer',
      name: 'Ebenezer Ribeiro de Vasconcelos',
      role: 'Depoente e Contribuidor',
      birth: '1931',
      birthplace: 'Nilo Peçanha-BA',
      description: 'Filho de João e Lídia. Contribuidor importante para o registro e preservação da memória familiar através de seus depoimentos.',
      photo: `${GITHUB_RAW_URL}/Eliezer%20Ribeiro%20de%20Vasconcelos.jpg`,
      isDeponent: true,
    },
    {
      id: 'oswaldo',
      name: 'Oswaldo Ribeiro de Vasconcelos',
      role: 'Membro da Família',
      birth: '1935',
      death: '2023',
      birthplace: 'Nilo Peçanha-BA',
      description: 'Terceiro filho de João e Lídia. Conhecido carinhosamente como João Preto. Participou ativamente na preservação das memórias familiares.',
      photo: `${GITHUB_RAW_URL}/Oswaldo%20Ribeiro%20de%20Vasconcelos.jpg`,
    },
    {
      id: 'darcy',
      name: 'Darcy Ribeiro de Macêdo',
      role: 'Depoente Familiar',
      description: 'Filho de João Ribeiro de Carvalho e Lídia Vasconcelos Ribeiro. Contribuidor importante para registros genealógicos.',
      isDeponent: true,
    },
  ],

  timeline: [
    {
      id: 'timeline-1',
      year: 1906,
      title: 'Nascimento de João Ribeiro de Carvalho',
      description: 'Início da linhagem que será documentada neste memorial genealógico.',
      category: 'birth',
    },
    {
      id: 'timeline-2',
      year: 1931,
      title: 'Nascimento de Ebenezer',
      description: 'Primeiro filho de João e Lídia. Importante depoente para a história familiar.',
      category: 'birth',
    },
    {
      id: 'timeline-3',
      year: 1947,
      title: 'Constituição da Família',
      description: 'Finaliza a geração de filhos de João e Lídia, estabelecendo a estrutura genealógica base.',
      category: 'milestone',
    },
    {
      id: 'timeline-4',
      year: 1988,
      title: 'Falecimento de João Ribeiro',
      description: 'Encerramento da vida do patriarca fundador. Sua memória continua viva neste memorial.',
      category: 'death',
    },
    {
      id: 'timeline-5',
      year: 2001,
      title: 'Falecimento de Lídia Vasconcelos',
      description: 'A guardiã da Bíblia familiar deixa seu legado documentado para as gerações futuras.',
      category: 'death',
    },
  ],

  gallery: [
    {
      id: 'gallery-1',
      title: 'João Ribeiro e Lídia Vasconcelos',
      description: 'Retrato do casal fundador. João Ribeiro de Carvalho e sua esposa Lídia Vasconcelos Ribeiro, patriarca e matriarca da família.',
      image: `${GITHUB_RAW_URL}/Jo%C3%A3o%20Ribeiro%20e%20Lidia%20Vasconcelos.jpeg`,
      category: 'Fundadores',
      featured: true,
    },
    {
      id: 'gallery-2',
      title: 'Eliezer Ribeiro de Vasconcelos',
      description: 'Fotografia de Eliezer Ribeiro de Vasconcelos, contribuidor importante do memorial genealógico.',
      image: `${GITHUB_RAW_URL}/Eliezer%20Ribeiro%20de%20Vasconcelos.jpg`,
      category: 'Membros',
    },
    {
      id: 'gallery-3',
      title: 'Oswaldo Ribeiro de Vasconcelos',
      description: 'Fotografia de Oswaldo Ribeiro de Vasconcelos (1935-2023), conhecido como João Preto.',
      image: `${GITHUB_RAW_URL}/Oswaldo%20Ribeiro%20de%20Vasconcelos.jpg`,
      category: 'Membros',
    },
    {
      id: 'gallery-4',
      title: 'Recordação dos Avós, Tios e Primos',
      description: 'Momento precioso capturando múltiplas gerações da família reunidas, preservando a memória afetiva e convívio familiar.',
      image: `${GITHUB_RAW_URL}/Recorda%C3%A7%C3%A3o%20dos%20meus%20av%C3%B3s%2C%20tios%20e%20primos.jpg`,
      category: 'Reuniões Familiares',
      featured: true,
    },
    {
      id: 'gallery-5',
      title: 'Casamento de Ebenezer e Ofir',
      description: 'Registro importante do casamento de Ebenezer Ribeiro com Ofir, documentando uma união familiar significativa.',
      image: `${GITHUB_RAW_URL}/Casamento%20de%20Ebenezer%20e%20Ofir.jpg`,
      category: 'Eventos',
    },
    {
      id: 'gallery-6',
      title: 'Fazenda Buri',
      description: 'Imagem da Fazenda Buri, espaço importante na história territorial e econômica da família.',
      image: `${GITHUB_RAW_URL}/Fazenda%20Buri.jpg`,
      category: 'Propriedades',
    },
  ],

  videos: [
    {
      id: 'video-1',
      title: 'Trajetória Familiar',
      description: 'Documentário sobre a trajetória da Família Ribeiro de Carvalho ao longo do tempo, registrando marcos importantes de sua história.',
      url: `${GITHUB_RAW_URL}/Trajet%C3%B3ria.mp4`,
    },
    {
      id: 'video-2',
      title: 'Legado Familiar',
      description: 'Registro do legado deixado pela família Ribeiro através das gerações, valores e memórias preservadas.',
      url: `${GITHUB_RAW_URL}/Legado.mp4`,
    },
  ],
}
