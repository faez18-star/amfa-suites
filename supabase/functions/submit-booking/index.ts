import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_sheets/v4'
const SPREADSHEET_ID = '1nE99M45q1XahvvseKRIi_JPl3yxWqKZNrn25FSyiFyI'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
    const GOOGLE_SHEETS_API_KEY = Deno.env.get('GOOGLE_SHEETS_API_KEY')
    if (!LOVABLE_API_KEY || !GOOGLE_SHEETS_API_KEY) {
      return new Response(JSON.stringify({ error: 'Missing gateway credentials' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const body = await req.json()
    const { name, email, phone, guests, checkIn, checkOut, nights, total } = body ?? {}

    if (!name || !email || !phone || !checkIn || !checkOut || !nights) {
      return new Response(JSON.stringify({ error: 'Missing required booking fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const row = [
      '',
      String(name),
      String(email),
      String(phone),
      String(guests ?? ''),
      String(checkIn),
      String(checkOut),
      String(nights),
      String(total ?? ''),
      new Date().toISOString(),
    ]

    const res = await fetch(
      `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A:J:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          'X-Connection-Api-Key': GOOGLE_SHEETS_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values: [row] }),
      },
    )

    const text = await res.text()
    if (!res.ok) {
      console.error('Sheets append failed', res.status, text)
      return new Response(JSON.stringify({ error: 'Failed to save booking', status: res.status, detail: text }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('submit-booking error', err)
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
