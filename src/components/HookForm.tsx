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
  }) => void;
}) => {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState<string>("");
  const [audience, setAudience] = useState("");
  const [contentType, setContentType] = useState<string>("");
  const [trigger, setTrigger] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ topic, platform, audience, contentType, trigger });
  };

  return (
    <Card className="w-full max-w-xl p-6 space-y-6 animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-6">
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