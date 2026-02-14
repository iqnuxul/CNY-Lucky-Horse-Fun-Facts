import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateHorseImage = async (style: string): Promise<string> => {
  try {
    const prompt = `A highly detailed, festive, and artistic figure of a Horse for Chinese New Year 2026. 
    Style: ${style}. 
    Colors: Red, Gold, Jade Green. 
    Context: Traditional Chinese patterns, auspicious clouds, lanterns. 
    High quality, 8k resolution, cinematic lighting.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
         // Although flash-image doesn't support aspect ratio widely yet, we keep the request simple.
         // No responseMimeType for image generation models like this.
      }
    });

    // Iterate through parts to find the inline data (image)
    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }

    throw new Error("No image data found in response.");
  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
    throw error;
  }
};
