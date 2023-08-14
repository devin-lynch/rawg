import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const grabGames = async () => {
    const apiKey = process.env.API_KEY;
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
    const data = await response.json()
    return data.results
  }

  const retrievedGames = await grabGames()

  return NextResponse.json(retrievedGames)
}