import Callout from "@/components/callout";

const EmailPlatformCaseStudy: React.FC = () => {
  return (
    <div className='wrap section-y'>
      <div className='prose-ps max-w-[820px]'>
      <header className='mb-8'>
        <p className='mono mb-4 text-blue'>Case study</p>
        <h1 className='serif text-[clamp(40px,5vw,64px)] leading-[1] mb-5'>
          How I helped my org cut email costs by 87%
        </h1>
        <p className='text-[16px] leading-[1.7] text-body mb-4'>
          Migrating from Resend to a custom-built email platform on AWS SES,
          Next.js, SQS, and PostgreSQL, designed and shipped with AI assistance.
        </p>
        <div className='mono flex flex-wrap items-center gap-2 text-[11px] text-muted'>
          <span>Prathmesh</span>
          <span className='text-line-strong'>•</span>
          <span>May 2026</span>
          <span className='text-line-strong'>•</span>
          <span>8 min read</span>
          <span className='text-line-strong'>•</span>
          <span>Engineering, Cost Optimization</span>
        </div>
      </header>

      <section className='mb-12'>
        <div className='cell-grid sm:grid-cols-3'>
          <div className='bg-raised p-5'>
            <p className='mono text-[11px] text-faint'>
              Cost reduction
            </p>
            <p className='mt-3 serif text-[40px] leading-none text-ink'>87%</p>
          </div>
          <div className='bg-raised p-5'>
            <p className='mono text-[11px] text-faint'>
              Per 1,000 emails
            </p>
            <p className='mt-3 serif text-[40px] leading-none text-ink'>$0.10</p>
          </div>
          <div className='bg-raised p-5'>
            <p className='mono text-[11px] text-faint'>
              Build and ship
            </p>
            <p className='mt-3 serif text-[40px] leading-none text-ink'>4 wks</p>
          </div>
        </div>
      </section>

      <section className='mb-8 text-[16px] leading-[1.7] text-body'>
        <h2 className='serif text-[30px] leading-[1.1] text-ink mb-4'>The problem</h2>
        <p className='mb-4'>
          Our organization was sending a mix of transactional and marketing
          emails through Resend. Password resets, welcome sequences, course
          enrollment confirmations, digest emails. The product was growing, and
          with it, the email bill.
        </p>
        <p className='mb-4'>
          Resend is a genuinely good product. Clean API, React Email integration,
          excellent developer experience. But as our monthly volume crossed the
          100k mark, we were sitting on the Scale plan at $90 per month, heading
          toward the $160 and $250 tiers. For the volume we were sending, the
          per-email math stopped making sense.
        </p>
        <p className='mb-4'>
          At 100,000 emails per month, Resend costs $90. AWS SES costs $10. That
          $80 gap compounds to nearly $1,000 per year at a single volume tier,
          and we were growing fast.
        </p>
        <p>
          The conversation in our team shifted from “which plan do we upgrade
          to” to “why are we paying a platform tax for something we could own.”
          That question became my project.
        </p>
      </section>

      <section className='mb-8 text-[16px] leading-[1.7] text-body'>
        <h2 className='serif text-[30px] leading-[1.1] text-ink mb-4'>The old setup</h2>
        <p className='mb-4'>
          Before the migration, the email stack was simple: every part of the
          application called Resend&apos;s SDK directly, passing HTML or React
          Email templates. No queue, no retry logic, no centralized tracking. It
          worked fine at small scale. At higher volume, we started seeing the
          limitations.
        </p>
        <ul>
          <li>No control over send rate or queue depth during traffic spikes</li>
          <li>Bounce and complaint webhooks were handled inconsistently</li>
          <li>Zero visibility into delivery status across every send</li>
          <li>Template management scattered across codebases</li>
          <li>Monthly cost scaling linearly with Resend&apos;s tier structure</li>
        </ul>
      </section>

      <section className='mb-8 text-[16px] leading-[1.7] text-body'>
        <h2 className='serif text-[30px] leading-[1.1] text-ink mb-4'>
          The new architecture
        </h2>
        <p className='mb-4'>
          I designed and built a centralized internal email platform with four
          components: SES for delivery, SQS for queueing, Next.js for the API and
          admin interface, and PostgreSQL (via Prisma) for state, tracking, and
          suppression management.
        </p>
        <ul>
          <li>
            <span className='font-semibold text-ink'>AWS SES</span>: Delivery
            engine. $0.10 per 1,000 emails. Handles DKIM, SPF, dedicated sending
            identity.
          </li>
          <li>
            <span className='font-semibold text-ink'>AWS SQS</span>: Message
            queue with FIFO support. Decouples producers from the delivery
            worker, enables retry and rate control.
          </li>
          <li>
            <span className='font-semibold text-ink'>Next.js API</span>:
            Internal API for enqueue, template rendering, webhook ingestion, and
            an admin dashboard.
          </li>
          <li>
            <span className='font-semibold text-ink'>PostgreSQL</span>: Tracks
            send events, delivery status, bounces, complaints, and suppression
            lists via Prisma ORM.
          </li>
        </ul>
      </section>

      <section className='mb-8 text-[16px] leading-[1.7] text-body'>
        <h2 className='serif text-[30px] leading-[1.1] text-ink mb-4'>How it flows</h2>
        <p className='mb-4'>
          Any service in our product (course platform, auth, notifications)
          calls a single internal API endpoint to send an email. That request is
          validated, the email is rendered server-side using our template
          engine, and a job is pushed to SQS. A worker process polls SQS, calls
          SES, and writes the result to PostgreSQL.
        </p>
        <p className='mb-4'>
          SES bounce and complaint notifications flow back through SNS into a
          webhook endpoint, which updates our suppression list and delivery
          records in the database.
        </p>
        <p className='mono text-[11px] text-faint mb-2'>
          Simplified send API (Next.js route)
        </p>
        <pre>
          <code>{`POST /api/email/send
{
  "to": "user@example.com",
  "template": "course-enrolled",
  "data": { "courseName": "Intro to AI", "userName": "Prathmesh" },
  "type": "transactional" // or "marketing"
}`}</code>
        </pre>
        <p className='mono text-[11px] text-faint mb-2 mt-6'>
          Worker polls SQS, calls SES, records result
        </p>
        <pre>
          <code>{`const result = await ses.sendEmail({
  Source: process.env.FROM_EMAIL,
  Destination: { ToAddresses: [job.to] },
  Message: {
    Subject: { Data: rendered.subject },
    Body: { Html: { Data: rendered.html } }
  }
});

await db.emailLog.create({
  data: {
    messageId: result.MessageId,
    to: job.to,
    template: job.template,
    status: "sent",
    sentAt: new Date()
  }
});`}</code>
        </pre>
      </section>

      <section className='mb-8 text-[16px] leading-[1.7] text-body'>
        <h2 className='serif text-[30px] leading-[1.1] text-ink mb-4'>
          Suppression and bounce handling
        </h2>
        <p className='mb-4'>
          One thing Resend handles for you automatically is bounce and complaint
          suppression. On SES, you own this. We built a simple suppression table
          in PostgreSQL. Every bounce and complaint event from SNS hits our
          webhook, which writes the address to a suppressed_emails table. Every
          send request checks this table before enqueuing. Hard bounces are
          permanent, soft bounces after three failures are added too.
        </p>
      </section>

      <section className='mb-8 text-[16px] leading-[1.7] text-body'>
        <h2 className='serif text-[30px] leading-[1.1] text-ink mb-4'>
          Template management
        </h2>
        <p className='mb-4'>
          Templates are stored as TypeScript files, rendered using a lightweight
          custom renderer. No external template service, no drag-and-drop
          builder. Developers define the template schema with Zod, and the API
          validates the data payload before rendering. This keeps templates
          version-controlled alongside the codebase and eliminates an entire
          category of runtime errors.
        </p>
      </section>

      <section className='mb-8 text-[16px] leading-[1.7] text-body'>
        <h2 className='serif text-[30px] leading-[1.1] text-ink mb-4'>
          How AI accelerated the build
        </h2>
        <p className='mb-4'>
          I used AI throughout the design and implementation. Not just for code
          generation, but for system design reasoning, API schema design, edge
          case discovery, and writing the internal documentation.
        </p>
        <ul>
          <li>
            Generating the Prisma schema for email logs, suppression lists, and
            bounce events with proper indexing for delivery status queries
          </li>
          <li>
            Writing the SQS polling worker with exponential backoff, dead-letter
            queue handling, and graceful shutdown logic
          </li>
          <li>
            Designing the SNS webhook verification flow to ensure only genuine
            AWS notifications are accepted
          </li>
          <li>
            Drafting the internal API contract with Zod schemas, including union
            types for transactional versus marketing email payloads
          </li>
          <li>
            Producing the system design document used to get team alignment
            before writing any code
          </li>
        </ul>
        <p>
          The result was a four-week build that delivered a production-grade
          internal platform. Without AI assistance on the boilerplate,
          infrastructure scaffolding, and documentation, a realistic estimate
          would have been eight to ten weeks for the same scope.
        </p>
      </section>

      <section className='mb-8 text-[16px] leading-[1.7] text-body'>
        <h2 className='serif text-[30px] leading-[1.1] text-ink mb-4'>
          The cost comparison
        </h2>
        <div className='overflow-x-auto mb-4'>
          <table className='w-full border-collapse text-[15px] text-body'>
            <thead>
              <tr>
                <th className='py-2 pr-4'>Volume (emails/mo)</th>
                <th className='py-2 pr-4'>Resend (before)</th>
                <th className='py-2 pr-4'>SES platform (after)</th>
                <th className='py-2'>Monthly savings</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-t border-line'>
                <td className='py-2 pr-4'>50,000</td>
                <td className='py-2 pr-4'>$20.00</td>
                <td className='py-2 pr-4'>$5.00</td>
                <td className='py-2'>$15</td>
              </tr>
              <tr className='border-t border-line'>
                <td className='py-2 pr-4'>100,000</td>
                <td className='py-2 pr-4'>$90.00</td>
                <td className='py-2 pr-4'>$10.00</td>
                <td className='py-2'>$80</td>
              </tr>
              <tr className='border-t border-line'>
                <td className='py-2 pr-4'>250,000</td>
                <td className='py-2 pr-4'>$160.00</td>
                <td className='py-2 pr-4'>$25.00</td>
                <td className='py-2'>$135</td>
              </tr>
              <tr className='border-t border-line'>
                <td className='py-2 pr-4'>500,000</td>
                <td className='py-2 pr-4'>~$400.00</td>
                <td className='py-2 pr-4'>~$50.00</td>
                <td className='py-2'>~$350</td>
              </tr>
              <tr className='border-t border-line'>
                <td className='py-2 pr-4'>1,000,000</td>
                <td className='py-2 pr-4'>~$700.00</td>
                <td className='py-2 pr-4'>~$100.00</td>
                <td className='py-2'>~$600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='mb-4'>
          At our current volume of 150,000 emails per month: we moved from
          roughly $120/month on Resend to approximately $15 on SES, saving over
          $1,200 per year. As volume grows, that gap widens significantly.
        </p>
        <p>
          The SES numbers above include only the per-email charge. Even adding
          attachment data transfer (we have minimal attachments) and the SNS
          notification costs, the total stays well under $20 per month at our
          current volume.
        </p>
      </section>

      <section className='mb-8 text-[16px] leading-[1.7] text-body'>
        <h2 className='serif text-[30px] leading-[1.1] text-ink mb-4'>
          What the migration involved
        </h2>
        <div className='grid grid-cols-1 gap-4'>
          <div className='border-l-2 border-blue pl-4'>
            <p className='mono text-[11px] text-faint'>
              Week 1
            </p>
            <p className='text-[15px] font-semibold text-ink'>
              System design and AWS setup
            </p>
            <p className='text-[15px] leading-[1.6] text-muted'>
              Designed the architecture, set up SES domain verification, DKIM,
              and SPF records. Created SQS queues with dead-letter configuration.
              Drafted Prisma schema for email state tracking.
            </p>
          </div>
          <div className='border-l-2 border-blue pl-4'>
            <p className='mono text-[11px] text-faint'>
              Week 2
            </p>
            <p className='text-[15px] font-semibold text-ink'>
              Core API and worker build
            </p>
            <p className='text-[15px] leading-[1.6] text-muted'>
              Built the internal Next.js API routes for send, status, and webhook
              ingestion. Implemented the SQS polling worker with retry logic.
              Wired SNS notifications to the suppression table.
            </p>
          </div>
          <div className='border-l-2 border-blue pl-4'>
            <p className='mono text-[11px] text-faint'>
              Week 3
            </p>
            <p className='text-[15px] font-semibold text-ink'>
              Template migration and admin UI
            </p>
            <p className='text-[15px] leading-[1.6] text-muted'>
              Migrated all email templates from Resend/React Email format to our
              internal renderer. Built a lightweight admin dashboard to view
              send logs, delivery rates, bounces, and suppression list
              management.
            </p>
          </div>
          <div className='border-l-2 border-blue pl-4'>
            <p className='mono text-[11px] text-faint'>
              Week 4
            </p>
            <p className='text-[15px] font-semibold text-ink'>
              Staging tests and production cutover
            </p>
            <p className='text-[15px] leading-[1.6] text-muted'>
              Ran parallel sending in staging, validated delivery rates and
              bounce handling. Cutover production traffic with a feature flag.
              Monitored for 48 hours before decommissioning Resend subscription.
            </p>
          </div>
        </div>
      </section>

      <section className='mb-8 text-[16px] leading-[1.7] text-body'>
        <h2 className='serif text-[30px] leading-[1.1] text-ink mb-4'>
          Tradeoffs worth knowing
        </h2>
        <ul>
          <li>
            You own deliverability. Reputation management, bounce rate
            monitoring, and suppression hygiene are your responsibility.
          </li>
          <li>
            Setup complexity is higher. DNS configuration, IAM roles, SNS
            topics, SQS queues, and VPC routing if you need it.
          </li>
          <li>
            No built-in template builder. If your marketing team needs a
            drag-and-drop interface, you must build or integrate one.
          </li>
          <li>
            Support is AWS support. Resend has fast, developer-friendly support,
            AWS depends on your plan tier.
          </li>
        </ul>
        <p>
          For a team with engineering capacity and volumes above 50,000 emails
          per month, the economics become compelling enough to absorb these
          tradeoffs. Below that volume, the build cost may outweigh the savings.
        </p>
      </section>

      <section className='mb-8 text-[16px] leading-[1.7] text-body'>
        <h2 className='serif text-[30px] leading-[1.1] text-ink mb-4'>
          What I would do differently
        </h2>
        <p className='mb-4'>
          If I were starting this project again, I would spend more time upfront
          on the admin observability layer. The core send pipeline was solid
          from day one, but the dashboard for visualizing delivery rates and
          bounce trends by template was an afterthought.
        </p>
        <p>
          I would also set up dedicated sending IPs earlier. We started on
          shared pools, which is fine for transactional email, but for marketing
          sends at scale, a dedicated IP with a proper warmup schedule gives you
          better control over reputation.
        </p>
      </section>

      <section className='text-[16px] leading-[1.7] text-body'>
        <h2 className='serif text-[30px] leading-[1.1] text-ink mb-4'>Conclusion</h2>
        <p className='mb-4'>
          Moving from Resend to a custom AWS SES platform was one of the
          highest-leverage infrastructure projects I have shipped. The ongoing
          cost reduction is significant, but the larger gain is ownership. We
          now have full visibility into every email we send, complete control
          over the delivery pipeline, and a platform we can extend as our
          product scales.
        </p>
        <p>
          The combination of AI-assisted system design and development meant a
          solo engineering effort delivered something that would previously have
          required a team sprint. That is the workflow I will carry into every
          infrastructure project going forward.
        </p>
        <Callout className='mt-6'>
          <p className='font-semibold text-ink mb-2'>TLDR</p>
          <p>
            We replaced Resend with a custom platform using AWS SES, SQS,
            Next.js, and PostgreSQL. Monthly email costs dropped by over 87%.
            Build time was four weeks, accelerated significantly by AI-assisted
            design and coding. At scale, the savings compound into thousands of
            dollars per year.
          </p>
        </Callout>
      </section>

      <section className='mt-10 text-[16px] leading-[1.7] text-body'>
        <div className='border-l-2 border-blue pl-4'>
          <p className='font-semibold text-ink'>Prathmesh</p>
          <p>Full-stack engineer, edtech and AI</p>
          <p className='mt-2'>
            Built with Next.js, AWS SES, SQS, Prisma, and PostgreSQL. System
            designed and shipped with AI.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
};

export default EmailPlatformCaseStudy;
