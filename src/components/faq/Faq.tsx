"use client"
import { motion } from "framer-motion"
import { HeroSection } from "./HeroSection"
import { Accordion } from "./Accordation"

const faqs = [
  {
    question: "What time are your Sunday services?",
    answer:
      "We have two Sunday services: 9:00 AM and 11:00 AM. Both services are identical in content and last approximately 90 minutes.",
  },
  {
    question: "Do you have programs for children?",
    answer:
      "Yes, we have age-appropriate programs for children from nursery through high school. Our children's ministry runs concurrently with our Sunday services.",
  },
  {
    question: "How can I become a member of the church?",
    answer:
      "We offer a membership class several times a year. You can sign up for the next available class on our Membership page or by contacting the church office.",
  },
  {
    question: "What do I need to do to get baptized?",
    answer:
      "We perform baptisms regularly. If you're interested in being baptized, please attend our baptism information session, held monthly after each service.",
  },
  {
    question: "How can I get involved in serving at the church?",
    answer:
      "We have many opportunities to serve in various ministries. You can explore these options on our Give/Volunteer page or speak with one of our ministry leaders after a service.",
  },
]

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our church and services"
        backgroundImage="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </motion.div>
    </div>
  )
}

