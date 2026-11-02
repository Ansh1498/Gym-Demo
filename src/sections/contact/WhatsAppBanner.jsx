import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export default function WhatsAppBanner() {
  return (
    <section className="py-10">
      <Container>
        <FadeIn className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-orange-100 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-extrabold sm:text-2xl">
              Chat with us on WhatsApp
            </h2>
            <p className="mt-1 text-sm text-muted">
              Start a chat for a quick reply
            </p>
          </div>
          <Button
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 gap-2"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}