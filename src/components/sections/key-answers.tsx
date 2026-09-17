import { Section, SectionHeading } from "@/components/ui/section";

/*
  Generative Engine Optimization (GEO) answer blocks.

  Every other section on this page is written to persuade a reader who already has the
  surrounding context. Nothing here was quotable on its own: the longest self-contained
  passage on the site was a ~45-word FAQ answer, which is too thin for an AI engine to
  lift into an answer and attribute.

  These three blocks are built to the opposite spec, from the seo-geo criteria:

    - 134-167 words each, the measured sweet spot for passage-level citation. Shorter and
      the passage carries no substance; longer and it gets truncated mid-claim.
    - Self-contained. Each one names "Learnometry" and the exams explicitly rather than
      saying "it" or "the platform", so an extracted paragraph still identifies its subject
      with no surrounding page.
    - Front-loaded. The first sentence answers the heading outright ("Learnometry is…",
      "A mock test reports what a student scored") instead of building to a conclusion.
    - Concrete. Specific figures, named syllabi and the real failure label
      ("Insufficient evidence") rather than adjectives.

  Placed above the fold-and-a-half on purpose: roughly 44% of AI citations are drawn from
  the first 30% of a page, so this sits immediately after the problem statement rather
  than beside the FAQ at the bottom.

  The headings are the literal questions people type. Keep them phrased as questions.
*/

const answers: { question: string; body: string[] }[] = [
  {
    question: "What is Learnometry?",
    body: [
      "Learnometry is a diagnostic assessment platform for Indian students preparing for CBSE Class 11 and 12 board exams, JEE Main, JEE Advanced and NEET. Instead of reporting a score, it identifies the specific concepts behind each wrong answer. A student takes one 30-minute diagnostic; the platform scores it server-side using fixed marking rules, negative marking included, then traces every error back through a prerequisite map to the underlying concept that failed.",
      "The output is a ranked study plan: concepts ordered by how much exam weight they carry, sized to the number of study hours the student actually reports having. Each weak concept is confirmed closed only by a parallel retest on fresh questions covering the same idea, never by marking a video as watched. Learnometry does not replace coaching classes or textbooks. It decides which chapter of the material a student already owns should be opened first.",
    ],
  },
  {
    question: "How does Learnometry decide what to study first?",
    body: [
      "Learnometry ranks study tasks by expected mark recovery, not by syllabus order. Three inputs feed that ranking. First, diagnostic evidence: every concept carries a confidence level based on how many questions actually tested it, and a concept with too few answers is labelled “Insufficient evidence” rather than guessed at. Second, exam weightage: chapters are mapped to the published CBSE, NTA and NMC syllabi, so a high-frequency topic outranks a rare one at equal weakness.",
      "Third, prerequisite depth: when a student loses marks on quadratic equations because of a sign-handling slip, the plan schedules the prerequisite rather than the visible chapter. The result is a daily sequence capped at the hours the student reports being free. Missing a day re-prioritises the queue instead of accumulating a backlog, so the lowest-yield task is dropped rather than carried into tomorrow.",
    ],
  },
  {
    question: "How is a Learnometry diagnostic different from a mock test?",
    body: [
      "A mock test reports what a student scored. A Learnometry diagnostic reports why. Both present exam-pattern questions under time pressure and both apply negative marking, but they differ in what happens after submission. A mock test series returns a percentile, a rank estimate and a solution key, leaving the student to infer which topics need work. A Learnometry diagnostic maps each incorrect answer onto a concept graph, names the prerequisite that failed, and shows the exact questions that produced the diagnosis so the student can argue with it.",
      "Improvement is treated differently too. Mock progress is inferred from the next score; Learnometry marks a concept “Gap Closed” only after a parallel retest on fresh questions covering that concept. The practical difference is where revision hours go: a mock tells a student to work harder, a diagnostic tells them what to open tomorrow morning.",
    ],
  },
];

export function KeyAnswers() {
  return (
    <Section id="key-answers" className="border-b-2 border-ink bg-background">
      <SectionHeading
        eyebrow="The short version"
        title="What Learnometry actually does, in plain terms."
        description="The three questions students and parents ask before anything else, answered in full here rather than split across the page."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {answers.map((answer) => (
          <article
            key={answer.question}
            className="flex flex-col rounded-card-lg border-2 border-ink bg-surface p-6 shadow-brutal sm:p-7"
          >
            <h3 className="font-display text-xl leading-snug text-ink text-balance">
              {answer.question}
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-[15px] leading-relaxed text-slate-600">
              {answer.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
