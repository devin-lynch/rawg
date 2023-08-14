import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const grabGames = async () => {
    const body = await request.json()
    const { title } = body
    const apiKey = process.env.API_KEY;
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&search=${title}`)
    const data = await response.json()
    return data
  }

  const retrievedGames = await grabGames()

  return NextResponse.json(retrievedGames)
}