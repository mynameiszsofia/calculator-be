import fs from 'fs';

const is_numeric = (str) => {
  return /^\d+$/.test(str);
}

const getNumber = (req,res) => {
  if (!fs.existsSync("./tmp")) {
    res.status(400);
    throw new Error("Number doesn't saved yet in tmp folder.");
  }

  const num = fs.readFileSync("./tmp/num.txt", {encoding: "utf-8"});

  if (!num) {
    res.status(400);
    throw new Error("File is empty");
  }

  res.status(200).json({message: num});
}

const saveNumber = (req,res) => {
  const isNum = is_numeric(req.params.num)

  if (!isNum) {
    res.status(400);
    throw new Error("Please type number");
  }
  if (!req.params.num) {
    res.status(400);
    throw new Error("Number doesn't exists");
  }

  if (!fs.existsSync("./tmp")) {
    fs.mkdirSync("./tmp");
  }

  fs.writeFileSync("./tmp/num.txt", req.params.num, { encoding: 'utf8' });
  res.status(200).json({message: "Number saved."});
}

export {
  getNumber,
  saveNumber
}