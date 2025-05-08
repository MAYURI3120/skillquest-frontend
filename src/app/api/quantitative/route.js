import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const difficulty = searchParams.get('difficulty') || 'easy';

  try {
    // Path to your JSON files
    const dataPath = path.join(
      process.cwd(),
      'public/data/quantitative_aptitude',
      difficulty,
      'Data_final.json'
    );
    
    const fileData = await fs.readFile(dataPath, 'utf-8');
    const questions = JSON.parse(fileData);

    return Response.json({
      success: true,
      difficulty,
      questions: questions.slice(0, 20) // First 20 questions
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to load questions" },
      { status: 500 }
    );
  }
}