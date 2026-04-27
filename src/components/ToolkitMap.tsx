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
    title: 'Backend', color: '#0ea5e9',
    nodes: [
      { icon:'mdi:language-csharp', label:'C#' },
      { icon:'simple-icons:flask', label:'Flask' },
      { icon:'simple-icons:junit5', label:'JUnit' },
    ]
  },
  {
    title: 'DevOps / Infra', color: '#8b5cf6',
    nodes: [
      { icon:'logos:microsoft-azure', label:'Azure' },
      { icon:'logos:docker-icon', label:'Docker' },
      { icon:'logos:kubernetes', label:'Kubernetes' },
      { icon:'logos:elasticsearch', label:'Elasticsearch' },
      { icon:'simple-icons:opensearch', label:'OpenSearch' },
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
  return (
    <motion.div
      initial={{opacity:0, scale:0.98, y:6}}
      whileInView={{opacity:1, scale:1, y:0}}
      viewport={{once:true, margin:'-10%'}}
      transition={{type:'spring', stiffness:160, damping:14, delay:i*0.05}}
      className="relative w-[280px] sm:w-[300px]"
    >
      <svg aria-hidden className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="150" cy="150" rx="136" ry="136" fill={g.color} opacity="0.06" />
        {Array.from({length:8}).map((_,k)=>{
          const ang=(k/8)*Math.PI*2
          const x=150+Math.cos(ang)*120, y=150+Math.sin(ang)*120
          return <line key={k} x1="150" y1="150" x2={x} y2={y} stroke={g.color} opacity="0.18" strokeWidth="1"/>
        })}
        {Array.from({length:8}).map((_,k)=>{
          const a1=(k/8)*Math.PI*2, a2=((k+1)%8/8)*Math.PI*2
          const x1=150+Math.cos(a1)*120, y1=150+Math.sin(a1)*120
          const x2=150+Math.cos(a2)*120, y2=150+Math.sin(a2)*120
          return <line key={'r'+k} x1={x1} y1={y1} x2={x2} y2={y2} stroke={g.color} opacity="0.18" strokeWidth="1"/>
        })}
      </svg>
      <div className="relative p-5">
        <div className="mb-3 text-xs font-semibold text-slate-600 dark:text-slate-400 text-center uppercase tracking-wide">{g.title}</div>
        <div className="flex flex-wrap gap-2 justify-center">
          {g.nodes.map((n, ni) => (
            <motion.span
              key={n.label}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 shadow-sm dark:bg-slate-700 dark:border-white/10 dark:text-slate-200"
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
