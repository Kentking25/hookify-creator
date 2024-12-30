interface HookInput {
  topic: string;
  platform: string;
  audience: string;
  contentType: string;
  trigger: string;
}

interface Hook {
  text: string;
  psychology: string;
  triggers: string[];
  response: string;
  platformFit: string[];
  score: number;
}

const templates = [
  {
    template: "3 costly mistakes to avoid with {topic}",
    psychology: "Negativity Bias",
    triggers: ["Loss Aversion", "Curiosity"],
    response: "What mistakes am I making?",
    score: 8,
  },
  {
    template: "The hidden {topic} secret you need to know",
    psychology: "Curiosity Gap",
    triggers: ["FOMO", "Exclusivity"],
    response: "I need to know this secret!",
    score: 9,
  },
  {
    template: "The truth about {topic} nobody talks about",
    psychology: "Pattern Interrupt",
    triggers: ["Controversy", "Authority"],
    response: "How am I doing it wrong?",
    score: 7,
  },
  {
    template: "This {topic} hack changes everything",
    psychology: "Social Proof",
    triggers: ["Success Story", "Transformation"],
    response: "I want that transformation",
    score: 8,
  },
  {
    template: "The proven {topic} method for success",
    psychology: "Aspiration",
    triggers: ["Achievement", "Hope"],
    response: "I want to succeed too",
    score: 8,
  },
];

const platformFitMap = {
  Instagram: ["Instagram", "TikTok"],
  TikTok: ["TikTok", "Instagram", "YouTube"],
  LinkedIn: ["LinkedIn"],
  YouTube: ["YouTube", "TikTok"],
  Twitter: ["Twitter", "LinkedIn"],
};

export const generateHooks = (input: HookInput): Hook[] => {
  return templates.map((template) => {
    const text = template.template
      .replace("{topic}", input.topic.toLowerCase());

    return {
      text,
      psychology: template.psychology,
      triggers: template.triggers,
      response: template.response,
      platformFit: platformFitMap[input.platform as keyof typeof platformFitMap] || [input.platform],
      score: template.score,
    };
  });
};