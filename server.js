import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; // Import the fileURLToPath function
const __filename = fileURLToPath(import.meta.url); // Convert the module URL to a file path
const __dirname = path.dirname(__filename); // Get the directory name

const app = express();
import multer from 'multer';
import { mergePdfs } from './merge.js';
const upload = multer({ dest: 'uploads/' });

app.use('/static', express.static('public'));
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
  console.log(req.files);
 let d = await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
  res.redirect(`http://localhost:3000/static/${d}.pdf`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
