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
    template: "3 {topic} mistakes that are costing {audience} money",
    psychology: "Negativity Bias",
    triggers: ["Loss Aversion", "Curiosity"],
    response: "What mistakes am I making?",
    score: 8,
  },
  {
    template: "The {topic} secret {audience} needs to know",
    psychology: "Curiosity Gap",
    triggers: ["FOMO", "Exclusivity"],
    response: "I need to know this secret!",
    score: 9,
  },
  {
    template: "Why {audience} is getting {topic} all wrong",
    psychology: "Pattern Interrupt",
    triggers: ["Controversy", "Authority"],
    response: "How am I doing it wrong?",
    score: 7,
  },
  {
    template: "This {topic} hack transformed how {audience} works",
    psychology: "Social Proof",
    triggers: ["Success Story", "Transformation"],
    response: "I want that transformation",
    score: 8,
  },
  {
    template: "The {topic} method that's helping {audience} succeed",
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
      .replace("{topic}", input.topic.toLowerCase())
      .replace("{audience}", input.audience.toLowerCase());

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