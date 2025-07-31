import { NextResponse } from 'next/server'
import { LinkPretendard } from './css/pretendard.js'
import './css/fonts.css'
import './css/main.css'

export default function HomePage() {
  return <html>
    <head>
      <LinkPretendard></LinkPretendard>
    </head>
    <body>
      <h1>Hello</h1>

    </body>
  </html>
}