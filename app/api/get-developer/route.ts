import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const grabDev = async () => {
    const body = await request.json()
    const { id } = body
    const apiKey = process.env.API_KEY;
    const response = await fetch(`https://api.rawg.io/api/developers/${id}?key=${apiKey}`)
    const data = await response.json()
    return data
  }

  const retrievedDev = await grabDev()

  return NextResponse.json(retrievedDev)
}