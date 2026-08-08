import { CalendarDays, Filter, Flag, Plus } from "lucide-react"

import { Avatar, AvatarFallback } from "@/registry/brutalist/ui/avatar"
import { Badge } from "@/registry/brutalist/ui/badge"
import { Button } from "@/registry/brutalist/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/brutalist/ui/card"
import { Checkbox } from "@/registry/brutalist/ui/checkbox"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/registry/brutalist/ui/progress"

type BoardTask = {
  id: string
  title: string
  tag: string
  owner: string
  progress?: number
  done?: boolean
}

const columns: Array<{
  title: string
  tone: string
  tasks: BoardTask[]
}> = [
  {
    title: "Backlog",
    tone: "bg-muted",
    tasks: [
      { id: "BR-18", title: "Rewrite onboarding empty state", tag: "UX", owner: "MO" },
      { id: "BR-21", title: "Audit keyboard shortcuts", tag: "A11Y", owner: "AN" },
    ],
  },
  {
    title: "In progress",
    tone: "bg-secondary",
    tasks: [
      { id: "BR-14", title: "Build public launch page", tag: "WEB", owner: "SK", progress: 68 },
      { id: "BR-16", title: "Stress-test export queue", tag: "OPS", owner: "JT", progress: 42 },
    ],
  },
  {
    title: "Done",
    tone: "bg-primary text-primary-foreground",
    tasks: [
      { id: "BR-09", title: "Approve identity system", tag: "BRAND", owner: "MO", done: true },
      { id: "BR-11", title: "Invite pilot customers", tag: "GROWTH", owner: "AN", done: true },
    ],
  },
]

export function ProjectBoardBlock() {
  return (
    <div className="min-w-[20rem] bg-background p-4 sm:p-7 lg:p-10">
      <div className="mx-auto max-w-6xl">
        <header className="brut-panel mb-7 flex flex-col gap-5 bg-card p-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="brut-surface grid size-11 place-items-center bg-accent text-xl font-black text-accent-foreground">A</div>
            <div>
              <p className="font-mono text-xs font-black text-muted-foreground uppercase">Project / Afterburner</p>
              <h2 className="text-2xl font-black tracking-tight uppercase">Launch board</h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 sm:ml-auto">
            <Button variant="outline"><Filter /> Filter</Button>
            <Button><Plus /> Add task</Button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {columns.map((column) => (
            <section
              key={column.title}
              className="rounded-[var(--radius)] border-[var(--brut-border)] border-border bg-card p-4"
            >
              <div className={`mb-4 flex items-center justify-between gap-3 rounded-[calc(var(--radius)*0.7)] border-[var(--brut-border)] border-border px-3 py-2 ${column.tone}`}>
                <h3 className="font-black tracking-wide uppercase">{column.title}</h3>
                <Badge variant="outline" className="bg-card text-card-foreground shadow-none">{column.tasks.length}</Badge>
              </div>

              <div className="space-y-4">
                {column.tasks.map((task) => (
                  <Card key={task.id} size="sm" className="bg-card">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <Checkbox defaultChecked={task.done} aria-label={`Mark ${task.title} complete`} />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-mono text-xs font-black text-muted-foreground">{task.id}</span>
                            <Badge variant={task.done ? "secondary" : "outline"}>{task.tag}</Badge>
                          </div>
                          <CardTitle className={`mt-3 text-base ${task.done ? "line-through opacity-65" : ""}`}>
                            {task.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    {task.progress !== undefined && (
                      <CardContent>
                        <Progress value={task.progress}>
                          <ProgressLabel className="text-xs font-black uppercase">Progress</ProgressLabel>
                          <ProgressValue className="text-xs" />
                        </Progress>
                      </CardContent>
                    )}
                    <CardFooter className="justify-between py-3">
                      <div className="flex items-center gap-2 text-xs font-black uppercase">
                        <CalendarDays className="size-4" /> Aug {task.done ? "06" : "12"}
                      </div>
                      <Avatar size="sm">
                        <AvatarFallback className="bg-primary font-black text-primary-foreground">{task.owner}</AvatarFallback>
                      </Avatar>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <Button variant="ghost" className="mt-4 w-full border-dashed">
                <Plus /> Add another
              </Button>
            </section>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t-[var(--brut-border)] border-border pt-5">
          <div className="flex items-center gap-2 font-bold"><Flag className="size-4" /> Sprint ends in 4 days</div>
          <Badge variant="secondary">6 of 12 tasks complete</Badge>
        </div>
      </div>
    </div>
  )
}
