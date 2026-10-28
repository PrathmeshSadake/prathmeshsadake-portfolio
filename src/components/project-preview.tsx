import type { ProjectPreview } from "@/lib/projects";
import { cn } from "@/lib/utils";

// Small illustrated windows for the project cards. Pure markup, no images.

function WindowChrome({ dark, label }: { dark: boolean; label: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-[5px] border-b px-3 py-[9px]",
        dark ? "border-night-line" : "border-line-chip"
      )}
    >
      {(dark
        ? ["var(--coral)", "var(--amber)", "var(--green)"]
        : ["var(--line-strong)", "var(--line-strong)"]
      ).map((color, i) => (
        <span key={i} className='h-[7px] w-[7px] rounded-full' style={{ background: color }} />
      ))}
      <span className={cn("mono ml-auto text-[9px]", dark ? "text-dim" : "text-muted")}>
        {label}
      </span>
    </div>
  );
}

function Node({ children, tone = "plain" }: { children: string; tone?: "plain" | "blue" | "dark" | "outline" }) {
  return (
    <span
      className={cn(
        "px-2.5 py-[5px] text-[11px]",
        tone === "blue" && "bg-blue font-semibold text-white",
        tone === "dark" && "bg-night-line text-raised",
        tone === "plain" && "border border-line-strong bg-white text-ink",
        tone === "outline" && "border border-muted text-night-body"
      )}
    >
      {children}
    </span>
  );
}

const Arrow = ({ dark }: { dark?: boolean }) => (
  <span className={cn("leading-none", dark ? "text-muted" : "text-faint")}>↓</span>
);

const LABELS: Record<ProjectPreview, string> = {
  trace: "Agent trace",
  pipeline: "Pipeline",
  graph: "Agent graph",
  services: "Services",
  score: "Speaking report",
  log: "Delivery log",
  ranking: "Candidate matches",
  interview: "Mock interview",
  booking: "Booking request",
  quote: "Quote request",
};

