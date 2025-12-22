import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

// Config
const INPUT_DIR = path.resolve('assets/raw')
const PUBLIC_DIR = path.resolve('public/images')
const MANIFEST_OUT = path.resolve('src/assets/image-manifest.json')
const SIZES = [320, 640, 1024, 1600]

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function processImage(file) {
  const ext = path.extname(file).toLowerCase()
  const name = path.basename(file, ext)
  const inputPath = path.join(INPUT_DIR, file)

  const variants = []
  for (const width of SIZES) {
    const outJpg = `${name}-${width}.jpg`
    const outWebp = `${name}-${width}.webp`
    const outJpgPath = path.join(PUBLIC_DIR, outJpg)
    const outWebpPath = path.join(PUBLIC_DIR, outWebp)

    try {
      const image = sharp(inputPath).rotate()
      await image.resize({ width }).jpeg({ quality: 80 }).toFile(outJpgPath)
      await image.resize({ width }).webp({ quality: 75 }).toFile(outWebpPath)
      variants.push({ width, jpg: `/images/${outJpg}`, webp: `/images/${outWebp}` })
    } catch (err) {
      console.error('Error processing', inputPath, err)
    }
  }

  return { name, variants }
}

async function buildManifest() {
  try {
    await ensureDir(PUBLIC_DIR)
    const files = await fs.readdir(INPUT_DIR)
    const images = files.filter(f => /\.(jpe?g|png)$/i.test(f))
    const manifest = {}

    for (const file of images) {
      console.log('Processing', file)
      const result = await processImage(file)
      manifest[result.name] = result.variants
    }

    // Ensure src/assets exists
    await ensureDir(path.dirname(MANIFEST_OUT))
    await fs.writeFile(MANIFEST_OUT, JSON.stringify(manifest, null, 2), 'utf8')
    console.log('Wrote manifest to', MANIFEST_OUT)
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Input directory not found:', INPUT_DIR)
      console.error('Create the folder and drop images there, e.g. assets/raw/hero.jpg')
    } else {
      console.error(err)
    }
    process.exit(1)
  }
}

buildManifest()
.then(() => { console.log('Image processing complete') })
.catch(err => { console.error(err); process.exit(1) })
