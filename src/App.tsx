/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Check,
  CheckCircle2, 
  Star, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  Gift, 
  TrendingUp, 
  DollarSign, 
  Heart, 
  Package, 
  Smartphone,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { useState, ReactNode } from "react";

const CTAButton = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <motion.a
    href="https://ggcheckout.app/checkout/v2/obynSBGCzd8TCxwfBpDt"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    animate={{ 
      scale: [1, 1.03, 1],
    }}
    transition={{ 
      duration: 1.5, 
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={`bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-colors flex items-center justify-center gap-2 text-lg md:text-xl cursor-pointer ${className}`}
  >
    {children}
    <ArrowRight className="w-6 h-6" />
  </motion.a>
);

const SectionTitle = ({ children, light = false }: { children: ReactNode, light?: boolean }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${light ? 'text-white' : 'text-gray-900'}`}>
    {children}
  </h2>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-bold text-lg text-gray-800 hover:text-chocolate transition-colors"
      >
        {question}
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-600 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

const TopUrgencyBar = () => (
  <motion.div 
    initial={{ y: -50 }}
    animate={{ y: 0 }}
    className="fixed top-0 left-0 w-full z-[100] bg-orange-500 text-white py-2 px-4 shadow-lg text-center font-bold text-sm md:text-base"
  >
    <motion.p
      animate={{ opacity: [1, 0.7, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      ⚠️ Oferta válida somente hoje — acesso imediato com desconto
    </motion.p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-chocolate/20 pt-10 md:pt-12">
      <TopUrgencyBar />
      {/* HERO SECTION */}
      <header className="relative bg-gradient-to-b from-chocolate/5 to-white pt-12 md:pt-20 pb-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-black">150 Receitas de</span> <span className="text-chocolate">Pirulitos de Chocolate</span> <span className="text-orange-600">Gourmet</span>
            </h1>
            
            {/* Imagem abaixo da Headline */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-10 max-w-4xl mx-auto"
            >
              <img 
                src="https://i.imgur.com/DCle7Yg.png" 
                alt="Pirulitos de Chocolate Lucrativos" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Descubra Como Ganhar de <span className="text-chocolate font-bold">R$ 2.000 a R$ 5.000</span> por Mês Vendendo Pirulitos de Chocolate!
            </p>
            <div className="flex flex-col items-center gap-4">
              <CTAButton>Quero Começar Agora</CTAButton>
              <p className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <Clock className="w-4 h-4 text-chocolate" />
                Acesso imediato por tempo limitado
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-chocolate/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-chocolate/20 rounded-full blur-3xl opacity-20"></div>
      </header>

      {/* O QUE VOCÊ VAI RECEBER */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>O Que Você Vai Receber</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-center md:text-left"
            >
              <ul className="space-y-4 inline-block text-left">
                {[
                  "150 Receitas exclusivas e testadas",
                  "Pirulitos Gourmet de dar água na boca",
                  "Modelos Infantis que as crianças amam",
                  "Opções para Datas Comemorativas (Páscoa, Natal, etc)",
                  "Técnicas de Personalização profissional",
                  "Passo a passo simples para iniciantes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square flex items-center justify-center">
                <img 
                  src="https://i.imgur.com/1ZYAeFv.png" 
                  alt="Pirulitos de Chocolate" 
                  className="rounded-xl object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-xl hidden md:block">
                <p className="text-chocolate font-bold text-3xl">150+</p>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Receitas Prontas</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POR QUE ESCOLHER ESSE PRODUTO */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Por Que Esse é o Negócio Perfeito Para Você?</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-10 h-10 text-chocolate" />,
                title: "Renda Extra Rápida",
                desc: "Você pode começar a vender e lucrar já na primeira semana. É o produto ideal para quem precisa de dinheiro rápido."
              },
              {
                icon: <DollarSign className="w-10 h-10 text-chocolate" />,
                title: "Baixíssimo Investimento",
                desc: "Você não precisa de máquinas caras. Com o que você já tem na cozinha, pode começar a produzir."
              },
              {
                icon: <Heart className="w-10 h-10 text-chocolate" />,
                title: "Fácil de Fazer",
                desc: "Nossas receitas foram simplificadas para que qualquer pessoa, mesmo sem experiência, consiga resultados profissionais."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-md border-2 border-orange-500 text-center"
              >
                <div className="mb-6 flex justify-center">{benefit.icon}</div>
                <h4 className="text-xl font-bold mb-4">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-8 italic">
              "Chega de passar aperto no fim do mês. Transforme sua cozinha em uma fonte de renda!"
            </p>
            <CTAButton>Quero Mudar Minha Realidade</CTAButton>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL SECTION */}
      <section className="py-20 px-4 bg-white border-t border-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pessoas comuns já estão fazendo e vendendo 👇
          </h2>

          {/* Galeria de Imagens (Pequenas, logo após o título) */}
          <div className="flex justify-center gap-4 mb-12 max-w-2xl mx-auto">
            {[
              "https://i.imgur.com/Pev2cnq.png",
              "https://i.imgur.com/Oj8o75s.png",
              "https://i.imgur.com/J0j5JWj.png",
              "https://i.imgur.com/xZQQkXK.png"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden rounded-xl shadow-md border border-gray-100 w-1/4"
              >
                <img 
                  src={img} 
                  alt={`Prova Social ${i + 1}`} 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

          {/* Depoimentos em Cards (Estilo da Imagem) */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Mariana Silva",
                role: "Dona de Casa",
                text: "Comecei do zero e já consegui minhas primeiras vendas 😍",
                img: "https://i.imgur.com/S1WINAR.png"
              },
              {
                name: "Carla Oliveira",
                role: "Ex-Desempregada",
                text: "Muito fácil de fazer, já vendi no mesmo dia!",
                img: "https://i.imgur.com/mQEGX4Z.png"
              },
              {
                name: "Juliana Costa",
                role: "Mãe Empreendedora",
                text: "Nem sabia fazer doces e já estou vendendo!",
                img: "https://i.imgur.com/PPANB85.png"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.img} alt={testimonial.name} className="w-14 h-14 rounded-full" referrerPolicy="no-referrer" />
                  <div>
                    <h5 className="font-bold text-gray-900">{testimonial.name}</h5>
                    <p className="text-chocolate text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-2xl font-bold text-chocolate">
            Agora imagina você começando ainda hoje…
          </p>
        </div>
      </section>

      {/* BÔNUS EXCLUSIVOS */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>🎁 Bônus Exclusivos (Só Hoje!)</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: "https://i.imgur.com/80jK4r5.png",
                title: "Vendas no WhatsApp",
                oldPrice: "29,90",
                desc: "Aprenda como conseguir clientes e fazer vendas todos os dias usando apenas o celular, mesmo começando do zero."
              },
              {
                img: "https://i.imgur.com/ObZJU2i.jpeg",
                title: "Cardápio Pronto",
                oldPrice: "19,90",
                desc: "Modelos prontos para você usar, divulgar e começar a vender seus pirulitos imediatamente."
              },
              {
                img: "https://i.imgur.com/gB3ir5I.png",
                title: "Fotos que Vendem",
                oldPrice: "27,90",
                desc: "Descubra como tirar fotos bonitas dos seus pirulitos usando apenas o celular e atrair mais clientes."
              },
              {
                img: "https://i.imgur.com/nR4ZXtW.png",
                title: "Primeiras Vendas",
                oldPrice: "19,90",
                desc: "Um passo a passo simples para você fazer suas primeiras vendas rapidamente, mesmo começando do zero."
              }
            ].map((bonus, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden text-center flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={bonus.img} 
                    alt={bonus.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{bonus.title}</h4>
                    <div className="mb-4">
                      <p className="text-gray-400 text-sm line-through decoration-gray-300 decoration-2">
                        De R$ {bonus.oldPrice}
                      </p>
                      <p className="text-green-600 font-black text-2xl">
                        HOJE: R$ 0,00
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    {bonus.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="py-24 px-4 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border-2 border-green-500 shadow-2xl relative overflow-hidden">
          {/* TOPO DA OFERTA (barra vermelha) */}
          <div className="bg-red-600 text-white py-4 px-6">
            <p className="text-xl font-black uppercase tracking-widest mb-1">OFERTA ESPECIAL</p>
            <p className="text-sm md:text-base font-medium opacity-90">Acesso imediato às 150 Receitas + Todos os Bônus Inclusos</p>
          </div>

          <div className="p-8 md:p-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Você terá acesso a:</h2>
            
            <ul className="space-y-3 mb-8 inline-block text-left max-w-md mx-auto w-full">
              {[
                "150 Receitas de Pirulitos de Chocolate Gourmet (PDF)",
                "Receitas simples para iniciantes",
                "Ideias de pirulitos que vendem fácil",
                "Modelos para datas comemorativas",
                "Acesso imediato após o pagamento",
                "Atualizações futuras incluídas"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-base">
                  <div className="bg-green-100 rounded-full p-1 shrink-0">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* BÔNUS */}
            <div className="mb-10 inline-block text-left max-w-md mx-auto w-full">
              <p className="text-chocolate font-bold text-lg mb-4">+ Bônus Exclusivos</p>
              <ul className="space-y-2">
                {["Vendas no WhatsApp", "Cardápio Pronto", "Fotos que Vendem", "Primeiras Vendas"].map((bonus, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 font-medium text-sm">
                    <div className="bg-green-100 rounded-full p-1 shrink-0">
                      <Check className="w-2.5 h-2.5 text-green-600" />
                    </div>
                    <span>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 mb-10">
              <p className="text-gray-400 text-xl line-through">
                De R$ 97,00
              </p>
              <p className="text-green-800 font-bold text-2xl uppercase tracking-widest">
                POR APENAS
              </p>
              <div className="flex items-baseline justify-center text-red-600 font-black my-4">
                <span className="text-2xl mr-1">R$</span>
                <span className="text-7xl md:text-8xl">19</span>
                <span className="text-3xl">,90</span>
              </div>
              <div className="flex justify-center">
                <span className="bg-yellow-50 text-gray-500 text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1 border border-yellow-100/50">
                  Menos que um lanche 🍫
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <CTAButton className="w-full max-w-md py-6 text-2xl">
                QUERO MINHAS RECEITAS AGORA
              </CTAButton>
              <div className="space-y-2">
                <p className="text-gray-500 font-medium flex items-center justify-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  Acesso imediato após o pagamento
                </p>
                <p className="text-red-600 font-bold animate-pulse">
                  Oferta válida somente hoje
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Dúvidas Frequentes</SectionTitle>
          <div className="space-y-2">
            <FAQItem 
              question="Preciso ter experiência na cozinha?" 
              answer="De forma alguma! O guia foi criado pensando justamente em quem está começando do zero absoluto. As instruções são simples e diretas." 
            />
            <FAQItem 
              question="Quanto preciso investir para começar?" 
              answer="O investimento inicial é baixíssimo. Você pode começar com menos de R$ 50,00 comprando apenas os ingredientes básicos e as forminhas." 
            />
            <FAQItem 
              question="Como eu recebo o acesso?" 
              answer="Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar o guia completo e todos os bônus. O acesso é imediato para pagamentos via PIX ou Cartão." 
            />
            <FAQItem 
              question="Funciona mesmo para ganhar dinheiro?" 
              answer="Sim! Pirulitos de chocolate têm uma margem de lucro altíssima e são fáceis de vender em escolas, festas, vizinhança e redes sociais. Seguindo o passo a passo, o resultado vem." 
            />
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <ShieldCheck className="w-24 h-24 text-chocolate mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Risco Zero: Garantia de 7 Dias</h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Fique tranquila! Se por qualquer motivo você achar que o guia não é para você, basta nos enviar um e-mail em até 7 dias e devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            <CTAButton>Quero Garantir Minha Vaga</CTAButton>
          </motion.div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-12 px-4 bg-white border-t border-gray-100 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold mb-4">
            <span className="text-black">150 Receitas de</span> <span className="text-chocolate">Pirulitos de Chocolate</span> <span className="text-orange-600">Gourmet</span>
          </h3>
          <p className="text-gray-500 text-sm mb-8">
            Transformando vidas através da confeitaria simples e lucrativa.
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-400 mb-8 font-medium">
            <a href="#" className="hover:text-chocolate transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-chocolate transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-chocolate transition-colors">Contato</a>
          </div>
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} - Todos os direitos reservados.
            <br />
            Este site não faz parte do Facebook ou do Google.
          </p>
        </div>
      </footer>
    </div>
  );
}
