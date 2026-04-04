"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputCls = "w-full bg-white border border-black/10 rounded-[16px] px-[24px] py-[14px] text-[#252525] text-[16px] font-medium tracking-[-0.32px] placeholder:text-[#acacac] placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#0072d0]/30 focus:border-[#0072d0] transition-colors";

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-[url('/contact-bg-mobile.png')] bg-cover bg-center bg-no-repeat">

      <div className="max-w-[1440px] mx-auto flex flex-col gap-[40px] items-center py-[48px] xl:py-[64px] px-4 md:px-12 xl:px-[64px]">

      {/* heading */}
      <div className="relative flex flex-col gap-[16px] items-center text-center">
        <h2 className="text-[#252525] text-[48px] font-semibold leading-[0.95] tracking-[-1.44px]">Contact Me</h2>
        <p className="text-[#252525] text-[18px] leading-[0.95] tracking-[-0.54px] whitespace-nowrap">I don&apos;t bite. Say hello.</p>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit} noValidate className="relative flex flex-col gap-[16px] w-full md:w-[510px]">
        <div className="flex flex-col md:flex-row gap-[20px]">
          <div className="flex flex-col gap-[8px] flex-1">
            <label htmlFor="name" className="text-[#252525] text-[14px] font-medium tracking-[-0.42px]">Full Name</label>
            <input id="name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Joe Bloggs" required className={inputCls} />
          </div>
          <div className="flex flex-col gap-[8px] flex-1">
            <label htmlFor="email" className="text-[#252525] text-[14px] font-medium tracking-[-0.42px]">Email Address</label>
            <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="joe@example.com" required className={inputCls} />
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <label htmlFor="message" className="text-[#252525] text-[14px] font-medium tracking-[-0.42px]">Message</label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Write your message..." required rows={5}
            className={`${inputCls} h-[146px] resize-none items-start`} />
        </div>

        <button type="submit" disabled={status === "loading"}
          className="w-full bg-[#0072d0] text-white text-[16px] font-medium leading-[0.9] rounded-[100px] px-[26px] py-[16px] hover:bg-[#0064b6] active:scale-[0.98] transition-all disabled:opacity-60">
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && <p className="text-center text-[#0064b6] text-[15px] font-medium">Message sent! I&apos;ll be in touch soon.</p>}
        {status === "error"   && <p className="text-center text-red-500 text-[15px] font-medium">Something went wrong. Please try again.</p>}
      </form>
      </div>
    </section>
  );
}
