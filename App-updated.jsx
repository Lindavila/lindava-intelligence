import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Database,
  Menu,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
  X,
} from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviewName, setReviewName] = useState("");
  const [reviewCompany, setReviewCompany] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewText, setReviewText] = useState("");

  const services = [
    [Bot, "AI Strategy & Consulting", "Identify high-value AI opportunities and turn them into a practical implementation roadmap."],
    [Workflow, "Workflow Automation", "Automate repetitive business processes using AI, Power Automate and intelligent approval workflows."],
    [MessageSquare, "AI Agents & Copilots", "Build internal AI assistants for IT support, HR, operations, customer service and knowledge access."],
    [Database, "Business Systems Integration", "Connect AI solutions with CRM, ERP, SharePoint, Dataverse and other business applications."],
    [ShieldCheck, "AI Readiness & Governance", "Prepare your organisation for secure, responsible and scalable AI adoption."],
    [Sparkles, "Training & Adoption", "Help teams understand AI tools and confidently incorporate them into everyday work."],
  ];

  const steps = [
    ["01", "Discover", "We understand your business, challenges and current processes."],
    ["02", "Design", "We create a practical AI solution and implementation roadmap."],
    ["03", "Build", "We configure, integrate and test the solution with your team."],
    ["04", "Scale", "We measure results, train users and expand what works."],
  ];

  const buttonFx = "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0";

  const submitReview = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Lindava Intelligence Client Review");
    const body = encodeURIComponent(
      `Name: ${reviewName}\nCompany: ${reviewCompany || "Not provided"}\nRating: ${reviewRating}/5\n\nReview:\n${reviewText}`
    );
    window.location.href = `mailto:lindanicholus@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-300 text-slate-950"><Sparkles size={18} /></span>
            <span>Lindava Intelligence</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {['services','process','about','reviews','contact'].map((item) => (
              <a key={item} className="capitalize transition hover:text-white" href={`#${item}`}>{item}</a>
            ))}
          </div>
          <a href="#contact" className={`hidden rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-200 md:inline-flex ${buttonFx}`}>
            Book a consultation <ArrowRight className="ml-2" size={16} />
          </a>
          <button className="md:hidden" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && (
          <div className="space-y-4 border-t border-white/10 px-6 py-5 text-slate-200 md:hidden">
            {['services','process','about','reviews','contact'].map((item) => (
              <a key={item} onClick={() => setMenuOpen(false)} className="block capitalize" href={`#${item}`}>{item}</a>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[130px]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-cyan-200"><Sparkles size={14} /> Practical AI for real business</div>
            <h1 className="text-5xl font-black leading-[.98] tracking-[-.05em] sm:text-6xl lg:text-7xl">Turn AI into measurable <span className="text-cyan-300">business value.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">We help businesses automate processes, deploy AI assistants and integrate intelligent solutions with the systems their teams already use.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className={`rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-200 ${buttonFx}`} href="#contact">Start your AI journey <ArrowRight className="ml-2 inline" size={18} /></a>
              <a className={`rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10 ${buttonFx}`} href="#services">Explore services</a>
              <a className={`inline-flex items-center rounded-full border border-amber-300/30 bg-amber-300/5 px-6 py-3 font-semibold text-amber-200 hover:bg-amber-300/10 ${buttonFx}`} href="#reviews"><Star className="mr-2" size={17} /> Reviews</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-5 text-sm text-slate-400">{["Business-first approach","Secure by design","Built for adoption"].map((x) => <span className="flex items-center gap-2" key={x}><CheckCircle2 size={16} className="text-cyan-300" />{x}</span>)}</div>
          </motion.div>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[.03] p-6 shadow-2xl">
            <p className="text-xs uppercase tracking-[.2em] text-slate-400">AI Opportunity Map</p>
            <p className="mt-1 text-xl font-semibold">Your business, intelligently connected</p>
            <div className="grid grid-cols-2 gap-3 py-8">{[[Bot,"AI Agent"],[Workflow,"Automation"],[Database,"Business Data"],[ShieldCheck,"Governance"]].map(([Icon,label],i) => <motion.a href="#contact" whileHover={{ y: -4 }} key={label} className={`rounded-2xl border border-white/10 p-5 ${i===0?'bg-cyan-300 text-slate-950':'bg-slate-900/70 hover:bg-slate-800/80'}`}><Icon className="mb-8" /><p className="font-semibold">{label}</p><p className={`mt-1 text-xs ${i===0?'text-slate-700':'text-slate-400'}`}>Explore solution</p></motion.a>)}</div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"><div className="flex justify-between text-sm"><span className="text-slate-400">Transformation roadmap</span><span className="text-cyan-300">Ready</span></div><div className="mt-4 h-2 rounded-full bg-white/10"><div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" /></div></div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-900/45 py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-sm font-bold uppercase tracking-[.22em] text-cyan-300">What we do</p><h2 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">AI services designed around your business.</h2><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(([Icon,title,text]) => <a href="#contact" key={title} className="group rounded-[1.6rem] border border-white/10 bg-white/[.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[.07] hover:shadow-xl"><div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300"><Icon /></div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-slate-400">{text}</p><span className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-300">Discuss this service <ArrowRight className="ml-2" size={15} /></span></a>)}</div></div></section>

      <section id="process" className="py-24"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-sm font-bold uppercase tracking-[.22em] text-cyan-300">How it works</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">From idea to impact.</h2><div className="mt-14 grid gap-8 md:grid-cols-4">{steps.map(([n,t,d]) => <div key={n} className="border-t border-white/15 pt-5"><span className="font-mono text-sm text-cyan-300">{n}</span><h3 className="mt-6 text-xl font-semibold">{t}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{d}</p></div>)}</div><a href="#contact" className={`mt-10 inline-flex items-center rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-200 ${buttonFx}`}>Start with discovery <ArrowRight className="ml-2" size={16} /></a></div></section>

      <section id="about" className="pb-24"><div className="mx-auto max-w-7xl px-6"><div className="grid gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 to-blue-500/5 p-8 md:grid-cols-2 md:p-12"><div><p className="text-sm font-bold uppercase tracking-[.22em] text-cyan-300">Why Lindava Intelligence</p><h2 className="mt-4 text-3xl font-bold">Technology should simplify work, not add complexity.</h2></div><div className="space-y-5 text-slate-300"><p>We combine business process thinking with modern AI and automation to solve practical operational challenges.</p><p>Our approach focuses on clear use cases, integration with existing systems, responsible deployment and user adoption.</p><a href="#contact" className={`inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-semibold text-white hover:bg-white/10 ${buttonFx}`}>Talk to us <ArrowRight className="ml-2" size={16} /></a></div></div></div></section>

      <section id="reviews" className="pb-10"><div className="mx-auto max-w-7xl px-6"><div className="rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-amber-300/10 to-white/[.03] p-8 md:p-12"><div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center"><div><div className="mb-4 flex gap-1 text-amber-300">{[1,2,3,4,5].map(n => <Star key={n} size={20} fill="currentColor" />)}</div><p className="text-sm font-bold uppercase tracking-[.22em] text-amber-200">Client Reviews</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Worked with Lindava Intelligence?</h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">Your feedback helps future clients understand the value of our AI consulting, automation and business application services.</p></div><a href="#review-form" className={`inline-flex items-center rounded-full bg-amber-300 px-7 py-3 font-semibold text-slate-950 hover:bg-amber-200 ${buttonFx}`}>Leave a review <Star className="ml-2" size={17} /></a></div></div></div></section>

      <section id="review-form" className="pb-24"><div className="mx-auto max-w-4xl px-6"><div className="rounded-[2rem] border border-white/10 bg-white/[.04] p-8 md:p-12"><p className="text-sm font-bold uppercase tracking-[.22em] text-amber-200">Share your experience</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Leave a review</h2><p className="mt-3 text-slate-400">Complete the form below. Your email app will open with the review prepared for submission.</p><form onSubmit={submitReview} className="mt-8 grid gap-5"><div className="grid gap-5 md:grid-cols-2"><label className="grid gap-2 text-sm font-semibold text-slate-200">Name<input required value={reviewName} onChange={e => setReviewName(e.target.value)} className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300" placeholder="Your name" /></label><label className="grid gap-2 text-sm font-semibold text-slate-200">Company <span className="font-normal text-slate-500">(optional)</span><input value={reviewCompany} onChange={e => setReviewCompany(e.target.value)} className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300" placeholder="Company name" /></label></div><div><p className="mb-2 text-sm font-semibold text-slate-200">Rating</p><div className="flex gap-2">{[1,2,3,4,5].map(n => <button type="button" aria-label={`${n} star rating`} key={n} onClick={() => setReviewRating(n)} className={`rounded-lg p-1 transition hover:scale-110 ${n <= reviewRating ? 'text-amber-300' : 'text-slate-600'}`}><Star size={27} fill={n <= reviewRating ? 'currentColor' : 'none'} /></button>)}</div></div><label className="grid gap-2 text-sm font-semibold text-slate-200">Your review<textarea required rows={5} value={reviewText} onChange={e => setReviewText(e.target.value)} className="resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300" placeholder="Tell us about your experience..." /></label><button type="submit" className={`w-fit rounded-full bg-amber-300 px-7 py-3 font-semibold text-slate-950 hover:bg-amber-200 ${buttonFx}`}>Submit review <ArrowRight className="ml-2 inline" size={17} /></button></form></div></div></section>

      <section id="contact" className="pb-24"><div className="mx-auto max-w-5xl px-6 text-center"><div className="rounded-[2rem] bg-cyan-300 px-7 py-14 text-slate-950"><p className="text-sm font-bold uppercase tracking-[.2em]">Ready to get started?</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black md:text-5xl">Let's find where AI can make the biggest difference in your business.</h2><p className="mx-auto mt-5 max-w-xl text-slate-700">Book a discovery session and we'll identify practical opportunities for automation, AI agents and smarter processes.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a className={`inline-flex items-center rounded-full bg-slate-950 px-7 py-3 font-semibold text-white hover:bg-slate-800 ${buttonFx}`} href="mailto:lindanicholus@gmail.com?subject=AI%20Consultation%20Request%20-%20Lindava%20Intelligence">Book a free consultation <ArrowRight className="ml-2" /></a><a className={`rounded-full border border-slate-950/20 bg-white/30 px-7 py-3 font-semibold hover:bg-white/60 ${buttonFx}`} href="tel:+27712168481">Call 0712168481</a></div><div className="mt-5 flex flex-wrap justify-center gap-5 text-sm font-semibold text-slate-700"><a className="hover:underline" href="tel:+27826249182">0826249182</a><a className="hover:underline" href="tel:+27712168481">0712168481</a><a className="hover:underline" href="mailto:lindanicholus@gmail.com">lindanicholus@gmail.com</a><a className="hover:underline" href="mailto:nenemvelo15@gmail.com">nenemvelo15@gmail.com</a></div></div></div></section>

      <footer className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:justify-between"><span>© 2026 Lindava Intelligence. All rights reserved.</span><span>AI Consulting • Automation • Intelligent Business Solutions</span></div></footer>
    </main>
  );
}
