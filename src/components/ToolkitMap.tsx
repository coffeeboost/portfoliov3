import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

type Node = { label: string; icon: string }

type Group = { title: string; color: string; nodes: Node[] }

const groups: Group[] = [
  {
    title: 'AI / Data', color: '#16a34a',
    nodes: [
      { icon:'logos:python', label:'Python' },
      { icon:'simple-icons:pandas', label:'Pandas' },
      { icon:'logos:scikit-learn', label:'scikit-learn' },
      { icon:'logos:pytorch', label:'PyTorch' },
      { icon:'simple-icons:plotly', label:'Plotly' },
    ]
  },
  {
    title: 'Frontend', color: '#3b82f6',
    nodes: [
      { icon:'mdi:react', label:'React' },
      { icon:'mdi:language-typescript', label:'TypeScript' },
      { icon:'logos:tailwindcss-icon', label:'Tailwind' },
      { icon:'logos:html-5', label:'HTML' },
      { icon:'logos:css-3', label:'CSS' },
    ]
  },
  {
    title: 'Backend / Infra', color: '#0ea5e9',
    nodes: [
      { icon:'mdi:language-csharp', label:'C#' },
      { icon:'logos:microsoft-azure', label:'Azure' },
      { icon:'logos:docker-icon', label:'Docker' },
      { icon:'logos:kubernetes', label:'Kubernetes' },
      { icon:'logos:elasticsearch', label:'Elasticsearch' },
      { icon:'simple-icons:opensearch', label:'OpenSearch' },
      { icon:'simple-icons:flask', label:'Flask' },
      { icon:'simple-icons:junit5', label:'JUnit' },
    ]
  }
]

export default function ToolkitMap(){
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-start justify-center gap-6">
        {groups.map((g, i) => <GroupCard key={g.title} g={g} i={i} />)}
      </div>
    </div>
  )
}

function GroupCard({ g, i }: { g: Group; i: number }){
  const spokes = 8
  return (
    <motion.div
      initial={{opacity:0, scale:0.98, y:6}}
      whileInView={{opacity:1, scale:1, y:0}}
      viewport={{once:true, margin:'-10%'}}
      transition={{type:'spring', stiffness:160, damping:14, delay:i*0.05}}
      className="relative w-[300px] sm:w-[340px] h-[200px]"
    >
      <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">
        <ellipse cx="150" cy="100" rx="136" ry="86" fill={g.color} opacity="0.06" />
        <g stroke={g.color} opacity="0.18" strokeWidth="1">
          {Array.from({length:spokes}).map((_,k)=>{
            const ang=(k/spokes)*Math.PI*2
            const x=150+Math.cos(ang)*112, y=100+Math.sin(ang)*72
            return <line key={k} x1="150" y1="100" x2={x} y2={y}/>
          })}
          {Array.from({length:spokes}).map((_,k)=>{
            const a1=(k/spokes)*Math.PI*2, a2=((k+1)%spokes/spokes)*Math.PI*2
            const x1=150+Math.cos(a1)*112, y1=100+Math.sin(a1)*72
            const x2=150+Math.cos(a2)*112, y2=100+Math.sin(a2)*72
            return <line key={'r'+k} x1={x1} y1={y1} x2={x2} y2={y2}/>
          })}
        </g>
      </svg>
      <div className="absolute inset-0 p-4">
        <div className="mb-1 text-xs font-medium text-slate-700 text-center">{g.title}</div>
        <div className="flex flex-wrap gap-2 justify-center content-center text-center">
          {g.nodes.map((n,ni)=> (
            <motion.span
              key={n.label}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 shadow-sm"
              initial={{opacity:0, scale:0.95, y:4}}
              whileInView={{opacity:1, scale:1, y:0}}
              viewport={{once:true}}
              transition={{type:'spring', stiffness:220, damping:16, delay:0.06+ni*0.04}}
              whileHover={{scale:1.06}}
            >
              <Icon icon={n.icon} width={18} height={18} />
              <span>{n.label}</span>
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
