import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const difficulty = searchParams.get('difficulty') || 'easy';
  const type = searchParams.get('type') || 'syllogism'; // syllogism.json or challenge_test.json

  try {
    const dataPath = path.join(
      process.cwd(),
      'public/data/verbal_reasoning',
      difficulty,
      `${type}.json`
    );

    const fileData = await fs.readFile(dataPath, 'utf-8');
    const verbalQuestions = JSON.parse(fileData);

    return Response.json({
      success: true,
      difficulty,
      type,
      data: verbalQuestions.slice(0, 20) // Return first 20 questions
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to load verbal questions" },
      { status: 500 }
    );
  }
}