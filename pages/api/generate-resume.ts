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

  await page.goto('http://localhost:3000/resume2', {
    waitUntil: 'networkidle0',
    // timeout: 30000,
  })

  await page.setViewport({
    width: Math.round(1227 / 1.5),
    height: Math.round(841 / 1.5),
  })

  //   await autoScroll(page)
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
      // path: resolve(process.cwd(), 'public', 'TIONGSON_JANEOMIGUEL.pdf'),
      path,
    })
    .then(() => {
      throw 'Generated Error'
    })
    .catch((err) => {
      errorInFirstWriting = true
      return page.pdf({
        format: 'a4',
        printBackground: true,
        preferCSSPageSize: true,
      })
    })

  //   const pdf = await page.screenshot({
  //     fullPage: true,
  //     type: 'jpeg',
  //     quality: 100,
  //   })

  await browser.close()

  // res.pipe()
  res.setHeader('Content-Type', 'application/pdf')

  //   res.setHeader(
  //     'Content-Disposition',
  //     'attachment;filename=JaneoMiguelTiongsonCV.pdf'
  //   )

  res.send(!errorInFirstWriting ? readFileSync(path) : pdf)
  //   res.pipe(pdf)
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      var totalHeight = 0
      var distance = 100
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight
        window.scrollBy(0, distance)
        totalHeight += distance

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer)
          resolve(null)
        }
      }, 200)
    })
  })
}
