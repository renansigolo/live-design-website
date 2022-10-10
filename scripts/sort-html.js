const posthtml = require('posthtml')
const attrsSorter = require('posthtml-attrs-sorter')
const fs = require('fs')
const path = require('path')

const getAllFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles ||= []

  files.forEach((file) => {
    if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
      arrayOfFiles = getAllFiles(`${dirPath}/${file}`, arrayOfFiles)
    } else if (path.extname(file) === '.html') {
      arrayOfFiles.push(path.join(dirPath, '/', file))
    }
  })

  return arrayOfFiles
}
const result = getAllFiles('layouts')

result.forEach((filePath) => {
  const htmlRaw = fs.readFileSync(filePath, 'utf8')
  posthtml()
    .use(attrsSorter())
    .process(htmlRaw)
    .then((result) => {
      fs.writeFileSync(filePath, result.html, 'utf-8')
    })
})
