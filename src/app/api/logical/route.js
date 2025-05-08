import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const difficulty = searchParams.get('difficulty') || 'easy';

  try {
    const dataPath = path.join(
      process.cwd(),
      'public/data/logical_reasoning',
      difficulty,
      'test.json'
    );
    
    const fileData = await fs.readFile(dataPath, 'utf-8');
    const puzzles = JSON.parse(fileData);

    return Response.json({
      success: true,
      difficulty,
      puzzles: puzzles.slice(0, 20) // First 20 puzzles
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to load puzzles" },
      { status: 500 }
    );
  }
}