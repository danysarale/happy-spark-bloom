import { motion } from "framer-motion";
import { ShoppingCart, Package, Wallet, Handshake } from "lucide-react";

const modules = [
  { icon: ShoppingCart, title: "Vendas e CRM", desc: "Gerencie clientes, pipeline e vendas", metric: "+18.2%" },
  { icon: Package, title: "Estoque", desc: "Controle de inventário em tempo real", metric: "342 SKUs" },
  { icon: Wallet, title: "Financeiro", desc: "Contas a pagar/receber e fluxo de caixa", metric: "R$ 1.2M" },
  { icon: Handshake, title: "Compras", desc: "Fornecedores, cotações e pedidos", metric: "−23% custo" },
];

const ease = [0.16, 1, 0.3, 1];

const ModulesSection = () => (
  <section className="section-spacing bg-surface">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
          Todos os módulos que sua empresa precisa
        </h2>
        <p className="text-muted-foreground">Vendas, Estoque, Financeiro, Compras e muito mais</p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 card-shadow hover:card-shadow-hover hover:border-primary/30 transition-all group"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <m.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">{m.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{m.desc}</p>
            <p className="font-mono-data text-lg font-bold text-highlight">{m.metric}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ModulesSection;
