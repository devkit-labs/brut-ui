import { Activity, ArrowDownRight, ArrowUpRight, Download, RadioTower } from "lucide-react"

import { Badge } from "@/registry/brutalist/ui/badge"
import { Button } from "@/registry/brutalist/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/brutalist/ui/card"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/registry/brutalist/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/brutalist/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/brutalist/ui/table"

const stats = [
  { label: "Net revenue", value: "$84.2K", change: "+12.4%", up: true },
  { label: "New accounts", value: "1,482", change: "+8.7%", up: true },
  { label: "Churn", value: "2.8%", change: "-0.6%", up: false },
]

const orders = [
  ["#BR-2048", "Lena Ortiz", "Studio", "$1,240", "Paid"],
  ["#BR-2047", "Northstar Co.", "Scale", "$3,800", "Paid"],
  ["#BR-2046", "Dune Labs", "Team", "$640", "Review"],
  ["#BR-2045", "Morrow Works", "Studio", "$1,240", "Paid"],
]

export function OperationsDashboardBlock() {
  return (
    <div className="min-w-[20rem] bg-background p-4 sm:p-7 lg:p-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Badge variant="secondary"><RadioTower data-icon="inline-start" /> Live operations</Badge>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] uppercase sm:text-5xl">Control room.</h2>
            <p className="mt-2 font-semibold text-muted-foreground">Friday, 08 August · all systems responding</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Select defaultValue="30-days">
              <SelectTrigger aria-label="Select reporting period">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7-days">Last 7 days</SelectItem>
                <SelectItem value="30-days">Last 30 days</SelectItem>
                <SelectItem value="quarter">This quarter</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline"><Download /> Export</Button>
          </div>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={stat.label} className={index === 1 ? "bg-secondary" : "bg-card"}>
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-black tracking-widest uppercase">{stat.label}</span>
                  {stat.up ? <ArrowUpRight className="size-5" /> : <ArrowDownRight className="size-5" />}
                </div>
                <CardTitle className="mt-3 text-4xl">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant={stat.up ? "default" : "outline"}>{stat.change} this month</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-7 grid gap-7 lg:grid-cols-[1.45fr_0.55fr]">
          <div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-xl font-black uppercase">Recent orders</h3>
              <Button size="sm" variant="ghost">View all</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map(([order, customer, plan, value, status]) => (
                  <TableRow key={order}>
                    <TableCell className="font-mono font-black">{order}</TableCell>
                    <TableCell>{customer}</TableCell>
                    <TableCell>{plan}</TableCell>
                    <TableCell>{value}</TableCell>
                    <TableCell><Badge variant={status === "Paid" ? "secondary" : "outline"}>{status}</Badge></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <Card className="self-start bg-card">
            <CardHeader>
              <Badge variant="outline" className="mb-3"><Activity data-icon="inline-start" /> Capacity</Badge>
              <CardTitle className="text-2xl uppercase">Today&apos;s load</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                ["API", 84],
                ["Workers", 62],
                ["Storage", 38],
              ].map(([label, value]) => (
                <Progress key={String(label)} value={Number(value)}>
                  <ProgressLabel className="font-black uppercase">{label}</ProgressLabel>
                  <ProgressValue />
                </Progress>
              ))}
              <div className="brut-surface bg-muted p-4">
                <p className="font-black uppercase">No incidents</p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">Last checked 42 seconds ago.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
