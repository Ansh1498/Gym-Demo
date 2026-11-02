import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";
import FadeIn from "@/components/animations/FadeIn";
import InfoCard from "@/components/cards/InfoCard";
import ImageBox from "@/components/ui/ImageBox";
import { siteConfig } from "@/data/siteConfig";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <Stagger className="space-y-4" stagger={0.1}>
        <StaggerItem>
          <InfoCard icon={MapPin} title="Address">
            {siteConfig.address}
          </InfoCard>
        </StaggerItem>
        <StaggerItem>
          <InfoCard icon={Phone} title="Phone and WhatsApp">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-brand">
              {siteConfig.phone}
            </a>
          </InfoCard>
        </StaggerItem>
        <StaggerItem>
          <InfoCard icon={Mail} title="Email">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-brand">
              {siteConfig.email}
            </a>
          </InfoCard>
        </StaggerItem>
        <StaggerItem>
          <InfoCard icon={Clock} title="Timing">
            <p>{siteConfig.timing.weekdays}</p>
            <p>{siteConfig.timing.sunday}</p>
          </InfoCard>
        </StaggerItem>
      </Stagger>

      <FadeIn delay={0.2} className="h-60 overflow-hidden rounded-3xl border border-orange-100">
        {siteConfig.mapEmbed ? (
          <iframe
            title="FitIndia Gym location"
            src={siteConfig.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
        ) : (
          <ImageBox label="Google Map (gym location)" className="h-full w-full" />
        )}
      </FadeIn>
    </div>
  );
}