"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,

} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const contactDetails = [
  { icon: Phone, title: "Phone", value: "+91 93633 34349", href: "tel:+919363334349" },
  { icon: Mail, title: "Email", value: "info@scan-n-go.com", href: "mailto:info@scan-n-go.com" },
  { icon: MapPin, title: "Office Address", value: "Coimbatore, Tamil Nadu, India", href: "https://maps.google.com/?q=Coimbatore,+Tamil+Nadu,+India" },
];



export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <div className="overflow-hidden bg-white text-slate-800">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] pb-20 pt-20 sm:pb-24 sm:pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-32 h-[410px] w-[410px] rounded-full bg-violet-400/25 blur-[95px]" />
          <div className="absolute -bottom-44 -left-20 h-[360px] w-[360px] rounded-full bg-indigo-300/35 blur-[90px]" />
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#a78bfa_1px,transparent_1px)] [background-size:22px_22px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 mt-20 text-center sm:px-6">

          <h1 className="mx-auto mt-6 max-w-3xl text-center text-4xl font-bold  leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            We'd Love To
            <span className="mt-2 block">
              <TypeAnimation
                sequence={[
                  "Hear From You",
                  2500,

                  "Help Your Business",
                  2500,
                ]}
                wrapper="span"
                cursor
                repeat={Infinity}
                className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              />
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Whether you need a product demo, support, or help bringing smarter QR access to your organisation, our team is here for you.
          </p>
        </div>
      </section>

      <section className="relative mx-auto mt-20 max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
        <div className="grid overflow-hidden rounded-[28px] border border-violet-100 bg-white shadow-[0_24px_65px_rgba(76,39,155,0.12)] lg:grid-cols-[1.08fr_.92fr]">
          <form onSubmit={handleSubmit} className="p-6 sm:p-9 lg:p-12">
            <div className="mb-8">
              <h2 className="mt-2 text-3xl font-bold  text-slate-900">Tell us how we can help</h2>
              <p className="mt-2 text-slate-500">Fill in the details below and we&apos;ll get back to you shortly.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
              <Field label="Mobile" name="mobile" type="tel" placeholder="+91 00000 00000" required />
              <label className="block text-sm font-bold text-slate-700">Subject
                <select name="subject" required defaultValue="" className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-600 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100">
                  <option value="" disabled>Select a subject</option>
                  <option>Product demo</option><option>Sales enquiry</option><option>Technical support</option><option>Other</option>
                </select>
              </label>
            </div>
            <label className="mt-5 block text-sm font-bold text-slate-700">Message
              <textarea name="message" required rows={5} placeholder="Tell us a little more about what you need..." className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100" />
            </label>
            <button type="submit" className="cta-primary mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold text-white shadow-lg shadow-violet-500/25 hover:-translate-y-0.5 sm:w-auto">
              <Send size={18} /> Send Message
            </button>
            {sent && <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-600"><ShieldCheck size={18} /> Thank you! Your message has been received.</p>}
          </form>

          <aside className="relative overflow-hidden bg-[#17104a] p-6 text-white sm:p-9 lg:p-12">
            <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-violet-500/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-500/30 blur-3xl" />
            <div className="relative">
              <h2 className="mt-2 text-3xl font-bold ">Let&apos;s start a conversation.</h2>
              <p className="mt-3 max-w-md leading-7 text-indigo-100/75">Reach out through any channel that is most convenient for you.</p>
              <div className="mt-9 space-y-4">
                {contactDetails.map(({ icon: Icon, title, value, href }) => (
                  <a key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.12]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-400/20 text-violet-200"><Icon size={20} /></span>
                    <span><span className="block text-xs font-semibold uppercase tracking-wider text-indigo-200/65">{title}</span><span className="mt-1 block text-sm font-semibold text-white sm:text-base">{value}</span></span>
                  </a>
                ))}
              </div>

            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet-600">Office Location</p><h2 className="mt-2 text-3xl font-bold  text-slate-900 sm:text-4xl">Find our office</h2></div><a href="https://maps.google.com/?q=Coimbatore,+Tamil+Nadu,+India" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-violet-700 hover:text-indigo-700">Get directions <ArrowRight size={18} /></a></div>
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-sm"><iframe title="Scan n Gooffice location in Coimbatore" src="https://www.google.com/maps?q=Coimbatore%2C%20Tamil%20Nadu%2C%20India&output=embed" className="h-[360px] w-full rounded-[20px] border-0 sm:h-[440px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </section>


    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required = false }: { label: string; name: string; type?: string; placeholder: string; required?: boolean }) {
  return <label className="block text-sm font-bold text-slate-700">{label}<input name={name} type={type} placeholder={placeholder} required={required} className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100" /></label>;
}


