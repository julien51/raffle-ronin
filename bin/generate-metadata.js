var fs = require('fs');
var mapping = require('../mapping.js')
var template = require('../template.js')

const dir = './out/'


const writeNext = async (index) => {
  if (!mapping[index]) {
    return true
  }
  const metadata = {
    ...template,
    image: mapping[index],
  }

  fs.writeFileSync(`${dir}/${index + 1}`, JSON.stringify(metadata));
  return await writeNext(index + 1)
}

const main = async () => {

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  await writeNext(0)
}

// Opens the mapping, for each of these, create a file and upload it to IPFS.
main()
