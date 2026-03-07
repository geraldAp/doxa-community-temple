import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const presetAmounts = ["100", "500", "1000", "5000"]

export function DonationForm({ paymentInstructions }: { paymentInstructions?: string }) {
  const [donationAmount, setDonationAmount] = useState("")
  const { toast } = useToast()

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Donation Received",
      description: `Thank you for your generous donation of GH₵${Number(donationAmount).toLocaleString()}!`,
    })
    setDonationAmount("")
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <Card className="overflow-hidden border-none bg-card">
        <div className="relative h-64 w-full">
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Giving hands"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
            <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <Gift className="w-8 h-8 text-primary-foreground" />
              Give Today
            </h2>
          </div>
        </div>
        
        <CardContent className="p-8 space-y-8">
          {paymentInstructions ? (
            <div className="bg-muted/50 p-6 rounded-lg border border-border/50">
              <p className="text-muted-foreground leading-relaxed">{paymentInstructions}</p>
            </div>
          ) : (
            <p className="text-muted-foreground text-lg leading-relaxed">
              Your generous donations help us continue our mission and serve our community. Every contribution makes a difference.
            </p>
          )}

          <form onSubmit={handleDonation} className="space-y-8">
            <div className="space-y-4">
              <Label className="text-base font-semibold">Select Amount</Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {presetAmounts.map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    variant={donationAmount === amount ? "default" : "outline"}
                    onClick={() => setDonationAmount(amount)}
                    className="h-14 text-lg font-medium transition-all hover:scale-105"
                  >
                    GH₵{Number(amount).toLocaleString()}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="amount" className="text-base font-semibold">Custom Amount (GH₵)</Label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground font-semibold group-focus-within:text-primary transition-colors">GH₵</span>
                <Input
                  id="amount"
                  type="number"
                  min="1"
                  step="1"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="pl-14 h-14 text-lg bg-muted/30 border-border/60 focus:ring-primary/20"
                  placeholder="Enter amount"
                  required
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold hover:-translate-y-0.5 transition-all">
              Donate Now
              <Heart className="w-5 h-5 ml-2 fill-current" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.section>
  )
}
