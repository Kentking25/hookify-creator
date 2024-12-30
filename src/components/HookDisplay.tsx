import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Hook {
  text: string;
  psychology: string;
  triggers: string[];
  response: string;
  platformFit: string[];
  score: number;
}

export const HookDisplay = ({ hooks }: { hooks: Hook[] }) => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The hook has been copied to your clipboard.",
    });
  };

  if (!hooks.length) return null;

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-6">Generated Hooks</h2>
      <div className="grid gap-6">
        {hooks.map((hook, index) => (
          <Card key={index} className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <p className="text-lg font-medium">{hook.text}</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(hook.text)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Psychology:</p>
                <p className="text-gray-600">{hook.psychology}</p>
              </div>
              <div>
                <p className="font-medium">Triggers:</p>
                <p className="text-gray-600">{hook.triggers.join(", ")}</p>
              </div>
              <div>
                <p className="font-medium">Expected Response:</p>
                <p className="text-gray-600">{hook.response}</p>
              </div>
              <div>
                <p className="font-medium">Platform Fit:</p>
                <p className="text-gray-600">{hook.platformFit.join(", ")}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="font-medium mr-2">Strength Score:</span>
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  hook.score >= 8
                    ? "bg-green-100 text-green-800"
                    : hook.score >= 6
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {hook.score}/10
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};