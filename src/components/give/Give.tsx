"use client";

import { DonationForm } from "./DonationForm";
import { HeroSection } from "./HeroSection";
import { ImpactSection } from "./ImpactSection";
import { VolunteerForm } from "./VolunteerForm";

export default function Give() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="Give & Serve"
        subtitle="Support our mission through giving and serving"
        backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <DonationForm />
          <VolunteerForm />
        </div>
        <ImpactSection />
      </div>
    </div>
  );
}
