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
import { AnimatedBackground } from "@/components/ui/animated-background";
import { FaWhatsapp } from "react-icons/fa";

const contactDetails = [
  { icon: Phone, title: "Phone", value: "+91 79906 00155", href: "tel:+917990600155" },
  { icon: Mail, title: "Email", value: "info@Scan n Go .com", href: "mailto:info@Scan n Go .com" },
  { icon: MapPin, title: "Office Address", value: "349-350, Vikas Shoppers, B/H Filter House Bhagvan Nagar Circle, near Sarthana Jakat Naka, Nana Varachha, Surat, Gujarat 395006", href: "https://www.google.com/maps/place/Vikas+Shoppers,+149-150,+Vraj+Chowk+Rd,+nr.+Bhagavan+Nagar+Road,+Sarthana+Jakat+Naka,+Zeal+Park,+Nana+Varachha,+Surat,+Gujarat+395013/@21.226313,72.9000808,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0458bb9aebeb1:0xf108b91bde351df3!8m2!3d21.226313!4d72.9026557!16s%2Fg%2F11gjd_062r?entry=ttu" },
];



export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSent(false);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Something went wrong. Please try again.');

      setSent(true);
      event.currentTarget.reset();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="overflow-hidden bg-white text-slate-800">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10"></div>

        {/* Dynamic Interactive Canvas Particles & Glow Orbs */}
        <AnimatedBackground
          interactive={true}
          density={80}
          particleColorLight="99, 102, 241" // Indigo-500
          particleColorDark="168, 85, 247" // Purple-500
        />
      </div>
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
          {sent ? (
            <div className="p-6 sm:p-9 lg:p-10 flex items-center justify-center min-h-[600px]">
              <div className="text-center max-w-lg">

                {/* Success Icon */}
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-[5px] border-emerald-500">
                  <ShieldCheck size={60} className="text-emerald-500" strokeWidth={2} />
                </div>

                {/* Heading */}
                <h2 className="mt-8 text-4xl font-bold text-emerald-500">
                  Form Submitted Successfully!
                </h2>

                {/* Description */}
                <p className="mt-6 text-xl leading-9 text-slate-500">
                  Thank you! Your form has been submitted successfully.
                  <br />
                  We will reply to you soon.
                </p>

                {/* Button */}
                <button
                  onClick={() => {
                    setSent(false);
                    setError(null);
                  }}
                  className="mt-10 rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white transition hover:bg-violet-700"
                >
                  Go Back
                </button>

              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-9 lg:p-10">

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
                    <option>Product demo</option>
                    <option>Technical support</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>

              <div>
                <label className="mt-5 block text-sm font-bold text-slate-700">Message
                  <textarea name="message" required rows={5} placeholder="Tell us a little more about what you need..." className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100" />
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="cta-primary mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold text-white shadow-lg shadow-violet-500/25 hover:-translate-y-0.5 sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send size={18} />
                  {submitting ? "Sending..." : "Send Message"}
                </button>

                {error && (
                  <div className="mt-5 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-600">
                    <p className="text-sm font-medium">{error}</p>
                  </div>
                )}
              </div>
            </form>
          )}

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
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">

          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet-600">
                Office Location
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Find Our Office
              </h2>
            </div>

            <a
              href="https://www.google.com/maps/place/Vikas+Shoppers,+149-150,+Vraj+Chowk+Rd,+nr.+Bhagavan+Nagar+Road,+Sarthana+Jakat+Naka,+Zeal+Park,+Nana+Varachha,+Surat,+Gujarat+395013/@21.226313,72.9000808,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0458bb9aebeb1:0xf108b91bde351df3!8m2!3d21.226313!4d72.9026557!16s%2Fg%2F11gjd_062r?entry=ttu"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-bold text-violet-700 transition hover:text-indigo-700"
            >
              Get Directions
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-xl">
            <iframe
              title="Scan n Go office location in Surat"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1395795971835!2d72.90008077600217!3d21.22631298096263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0458bb9aebeb1%3A0xf108b91bde351df3!2sVikas%20Shoppers%2C%20149-150%2C%20Vraj%20Chowk%20Rd%2C%20nr.%20Bhagavan%20Nagar%20Road%2C%20Sarthana%20Jakat%20Naka%2C%20Zeal%20Park%2C%20Nana%20Varachha%2C%20Surat%2C%20Gujarat%20395013!5e0!3m2!1sen!2sin!4v1785922228546!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-[24px] border-0
                   h-[350px]
                   sm:h-[450px]
                   md:h-[550px]
                   lg:h-[650px]
                   xl:h-[620px]"
            />
          </div>

        </div>
      </section>


    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required = false }: { label: string; name: string; type?: string; placeholder: string; required?: boolean }) {
  return <label className="block text-sm font-bold text-slate-700">{label}<input name={name} type={type} placeholder={placeholder} required={required} className="mt-2 h-12 w-full rounded-xl border border-slate-200 px-4 text-sm font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100" /></label>;
}
