import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    // Here you would typically use the Google Sheets API to add the data
    // This requires setting up OAuth or a service account
    // For simplicity, we're just returning a success response

    // Example of how you would use the Google Sheets API:
    // const sheets = google.sheets({ version: 'v4', auth });
    // await sheets.spreadsheets.values.append({
    //   spreadsheetId: 'YOUR_SPREADSHEET_ID',
    //   range: 'Sheet1!A:B',
    //   valueInputOption: 'USER_ENTERED',
    //   requestBody: {
    //     values: [[name, email, new Date().toISOString()]],
    //   },
    // });

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error adding to waitlist:", error)
    return NextResponse.json({ error: "Failed to add to waitlist" }, { status: 500 })
  }
}

