import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: 'O que significa "você não paga aluguel por usuário"?',
    a: "Diferente dos ERPs tradicionais que cobram mensalidade por cada usuário ativo, nosso modelo de pagamento único garante que você pode adicionar quantos usuários quiser sem custos adicionais. O sistema é seu.",
  },
  {
    q: "Quanto tempo leva para implementar o ERP?",
    a: "A implementação do Plano Essencial leva em média 7 a 14 dias úteis. O Plano Profissional, que inclui mapeamento de processos e migração de dados, leva de 15 a 30 dias úteis.",
  },
  {
    q: "Posso customizar o ERP conforme minha necessidade?",
    a: "Sim. Como o sistema é open source, você tem acesso total ao código-fonte para customizar módulos, criar relatórios personalizados e integrar com qualquer sistema via API.",
  },
];

const ease = [0.16, 1, 0.3, 1];

const FaqSection = () => (
  <section className="section-spacing bg-surface">
    <div className="container-narrow max-w-[720px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
          Ainda tem dúvidas?
        </h2>
        <p className="text-muted-foreground">
          Respondemos as principais questões antes de você agendar a demonstração
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-card px-6 card-shadow"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FaqSection;
