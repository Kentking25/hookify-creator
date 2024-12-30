import { useState } from "react";
import { HookForm } from "@/components/HookForm";
import { HookDisplay } from "@/components/HookDisplay";
import { generateHooks } from "@/services/hookGenerator";
import { generateHookExamplesPDF } from "@/services/pdfGenerator";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Index = () => {
  const [hooks, setHooks] = useState<ReturnType<typeof generateHooks>>([]);

  const handleSubmit = (data: Parameters<typeof generateHooks>[0]) => {
    const generatedHooks = generateHooks(data);
    setHooks(generatedHooks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">AI Hook Generator</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create engaging, psychologically compelling hooks for your content
            across multiple platforms.
          </p>
          <Button
            onClick={generateHookExamplesPDF}
            variant="outline"
            className="mt-4"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Hook Examples PDF
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <HookForm onSubmit={handleSubmit} />
          </div>
          <div>
            <HookDisplay hooks={hooks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;