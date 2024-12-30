import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';

type AIProvider = 'openai' | 'anthropic';

const createOpenAIPrompt = (topic: string, platform: string, audience: string, contentType: string, trigger: string) => {
  return `Create 5 engaging hooks for content about ${topic}. 
  Platform: ${platform}
  Target Audience: ${audience}
  Content Type: ${contentType}
  Psychological Trigger: ${trigger}
  
  For each hook, provide:
  - The hook text
  - Psychology behind it
  - Expected triggers
  - Expected audience response
  - Platform fit score (1-10)`;
};

export const generateAIHooks = async (
  provider: AIProvider,
  data: {
    topic: string;
    platform: string;
    audience: string;
    contentType: string;
    trigger: string;
  }
) => {
  if (provider === 'openai') {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: createOpenAIPrompt(data.topic, data.platform, data.audience, data.contentType, data.trigger),
        },
      ],
    });

    // Parse the response and format it to match our Hook interface
    const content = response.choices[0]?.message?.content || '';
    // You'll need to parse the content and format it to match your Hook interface
    return parseAIResponse(content);
  } else if (provider === 'anthropic') {
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const response = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 1000,
      messages: [
        {
          role: 'user',
          content: createOpenAIPrompt(data.topic, data.platform, data.audience, data.contentType, data.trigger),
        },
      ],
    });

    // Parse the response and format it to match our Hook interface
    const content = response.content[0]?.text || '';
    return parseAIResponse(content);
  }

  throw new Error('Invalid AI provider selected');
};

const parseAIResponse = (content: string) => {
  // This is a simple implementation. You might want to make it more robust
  // based on the actual response format from the AI providers
  const hooks = content.split('\n\n').filter(Boolean).map((hookText) => ({
    text: hookText.split('\n')[0] || '',
    psychology: 'AI Generated',
    triggers: ['AI Generated'],
    response: 'AI Generated Response',
    platformFit: ['All Platforms'],
    score: 8,
  }));

  return hooks;
};