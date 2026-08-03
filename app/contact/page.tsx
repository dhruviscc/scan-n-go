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
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";

const contactDetails = [
  { icon: Phone, title: "Phone", value: "+91 93633 34349", href: "tel:+919363334349" },
  { icon: Mail, title: "Email", value: "info@scan-n-go.com", href: "mailto:info@scan-n-go.com" },
  { icon: MapPin, title: "Office Address", value: "Coimbatore, Tamil Nadu, India", href: "https://maps.google.com/?q=Coimbatore,+Tamil+Nadu,+India" },
  { icon: Clock3, title: "Working Hours", value: "Mon – Sat, 9:00 AM – 6:00 PM", href: "#" },
];

const faqs = [
  ["How soon will I hear back?", "Our team generally responds within one business day. For urgent assistance, call us directly."],
  ["Can I request a product demo?", "Absolutely. Select “Product demo” as the subject and tell us a little about your requirements."],
  ["Do you offer support for existing users?", "Yes. Share your registered email and a short description of the issue so our support team can help quickly."],
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <div className="overflow-hidden bg-white pt-24 text-slate-800 sm:pt-28">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#f8f6ff] via-[#f2efff] to-[#e6e0ff] pb-20 pt-16 sm:pb-24 sm:pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-32 h-[410px] w-[410px] rounded-full bg-violet-400/25 blur-[95px]" />
          <div className="absolute -bottom-44 -left-20 h-[360px] w-[360px] rounded-full bg-indigo-300/35 blur-[90px]" />
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#a78bfa_1px,transparent_1px)] [background-size:22px_22px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700 shadow-sm backdrop-blur">
            <MessageCircle size={15} /> Contact Scan-N-Go
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            We&apos;d Love To <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Hear From You</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Whether you need a product demo, support, or help bringing smarter QR access to your organisation, our team is here for you.
          </p>
        </div>
      </section>

      <section className="relative mx-auto -mt-8 max-w-8xl px-4 pb-20 sm:px-6 lg:px-10">
        <div className="grid overflow-hidden rounded-[28px] border border-violet-100 bg-white shadow-[0_24px_65px_rgba(76,39,155,0.12)] lg:grid-cols-[1.08fr_.92fr]">
          <form onSubmit={handleSubmit} className="p-6 sm:p-9 lg:p-12">
            <div className="mb-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet-600">Contact Form</p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">Tell us how we can help</h2>
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
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet-300">Contact Information</p>
              <h2 className="mt-2 text-3xl font-black">Let&apos;s start a conversation.</h2>
              <p className="mt-3 max-w-md leading-7 text-indigo-100/75">Reach out through any channel that is most convenient for you.</p>
              <div className="mt-9 space-y-4">
                {contactDetails.map(({ icon: Icon, title, value, href }) => (
                  <a key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.12]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-400/20 text-violet-200"><Icon size={20} /></span>
                    <span><span className="block text-xs font-semibold uppercase tracking-wider text-indigo-200/65">{title}</span><span className="mt-1 block text-sm font-semibold text-white sm:text-base">{value}</span></span>
                  </a>
                ))}
              </div>
              <div className="mt-9 border-t border-white/10 pt-7">
                <p className="text-sm font-bold">Follow us on social media</p>
                <div className="mt-4 flex gap-3">
                  <Social href="https://www.facebook.com/app.scanngo" label="Facebook"><FaFacebook size={18} /></Social>
                  <Social href="https://www.instagram.com/scan_n_go_/" label="Instagram"><BsInstagram size={18} /></Social>
                  <Social href="https://www.youtube.com" label="YouTube"><BsYoutube size={19} /></Social>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet-600">Office Location</p><h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Find our office</h2></div><a href="https://maps.google.com/?q=Coimbatore,+Tamil+Nadu,+India" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-violet-700 hover:text-indigo-700">Get directions <ArrowRight size={18} /></a></div>
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-sm"><iframe title="Scan-N-Go office location in Coimbatore" src="https://www.google.com/maps?q=Coimbatore%2C%20Tamil%20Nadu%2C%20India&output=embed" className="h-[360px] w-full rounded-[20px] border-0 sm:h-[440px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20"><div className="absolute left-1/2 top-0 h-60 w-[600px] -translate-x-1/2 rounded-full bg-violet-100/70 blur-3xl" /><div className="relative mx-auto max-w-4xl px-4 sm:px-6"><div className="text-center"><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet-600">Help Center</p><h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">FAQs &amp; useful resources</h2><p className="mt-3 text-slate-500">Quick answers before you get in touch.</p></div><div className="mt-10 space-y-3">{faqs.map(([question, answer], index) => <div key={question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold text-slate-800 sm:px-6"><span>{question}</span><ChevronDown className={`shrink-0 text-violet-600 transition-transform ${openFaq === index ? "rotate-180" : ""}`} size={20} /></button>{openFaq === index && <p className="border-t border-slate-100 px-5 py-4 leading-7 text-slate-500 sm:px-6">{answer}</p>}</div>)}</div><div className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-bold text-violet-700"><Link href="/faq" className="hover:text-indigo-600">FAQs</Link><Link href="/user-guide" className="hover:text-indigo-600">User Guide</Link><Link href="/documentation" className="hover:text-indigo-600">Documentation</Link></div></div></section>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required = false }: { label: string; name: string; type?: string; placeholder: string; required?: boolean }) {
  return <label className="block text-sm font-bold text-slate-700">{label}<input name={name} type={type} placeholder={placeholder} required={required} className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100" /></label>;
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:-translate-y-1 hover:bg-violet-500">{children}</a>;
}
