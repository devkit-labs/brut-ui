import { ArrowRight, LockKeyhole, ShieldCheck, Zap } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/registry/brutalist/ui/alert"
import { Badge } from "@/registry/brutalist/ui/badge"
import { Button } from "@/registry/brutalist/ui/button"
import { Checkbox } from "@/registry/brutalist/ui/checkbox"
import { Input } from "@/registry/brutalist/ui/input"
import { Label } from "@/registry/brutalist/ui/label"
import { Separator } from "@/registry/brutalist/ui/separator"

export function AuthGatewayBlock() {
  return (
    <div className="min-w-[20rem] bg-background p-4 sm:p-8 lg:p-12">
      <div className="brut-panel mx-auto grid max-w-5xl overflow-hidden bg-card lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="flex flex-col justify-between border-b-[var(--brut-border)] border-border bg-primary p-7 text-primary-foreground lg:border-r-[var(--brut-border)] lg:border-b-0 lg:p-10">
          <div>
            <div className="brut-surface grid size-12 place-items-center bg-card text-card-foreground">
              <Zap className="size-6" />
            </div>
            <Badge variant="outline" className="mt-8 border-current text-current shadow-none">
              Members only
            </Badge>
            <h2 className="mt-5 text-4xl leading-[0.92] font-black tracking-[-0.055em] uppercase sm:text-5xl">
              Back inside in thirty seconds.
            </h2>
            <p className="mt-5 max-w-md font-semibold opacity-80">
              Sign in to keep shipping, review team activity, and close out your loudest ideas.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-3 border-t-[var(--brut-border)] border-current/40 pt-5 text-sm font-bold">
            <ShieldCheck className="size-5" /> Passkeys and SSO supported
          </div>
        </aside>

        <main className="p-7 lg:p-10">
          <div className="mx-auto max-w-md">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-black tracking-widest text-muted-foreground uppercase">Account access</p>
                <h3 className="mt-2 text-3xl font-black tracking-tight uppercase">Welcome back.</h3>
              </div>
              <LockKeyhole className="size-8" />
            </div>

            <Alert className="mt-7 bg-secondary">
              <ShieldCheck />
              <AlertTitle>Your workspace is protected</AlertTitle>
              <AlertDescription>We will never ask for your password by email.</AlertDescription>
            </Alert>

            <form className="mt-7 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="block-email">Work email</Label>
                <Input id="block-email" type="email" placeholder="you@company.com" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <Label htmlFor="block-password">Password</Label>
                  <a href="#reset" className="text-xs font-black underline decoration-2 underline-offset-4">Forgot?</a>
                </div>
                <Input id="block-password" type="password" defaultValue="brutal-password" />
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="block-remember" defaultChecked />
                <Label htmlFor="block-remember" className="normal-case tracking-normal">Keep me signed in</Label>
              </div>
              <Button size="lg" className="w-full">
                Enter workspace <ArrowRight data-icon="inline-end" />
              </Button>
            </form>

            <div className="my-7 flex items-center gap-4">
              <Separator className="flex-1" />
              <span className="font-mono text-xs font-black uppercase">or</span>
              <Separator className="flex-1" />
            </div>
            <Button variant="outline" className="w-full">Continue with SSO</Button>
          </div>
        </main>
      </div>
    </div>
  )
}
