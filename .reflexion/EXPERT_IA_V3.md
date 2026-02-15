# The AI Expert Role: Beyond the Hype, Toward Maturity

Since the LLM boom, driven by models like ChatGPT, a massive wave of AI projects has emerged. Ambitious promises, impressive demos, prototypes delivered in weeks.

Yet a significant share of these projects has not fully satisfied their clients.

Result: today, many companies are hesitant to launch AI projects on specific business domains. Generic solutions are appealing. Custom solutions, on the other hand, feel risky.

Why this lack of confidence?

---

## 1. Between Disillusion and Polarisation

Several factors explain this caution:

### Past disappointments

Projects kicked off too fast. Overstated promises. Solutions that couldn’t absorb the real complexity of business needs.

### A polarised debate

On one side, the “AI hype” crowd: AI is superhuman, AGI is around the corner.
On the other, the sceptics: LLMs are just “stochastic parrots”.

Little nuance. Little consensus. And a lot of confusion for decision-makers.

### The temptation to wait

Why invest now if AGI is coming soon and will solve everything?
Why take risks when the market shifts every few months?

Yet the narrative has shifted. Even leading figures in the field — Sam Altman, Yann LeCun, Richard Sutton, François Chollet — are converging on one idea:
progress will be gradual, not magical.

The Transformer architecture dates back to 2018. Recent major advances rest largely on:

* massive scaling of data and compute (Sutton’s “bitter lesson”),
* post-training reinforcement learning,
* engineering refinements.

As Andrej Karpathy points out, much of modern reinforcement learning is about shaping behaviour rather than creating a new form of intelligence.

We are not facing a mystical breakthrough. We are facing a gradual technological acceleration.

### The AI influencer trap

Alongside this, we have AI influencers: people who try the latest tools and share their experience, more or less in depth. Because they don’t understand the ins and outs of the underlying models, they are condemned to chase novelty — so as not to miss the next “game changer” and to stay relevant. “Adapt or die”, “AI only gets better”, “you don’t need to know how it works, just test if it works” are their mantras. If they had a solid grasp of what’s under the hood, they wouldn’t need to test every new release: they could tell real technological leaps from minor tweaks and engineering hacks. That contrast is exactly what the expert role is about: building stable understanding instead of running after the latest demo.

---

## 2. A Market in Exploration Phase

As in many emerging markets, AI is going through an intense exploration phase — experimentation, enthusiasm, and sometimes excess.

It’s a normal step before maturity.

But to reach that maturity, we need a role that can:

* guarantee the quality of AI solutions,
* make their ROI credible,
* reassure business stakeholders,
* avoid unrealistic promises.

That’s where the **AI expert role** comes in.

A role that is still ill-defined — but essential.

---

# Understanding the Real Problem: A Structural Gap

Today there is a gap between two worlds.

## 1. The very low level: ML engineering

Machine learning engineers master:

* algorithms,
* optimisation,
* architectures,
* data structures.

They understand models in depth.
But their goals are often generic: benchmark performance, optimising a single component.

At that level of abstraction, they cannot absorb full business complexity.

---

## 2. The very high level: product and business

Product owners and domain experts:

* understand specific needs,
* assess solution quality in their real context,
* test, experiment, judge intuitively.

But they don’t have the time or the expertise to connect internal technical details to observed outcomes.

---

## The gap in between

Who actually understands:

* the real strengths and limits of AI components,
* their probabilistic behaviour,
* where they are likely to fail,
* and how they fit complex business needs?

Often, that role was given to digital solution engineers.
They know how to wire building blocks together.

But wiring is not understanding.

The assumption was that LLMs were “smart enough” to do almost anything with prompt engineering.

That assumption has been costly.

---

# Why Current Solutions Aren’t Enough

Yes, real advances have appeared:

* RAG
* Few-shot
* Chain-of-Thought
* ReAct
* multi-agent setups
* light fine-tuning (LoRA, etc.)

But these strategies:

* take time to configure,
* vary a lot from case to case,
* are sensitive to the model in use,
* are hard to debug when they fail.

We often look for **the one universal strategy**.

It doesn’t exist.

---

# Why Benchmarks No Longer Suffice

In the past, objectives were atomic:

* image classification,
* object detection,
* POS-tagging.

A benchmark could measure performance.

Today, objectives are abstract:

* reasoning,
* planning,
* conversation,
* memory,
* generalisation.

Benchmarks become:

* partial,
* gameable,
* reverse-engineerable,
* sometimes disconnected from the real goal.

The more models improve, the more researchers question the very nature of intelligence.

And if they don’t fully understand what they are trying to reproduce, how can they fully pin down its limits?

---

# The AI Expert Role: Two Shores and a Bridge

The AI expert doesn’t replace the ML engineer or the product owner.

They create the link — and that link is best thought of not as a step on a ladder, but as a bridge between two shores, with currents flowing through.

---

## The low shore: intuition about AI components

On one side lies the technical shore. This is the domain of ML engineers: algorithms, architectures, data structures, optimisation. Understanding how models work — their key abstractions, their strengths, their structural limits. Not necessarily building the architecture, but grasping its inner mechanisms.

That shore is solid. Well-mapped. But it doesn’t, on its own, tell you how a component will behave in the messy reality of a specific business need.

---

## The high shore: a conceptual model of intelligence

On the other side lies the cognitive and business shore. What are we actually trying to reproduce or support? Memory, reasoning, planning, intuition, generalisation. The language here is not “layers” or “attention” but “capacity”, “failure mode”, “fit for purpose”.

This shore is not specific to AI. It is informed by disciplines that study mind and behaviour: psychology, neuroscience, biology, philosophy, robotics, cybernetics. **These are not additional “levels” of AI understanding.** They are separate fields. But they feed into how we conceptualise intelligence — and therefore how we build a predictive model of what we want from an AI system. The expert doesn’t need to become a researcher in those fields; they draw on them to shape the high shore.

---

## The bridge: the mapping

The core of the AI expert role is the **bridge** between the two shores.

Connecting:

* the technical abstractions of models (low shore)  
  to  
* the cognitive and business abstractions (high shore).

This is what allows answering the real question:

> Can this AI component, in this specific context, meet this specific business need — and why?

That space is still largely uncharted. Today we have a “frog view” (stuck on the low shore) or a “bird view” (hovering over the high shore). What’s missing is the “fly view”: the ability to move between both shores and to build the bridge.

The disciplines that inform the high shore — psychology, neuroscience, and the rest — act like **currents**: they don’t sit on the bridge as a third level, but they influence how we understand the high shore and how we design the mapping. The link is non-linear; the expert works with that fuzziness rather than forcing it into a rigid stack.

---

# Conclusion: Toward Composable Architectures

The real question may not be:

> Will one single AI solve all complex business cases?

But rather:

> Are we moving toward composable architectures, tailored to each business context?

The AI expert is the one who:

* rejects naive solutionism,
* rejects blanket scepticism,
* understands limits without underestimating capabilities,
* builds robust, explainable, and cost-effective solutions.

The AI market does not lack models.
It lacks maturity.

And that maturity will come with the emergence of a new role:
**the AI expert.**
