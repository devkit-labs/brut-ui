import { Check, Gem, MoveRight } from "lucide-react"

import { Badge } from "@/registry/brutalist/ui/badge"
import { Button } from "@/registry/brutalist/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/brutalist/ui/card"
import { Separator } from "@/registry/brutalist/ui/separator"

const plans = [
  {
    name: "Solo",
    price: "$0",
    note: "For sharp personal projects.",
    features: ["3 active projects", "Community templates", "One collaborator"],
  },
  {
    name: "Studio",
    price: "$24",
    note: "For teams that ship every week.",
    features: ["Unlimited projects", "10 collaborators", "Custom themes", "Priority exports"],
    recommended: true,
  },
  {
    name: "Agency",
    price: "$68",
    note: "For many clients, zero chaos.",
    features: ["Unlimited seats", "Client portals", "SSO and roles", "Direct support"],
  },
]

export function PricingDeckBlock() {
  return (
    <div className="min-w-[20rem] bg-background p-4 sm:p-8 lg:p-12">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary"><Gem data-icon="inline-start" /> Straightforward pricing</Badge>
          <h2 className="mt-5 text-5xl leading-[0.9] font-black tracking-[-0.065em] uppercase sm:text-6xl">
            Pick your level of serious.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold text-muted-foreground">
            Start free, upgrade when the team arrives, and cancel before anyone schedules a retention call.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.recommended ? "bg-primary text-primary-foreground lg:-translate-y-3" : "bg-card"}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl uppercase">{plan.name}</CardTitle>
                    <p className={`mt-2 font-semibold ${plan.recommended ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                      {plan.note}
                    </p>
                  </div>
                  {plan.recommended && <Badge className="bg-card text-card-foreground">Most popular</Badge>}
                </div>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-6xl font-black tracking-[-0.08em]">{plan.price}</span>
                  <span className="pb-2 text-sm font-black uppercase">/ month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <Separator className={plan.recommended ? "bg-primary-foreground" : undefined} />
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 font-bold">
                      <span className={`grid size-6 place-items-center border-[var(--brut-border)] ${plan.recommended ? "border-primary-foreground bg-card text-card-foreground" : "border-border bg-secondary"}`}>
                        <Check className="size-4" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className={plan.recommended ? "border-primary-foreground bg-primary" : undefined}>
                <Button
                  size="lg"
                  variant={plan.recommended ? "outline" : "default"}
                  className={plan.recommended ? "w-full bg-card text-card-foreground" : "w-full"}
                >
                  Choose {plan.name} <MoveRight data-icon="inline-end" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-xs font-black tracking-wider text-muted-foreground uppercase">
          Prices in USD · taxes handled at checkout · no hidden platform fee
        </p>
      </div>
    </div>
  )
}
