import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const grabGenre = async () => {
    const body = await request.json()
    const apiKey = process.env.API_KEY;
    const response = await fetch(`https://api.rawg.io/api/genres?key=${apiKey}`)
    const data = await response.json()
    return data
  }

  const retrievedGenre = await grabGenre()

  return NextResponse.json(retrievedGenre)
}