import { HeroSection } from "./HeroSection";
import { getFaqs } from "@/lib/api";
import FAQArea from "./FAQArea";

export default async function FAQ() {
  const data: FAQ[] = await getFaqs();
  console.log(data[0].question);
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our church and services"
        backgroundImage="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      <FAQArea data={data} />
    </div>
  );
}
