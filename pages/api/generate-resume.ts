import { readFileSync } from 'fs'
import { NextApiResponse } from 'next'
import { NextApiRequest } from 'next'
import { resolve } from 'path'
import puppeteer from 'puppeteer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const browser = await puppeteer.launch({
    headless: true,
  })

  const page = await browser.newPage()

  await page.setViewport({
    width: 1440,
    height: 796,
  })

  await page.goto(
    (process.env.NODE_ENV === 'development' ? 'http://' : 'https://') +
      req.headers.host +
      '/resume2',
    {
      waitUntil: 'networkidle0',
    }
  )

  /**
   * Evaluate page to scroll to below to avoid non loading images
   */
  await page.evaluate(
    () =>
      new Promise((resolve) => {
        var scrollTop = -1
        const interval = setInterval(() => {
          window.scrollBy(0, 100)
          if (document.documentElement.scrollTop !== scrollTop) {
            scrollTop = document.documentElement.scrollTop
            return
          }
          clearInterval(interval)
          resolve(null)
        }, 10)
      })
  )

  const path = resolve(process.cwd(), 'public', 'TIONGSON_JANEOMIGUEL.pdf')

  let errorInFirstWriting: boolean = false

  const pdf = await page
    .pdf({
      format: 'a4',
      printBackground: true,
      preferCSSPageSize: true,
      path,
    })
    .catch((err) => {
      console.log('error await page.pdf function')
      console.log(err)
      throw err
    })

  await browser.close().catch((err) => {
    console.log('error closing browser')
    console.log(err)
  })

  res.setHeader('Content-Type', 'application/pdf')

  res.send(!errorInFirstWriting ? readFileSync(path) : pdf)
}

// async function autoScroll(page) {
//   await page.evaluate(async () => {
//     await new Promise((resolve, reject) => {
//       var totalHeight = 0
//       var distance = 100
//       var timer = setInterval(() => {
//         var scrollHeight = document.body.scrollHeight
//         window.scrollBy(0, distance)
//         totalHeight += distance

//         if (totalHeight >= scrollHeight - window.innerHeight) {
//           clearInterval(timer)
//           resolve(null)
//         }
//       }, 200)
//     })
//   })
// }
