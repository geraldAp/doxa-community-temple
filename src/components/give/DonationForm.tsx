import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, Heart, DollarSign } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const presetAmounts = ["1000", "5000", "10000", "50000"]

export function DonationForm() {
  const [donationAmount, setDonationAmount] = useState("")
  const { toast } = useToast()

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Donation Received",
      description: "Thank you for your generous donation!",
    })
    setDonationAmount("")
  }

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <Card className="overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Giving hands"
          width={800}
          height={400}
          className="w-full h-48 object-cover"
        />
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2 mb-4">
            <Gift className="w-8 h-8 text-primary" />
            Give Today
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Your generous donations help us continue our mission and serve our community. Every contribution makes a
            difference.
          </p>
          <form onSubmit={handleDonation} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {presetAmounts.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant={donationAmount === amount ? "default" : "outline"}
                  onClick={() => setDonationAmount(amount)}
                  className="h-16 text-lg"
                >
                  ₦{Number.parseInt(amount).toLocaleString()}
                </Button>
              ))}
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Custom Amount (₦)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  id="amount"
                  type="number"
                  min="100"
                  step="100"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="pl-10 text-lg h-12"
                  placeholder="Enter amount"
                  required
                />
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full text-lg">
              Donate Now
              <Heart className="w-5 h-5 ml-2" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.section>
  )
}

