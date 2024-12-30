import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const platforms = [
  "Instagram",
  "TikTok",
  "LinkedIn",
  "YouTube",
  "Twitter",
] as const;

const contentTypes = [
  "Video",
  "Article",
  "Social Post",
  "Story",
  "Reel",
] as const;

const psychologicalTriggers = [
  "FOMO",
  "Curiosity",
  "Social Proof",
  "Urgency",
  "Scarcity",
] as const;

export const HookForm = ({
  onSubmit,
}: {
  onSubmit: (data: {
    topic: string;
    platform: string;
    audience: string;
    contentType: string;
    trigger: string;
    aiProvider: string;
  }) => void;
}) => {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState<string>("");
  const [audience, setAudience] = useState("");
  const [contentType, setContentType] = useState<string>("");
  const [trigger, setTrigger] = useState<string>("");
  const [aiProvider, setAIProvider] = useState<string>("template");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ topic, platform, audience, contentType, trigger, aiProvider });
  };

  return (
    <Card className="w-full max-w-xl p-6 space-y-6 animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <Label>Generation Method</Label>
          <RadioGroup
            defaultValue="template"
            value={aiProvider}
            onValueChange={setAIProvider}
            className="grid grid-cols-3 gap-4"
          >
            <div>
              <RadioGroupItem value="template" id="template" className="peer sr-only" />
              <Label
                htmlFor="template"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span>Template</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="openai" id="openai" className="peer sr-only" />
              <Label
                htmlFor="openai"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span>OpenAI</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="anthropic" id="anthropic" className="peer sr-only" />
              <Label
                htmlFor="anthropic"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span>Anthropic</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="topic">What's your topic or message?</Label>
          <Input
            id="topic"
            placeholder="e.g., Time management tips for entrepreneurs"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="platform">Target Platform</Label>
          <Select value={platform} onValueChange={setPlatform} required>
            <SelectTrigger id="platform">
              <SelectValue placeholder="Select a platform" />
            </SelectTrigger>
            <SelectContent>
              {platforms.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="audience">Target Audience</Label>
          <Input
            id="audience"
            placeholder="e.g., Young professionals aged 25-35"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contentType">Content Type</Label>
          <Select value={contentType} onValueChange={setContentType} required>
            <SelectTrigger id="contentType">
              <SelectValue placeholder="Select content type" />
            </SelectTrigger>
            <SelectContent>
              {contentTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="trigger">Psychological Trigger (Optional)</Label>
          <Select value={trigger} onValueChange={setTrigger}>
            <SelectTrigger id="trigger">
              <SelectValue placeholder="Select a trigger" />
            </SelectTrigger>
            <SelectContent>
              {psychologicalTriggers.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          Generate Hooks
        </Button>
      </form>
    </Card>
  );
};
