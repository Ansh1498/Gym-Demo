import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const interests = ["Weight loss", "Muscle gain", "Yoga", "Kids and Teens", "Other"];

const initialValues = {
  name: "",
  phone: "",
  email: "",
  interest: "",
  message: "",
};

function validate(v) {
  const errors = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your name.";

  const phone = v.phone.replace(/[\s-]/g, "").replace(/^(\+91|91)/, "");
  if (!/^[6-9]\d{9}$/.test(phone))
    errors.phone = "Enter a valid 10-digit mobile number.";

  if (!/^\S+@\S+\.\S+$/.test(v.email.trim()))
    errors.email = "Enter a valid email address.";

  if (!v.interest) errors.interest = "Please select your interest.";

  if (v.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";

  return errors;
}

const inputBase =
  "w-full rounded-xl border bg-cream px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-brand focus:bg-white";

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-bold text-muted">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pt-1.5 text-xs font-semibold text-red-600"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSending(true);
    // TODO: yahan asli backend / email service ka call aayega
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setValues(initialValues);
    }, 1200);
  };

  const fieldClass = (name) =>
    cn(inputBase, errors[name] ? "border-red-400" : "border-orange-100");

  const aria = (name) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <div className="rounded-[2rem] border border-orange-100 bg-white p-6 sm:p-8">
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.1 }}
              className="text-brand"
            >
              <CheckCircle2 size={72} strokeWidth={1.5} />
            </motion.span>
            <h3 className="mt-5 text-2xl font-extrabold">Message sent!</h3>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Thanks for reaching out. Our team will reply within 24 hours.
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setSent(false)}
            >
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
          >
            <h2 className="text-xl font-extrabold">Send us a message</h2>

            <Field id="name" label="Your name" error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Type here"
                value={values.name}
                onChange={handleChange}
                className={fieldClass("name")}
                {...aria("name")}
              />
            </Field>

            <Field id="phone" label="Phone number" error={errors.phone}>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Type here"
                value={values.phone}
                onChange={handleChange}
                className={fieldClass("phone")}
                {...aria("phone")}
              />
            </Field>

            <Field id="email" label="Email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Type here"
                value={values.email}
                onChange={handleChange}
                className={fieldClass("email")}
                {...aria("email")}
              />
            </Field>

            <Field id="interest" label="Interest" error={errors.interest}>
              <select
                id="interest"
                name="interest"
                value={values.interest}
                onChange={handleChange}
                className={fieldClass("interest")}
                {...aria("interest")}
              >
                <option value="">Select your interest</option>
                {interests.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </Field>

            <Field id="message" label="Message" error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Write your question..."
                value={values.message}
                onChange={handleChange}
                className={cn(fieldClass("message"), "resize-none")}
                {...aria("message")}
              />
            </Field>

            <Button type="submit" disabled={sending} className="w-full gap-2 disabled:opacity-70">
              {sending ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send message
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}