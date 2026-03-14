import { motion } from "framer-motion";
import { BookOpen, Users, Plug, Cloud, Globe, Award } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Sistema que é Seu (Open Source)", desc: "Customize, integre e adapte conforme sua necessidade. Sem amarras de fornecedor." },
  { icon: Users, title: "Sem Custos por Usuário", desc: "Adicione 10, 100 ou 1000 usuários. O preço não muda." },
  { icon: Plug, title: "Integrações Livres e Ilimitadas", desc: "APIs abertas, sem limites, sem custos adicionais por integração." },
  { icon: Cloud, title: "Infraestrutura em Nuvem Blindada", desc: "Backups automáticos diários, 99,9% de disponibilidade." },
  { icon: Globe, title: "Confiado em 30 Países", desc: "Testado e aprovado globalmente por empresas de todos os portes." },
  { icon: Award, title: "8 Anos de Tradição", desc: "Solução consolidada, confiável e constantemente atualizada." },
];

const ease = [0.16, 1, 0.3, 1];

const SolutionSection = () => (
  <section className="section-spacing">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="text-center mb-16"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-highlight mb-3">A Solução</p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
          ERP open source de ponta
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Código aberto, total customização, sem custos por usuário. Nós cuidamos da infraestrutura, 
          segurança e implantação.
        </p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: i * 0.07 }}
            className="rounded-2xl border border-border bg-card p-6 card-shadow transition-all hover:card-shadow-hover hover:border-primary/30 group"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <f.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1.5">{f.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