export default function ProjectPreviewWindow({ kind }: { kind: ProjectPreview }) {
  const dark = kind === "trace" || kind === "graph" || kind === "log";
  // light kinds: pipeline, services, score, ranking, interview, booking, quote

  return (
    <div
      aria-hidden='true'
      className={cn(
        "flex h-[200px] flex-col shadow-[0_6px_0_color-mix(in_srgb,var(--ink)_18%,transparent)]",
        dark ? "bg-ink" : "bg-raised"
      )}
    >
      <WindowChrome dark={dark} label={LABELS[kind]} />

      {kind === "trace" && (
        <div className='flex flex-col gap-2 p-3.5 font-mono text-[11px] leading-[1.4]'>
          {[
            ["gateway.route", "claude", true],
            ["guardrail.input", "clean", true],
            ["tool.crm.lookup", "ok", true],
            ["guardrail.output", "pii redacted", false],
          ].map(([call, note, ok]) => (
            <span key={String(call)} className='flex justify-between gap-3 text-night-text'>
              <span>→ {call}</span>
              <span className={ok ? "text-green-light" : "text-amber-light"}>{note}</span>
            </span>
          ))}
          <span className='border-t border-night-line pt-1.5 text-raised'>
            Every step checked and traced.
          </span>
        </div>
      )}

      {kind === "pipeline" && (
        <div className='flex flex-1 flex-col items-center justify-center gap-1.5 p-3 text-[11px]'>
          <Node>Incoming document</Node>
          <Arrow />
          <Node tone='blue'>Queue · extract</Node>
          <Arrow />
          <div className='flex gap-[5px]'>
            <span className='bg-green-soft px-2 py-[5px] text-green-ink'>Valid → stored</span>
            <span className='bg-coral-soft px-2 py-[5px] text-coral-text'>Flagged → review</span>
          </div>
        </div>
      )}

      {kind === "graph" && (
        <div className='flex flex-1 flex-col items-center justify-center gap-1.5 p-3 text-[11px]'>
          <Node tone='outline'>Pull request</Node>
          <Arrow dark />
          <Node tone='blue'>Orchestrator</Node>
          <Arrow dark />
          <div className='flex gap-[5px]'>
            {["Security", "Style", "Tests"].map((agent) => (
              <Node key={agent} tone='dark'>
                {agent}
              </Node>
            ))}
          </div>
        </div>
      )}

      {kind === "services" && (
        <div className='flex flex-1 flex-col items-center justify-center gap-1.5 p-3 text-[11px]'>
          <Node tone='blue'>API gateway</Node>
          <Arrow />
          <div className='flex gap-[5px]'>
            {["users", "posts", "connections"].map((svc) => (
              <Node key={svc}>{svc}</Node>
            ))}
          </div>
          <span className='mt-1 flex w-full items-center gap-2 text-[10px] text-muted'>
            <span className='h-px flex-1 bg-line-strong' />
            kafka · notifications
            <span className='h-px flex-1 bg-line-strong' />
          </span>
        </div>
      )}

      {kind === "score" && (
        <div className='flex flex-col gap-[11px] p-3.5 text-[11px]'>
          {[
            { label: "Fluency", good: true, width: "86%" },
            { label: "Pronunciation", good: false, width: "58%" },
            { label: "Grammar", good: true, width: "90%" },
            { label: "Vocabulary", good: true, width: "80%" },
          ].map((row) => (
            <div key={row.label} className='flex flex-col gap-1'>
              <div className='flex justify-between'>
                <span>{row.label}</span>
                <span className={cn("font-semibold", row.good ? "text-green-deep" : "text-coral-text")}>
                  {row.good ? "Good" : "Practice"}
                </span>
              </div>
              <div className='h-1.5 bg-line-chip'>
                <div
                  className={cn("h-1.5", row.good ? "bg-green" : "bg-coral")}
                  style={{ width: row.width }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {kind === "ranking" && (
        <div className='flex flex-col gap-2 p-3.5 text-[11px]'>
          <span className='mono text-[9px] text-muted'>Senior backend engineer · 3 matches</span>
          {[
            { name: "A. Mehta", fit: "94%", width: "94%", top: true },
            { name: "R. Iyer", fit: "88%", width: "88%", top: false },
            { name: "S. Khan", fit: "81%", width: "81%", top: false },
          ].map((row) => (
            <div key={row.name} className='flex flex-col gap-1'>
              <div className='flex justify-between'>
                <span className='font-semibold'>{row.name}</span>
                <span className={row.top ? "font-semibold text-green-deep" : "text-muted"}>
                  {row.fit} fit
                </span>
              </div>
              <div className='h-1.5 bg-line-chip'>
                <div className={cn("h-1.5", row.top ? "bg-green" : "bg-blue")} style={{ width: row.width }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {kind === "interview" && (
        <div className='flex flex-col gap-2 p-3.5 text-[11px]'>
          <span className='self-start border border-line-strong bg-white px-2.5 py-[5px]'>
            Why medicine, and why now?
          </span>
          <span className='self-end bg-blue px-2.5 py-[5px] text-white'>Answer · 1:42 ●</span>
          <div className='mt-1 flex flex-col gap-1 border-t border-line-chip pt-2'>
            {[
              ["Structure", "Strong"],
              ["Empathy", "Strong"],
              ["Pace", "Slow down"],
            ].map(([k, v]) => (
              <div key={k} className='flex justify-between'>
                <span className='text-muted'>{k}</span>
                <span className={cn("font-semibold", v === "Slow down" ? "text-coral-text" : "text-green-deep")}>
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {kind === "booking" && (
        <div className='flex flex-col gap-2 p-3.5 text-[11px]'>
          {[
            ["Occasion", "Dinner for eight"],
            ["Menu", "Seasonal tasting"],
            ["Date", "Sat · 7:30 PM"],
          ].map(([k, v]) => (
            <div key={k} className='flex items-center justify-between border-b border-line-chip pb-1.5'>
              <span className='text-muted'>{k}</span>
              <span className='font-semibold'>{v}</span>
            </div>
          ))}
          <span className='mt-1 bg-ink py-[7px] text-center font-semibold text-raised'>
            Request booking
          </span>
        </div>
      )}

      {kind === "quote" && (
        <div className='flex flex-col gap-[9px] p-3.5 text-[12px]'>
          <span className='text-[14px] font-semibold'>Annual inspection · Warehouse</span>
          {[
            ["Sprinklers", "Due"],
            ["Extinguishers", "Checked"],
            ["Alarm panel", "Due"],
          ].map(([k, v]) => (
            <div key={k} className='flex justify-between'>
              <span className='text-muted'>{k}</span>
              <span className={cn("font-semibold", v === "Due" ? "text-coral-text" : "text-green-deep")}>{v}</span>
            </div>
          ))}
          <div className='mt-1 flex gap-1.5'>
            <span className='flex-1 bg-ink py-[7px] text-center font-semibold text-raised'>Get a quote</span>
            <span className='flex-1 border border-line-strong py-[7px] text-center'>Call</span>
          </div>
        </div>
      )}

      {kind === "log" && (
        <div className='flex flex-col gap-2 p-3.5 font-mono text-[11px] leading-[1.4]'>
          {[
            ["queue.enqueue", "✓", true],
            ["ses.send", "✓", true],
            ["ses.send", "retry", false],
            ["sns.bounce", "suppressed", false],
          ].map(([call, note, ok], i) => (
            <span key={i} className='flex justify-between gap-3 text-night-text'>
              <span>→ {call}</span>
              <span className={ok ? "text-green-light" : "text-amber-light"}>{note}</span>
            </span>
          ))}
          <span className='border-t border-night-line pt-1.5 text-raised'>
            Delivered, tracked, retried on failure.
          </span>
        </div>
      )}
    </div>
  );
}
