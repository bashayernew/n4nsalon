"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { servicesCatalog } from "@/data/services-catalog";
import { staffBookingIds } from "@/data/staff-booking-catalog";
import type { StaffBookingId } from "@/data/staff-booking-catalog";
import { siteConfig } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";

const times = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

type Step = 1 | 2 | 3 | 4 | 5;

const inputClass =
  "mt-2 w-full rounded-sm border border-line bg-surface-card px-4 py-3 text-ink placeholder:text-taupe-soft/80 focus:border-line-strong focus:outline-none focus:ring-1 focus:ring-accent/30";

export function BookingForm() {
  const t = useTranslations("booking");
  const tItems = useTranslations("services.items");

  const [step, setStep] = useState<Step>(1);
  const [serviceId, setServiceId] = useState(
    servicesCatalog[0]?.id ?? ""
  );
  const [staffId, setStaffId] = useState<StaffBookingId>(
    staffBookingIds[0] ?? "any"
  );
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [homeService, setHomeService] = useState(false);

  const selectedServiceTitle = serviceId
    ? tItems(`${serviceId}.title`)
    : "—";
  const selectedStaffName = t(`staff.${staffId}.name`);

  const canNext =
    step === 1
      ? Boolean(serviceId)
      : step === 2
        ? Boolean(staffId)
        : step === 3
          ? Boolean(date)
          : step === 4
            ? Boolean(time)
            : true;

  function next() {
    if (step < 5 && canNext) setStep((s) => (s + 1) as Step);
  }
  function back() {
    if (step > 1) setStep((s) => (s - 1) as Step);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(t("submitSuccess"));
  }

  const stepLabels: Record<Step, string> = {
    1: t("steps.1"),
    2: t("steps.2"),
    3: t("steps.3"),
    4: t("steps.4"),
    5: t("steps.5"),
  };

  const selectCard = (active: boolean) =>
    active
      ? "border-line-strong bg-surface-sand/80 ring-1 ring-line"
      : "border-line hover:border-line-strong";

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
      <form
        onSubmit={handleSubmit}
        className="rounded-sm border border-line bg-surface-card p-6 shadow-luxury md:p-10"
        noValidate
      >
        <ol className="mb-10 flex flex-wrap gap-2" aria-label={t("formStepsAria")}>
          {([1, 2, 3, 4, 5] as const).map((s) => (
            <li key={s}>
              <button
                type="button"
                onClick={() => setStep(s)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition ${
                  step === s
                    ? "bg-surface-inverse text-on-inverse"
                    : "bg-surface-page text-taupe hover:bg-surface-sand"
                }`}
              >
                {s}. {stepLabels[s]}
              </button>
            </li>
          ))}
        </ol>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="s1"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <h2 className="font-serif text-2xl text-ink">{t("step1.title")}</h2>
              <p className="text-sm text-taupe">{t("step1.hint")}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {servicesCatalog.map((s) => (
                  <label
                    key={s.id}
                    className={`flex cursor-pointer flex-col gap-2 rounded-sm border p-4 transition ${selectCard(serviceId === s.id)}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-medium text-ink">
                        {tItems(`${s.id}.title`)}
                      </span>
                      <input
                        type="radio"
                        name="service"
                        value={s.id}
                        checked={serviceId === s.id}
                        onChange={() => setServiceId(s.id)}
                        className="mt-1 accent-ink"
                      />
                    </div>
                    <span className="text-xs text-taupe">
                      {tItems(`${s.id}.description`)}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wide text-accent">
                      {tItems(`${s.id}.price`)}
                    </span>
                  </label>
                ))}
              </div>
            </motion.div>
          ) : null}

          {step === 2 ? (
            <motion.div
              key="s2"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <h2 className="font-serif text-2xl text-ink">{t("step2.title")}</h2>
              <p className="text-sm text-taupe">{t("step2.hint")}</p>
              <div className="space-y-3">
                {staffBookingIds.map((st) => (
                  <label
                    key={st}
                    className={`flex cursor-pointer items-center justify-between gap-4 rounded-sm border px-4 py-3 transition ${selectCard(staffId === st)}`}
                  >
                    <div>
                      <p className="font-medium text-ink">{t(`staff.${st}.name`)}</p>
                      <p className="text-xs text-taupe">{t(`staff.${st}.title`)}</p>
                      {st !== "any" ? (
                        <p className="mt-1 text-xs text-taupe/85">
                          {t(`staff.${st}.extra`)}
                        </p>
                      ) : null}
                    </div>
                    <input
                      type="radio"
                      name="staff"
                      value={st}
                      checked={staffId === st}
                      onChange={() => setStaffId(st)}
                      className="accent-ink"
                    />
                  </label>
                ))}
              </div>
            </motion.div>
          ) : null}

          {step === 3 ? (
            <motion.div
              key="s3"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <h2 className="font-serif text-2xl text-ink">{t("step3.title")}</h2>
              <label className="block text-sm font-medium text-ink">
                {t("step3.label")}
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={`${inputClass} max-w-xs`}
                  required
                />
              </label>
            </motion.div>
          ) : null}

          {step === 4 ? (
            <motion.div
              key="s4"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <h2 className="font-serif text-2xl text-ink">{t("step4.title")}</h2>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
                {times.map((tm) => (
                  <button
                    key={tm}
                    type="button"
                    onClick={() => setTime(tm)}
                    className={`rounded-sm border px-2 py-2 text-sm transition ${
                      time === tm
                        ? "border-ink bg-surface-inverse text-on-inverse"
                        : "border-line text-taupe hover:border-line-strong"
                    }`}
                  >
                    {tm}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : null}

          {step === 5 ? (
            <motion.div
              key="s5"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl text-ink">{t("step5.title")}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-ink sm:col-span-2">
                  {t("step5.name")}
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-ink">
                  {t("step5.phone")}
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                    autoComplete="tel"
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-ink">
                  {t("step5.email")}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    autoComplete="email"
                  />
                </label>
                <label className="flex cursor-pointer items-center gap-3 sm:col-span-2">
                  <input
                    type="checkbox"
                    checked={homeService}
                    onChange={(e) => setHomeService(e.target.checked)}
                    className="h-4 w-4 accent-ink"
                  />
                  <span className="text-sm text-taupe">{t("step5.homeService")}</span>
                </label>
                <label className="block text-sm font-medium text-ink sm:col-span-2">
                  {t("step5.notes")}
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    className={inputClass}
                    placeholder={t("step5.notesPlaceholder")}
                  />
                </label>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <button
            type="button"
            onClick={back}
            disabled={step === 1}
            className="text-sm font-medium text-taupe underline-offset-4 hover:underline disabled:opacity-40"
          >
            {t("actions.back")}
          </button>
          {step < 5 ? (
            <button
              type="button"
              onClick={next}
              disabled={!canNext}
              className="inline-flex min-h-11 min-w-[140px] items-center justify-center rounded-sm bg-surface-inverse px-6 text-sm font-semibold text-on-inverse transition hover:bg-surface-inverse-soft disabled:opacity-40"
            >
              {t("actions.continue")}
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex min-h-11 min-w-[180px] items-center justify-center rounded-sm bg-surface-inverse px-6 text-sm font-semibold text-on-inverse transition hover:bg-surface-inverse-soft"
            >
              {t("actions.submit")}
            </button>
          )}
        </div>
      </form>

      <aside className="rounded-sm border border-line bg-surface-sand/75 p-6 shadow-luxury lg:sticky lg:top-28">
        <h3 className="font-serif text-xl text-ink">{t("summary.title")}</h3>
        <dl className="mt-6 space-y-4 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wider text-taupe">
              {t("summary.service")}
            </dt>
            <dd className="mt-1 text-ink">{selectedServiceTitle}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-taupe">
              {t("summary.specialist")}
            </dt>
            <dd className="mt-1 text-ink">{selectedStaffName}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-taupe">
              {t("summary.datetime")}
            </dt>
            <dd className="mt-1 text-ink">
              {date || "—"} {time ? `· ${time}` : ""}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-taupe">
              {t("summary.home")}
            </dt>
            <dd className="mt-1 text-ink">
              {homeService ? t("summary.homeYes") : t("summary.homeNo")}
            </dd>
          </div>
        </dl>
        <p className="mt-8 border-t border-line pt-6 text-xs leading-relaxed text-taupe">
          {t("summary.footnote", { phone: siteConfig.phoneDisplay })}
        </p>
      </aside>
    </div>
  );
}
