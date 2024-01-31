import GetGoogleFonts from 'get-google-fonts'

export default async function fonts() {
  const instance = new GetGoogleFonts({
    outputDir: './dist/assets/fonts',
    cssFile: './fonts.css',
  })

  const result = await instance.download(
    GetGoogleFonts.constructUrl(
      {
        Roboto: [400, 700, 900],
      },
      ['cyrillic', 'latin']
    )
  )

  return result
}