"use client";

import { FormEvent, useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  institution: string;
  message: string;
  company?: string; // honeypot
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    institution: "",
    message: "",
    company: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    if (form.company) {
      setStatus("error");
      setError("Algo salió mal. Inténtalo de nuevo.");
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus("success");
      setForm({ name: "", email: "", institution: "", message: "", company: "" });
    } else {
      const data = await response.json().catch(() => null);
      setError(data?.message || "No se pudo enviar. Inténtalo de nuevo.");
      setStatus("error");
    }
  };

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <div className="hidden">
        <label>
          Company
          <input
            value={form.company}
            onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
            name="company"
            autoComplete="off"
          />
        </label>
      </div>
      {([
        { name: "name" as const, label: "Full name", type: "text" },
        { name: "email" as const, label: "Email", type: "email" },
        { name: "institution" as const, label: "Institution / Club", type: "text" },
      ]).map((field) => (
        <div key={field.name} className="space-y-1">
          <label className="text-xs uppercase tracking-[0.2em] text-white/60">
            {field.label}
          </label>
          <input
            required
            type={field.type}
            value={form[field.name]}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, [field.name]: e.target.value }))
            }
            className="w-full rounded-xl border border-white/20 bg-black/60 px-3 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#00B5E2] focus:outline-none"
          />
        </div>
      ))}
      <div className="space-y-1">
        <label className="text-xs uppercase tracking-[0.2em] text-white/60">
          Message
        </label>
        <textarea
          required
          value={form.message}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, message: e.target.value }))
          }
          rows={4}
          className="w-full rounded-xl border border-white/20 bg-black/60 px-3 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#00B5E2] focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-xl bg-gradient-to-r from-[#00B5E2] to-[#60a5ff] px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando..." : "Send to TNA team"}
      </button>
      {status === "success" && (
        <p className="text-sm font-semibold text-green-400">Enviado. Te contactaremos pronto.</p>
      )}
      {status === "error" && error && (
        <p className="text-sm font-semibold text-red-400">{error}</p>
      )}
    </form>
  );
}
