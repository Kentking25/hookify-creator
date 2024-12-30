import jsPDF from 'jspdf';

const hookExamples = [
  {
    category: "Educational",
    examples: [
      "The science behind [topic] that experts swear by",
      "5 groundbreaking ways to master [topic]",
      "Why conventional [topic] wisdom might be wrong"
    ]
  },
  {
    category: "Business",
    examples: [
      "Transform your [topic] strategy overnight",
      "The hidden costs of ignoring [topic]",
      "Scale your [topic] results exponentially"
    ]
  },
  {
    category: "Lifestyle",
    examples: [
      "Revolutionize your approach to [topic]",
      "The morning [topic] ritual that changes everything",
      "Why your [topic] strategy needs a reset"
    ]
  }
];

export const generateHookExamplesPDF = () => {
  const doc = new jsPDF();
  let yPosition = 20;

  // Title
  doc.setFontSize(16);
  doc.text('Hook Examples Database', 20, yPosition);
  yPosition += 15;

  // Content
  doc.setFontSize(12);
  hookExamples.forEach(category => {
    // Category title
    doc.setFont(undefined, 'bold');
    doc.text(category.category, 20, yPosition);
    yPosition += 10;

    // Examples
    doc.setFont(undefined, 'normal');
    category.examples.forEach(example => {
      // Check if we need a new page
      if (yPosition > 280) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.text(`• ${example}`, 25, yPosition);
      yPosition += 7;
    });
    yPosition += 10;
  });

  doc.save('hook-examples.pdf');
};