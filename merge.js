import PDFMerger from 'pdf-merger-js';

var merger = new PDFMerger();

export const mergePdfs = async (p1, p2) => {
  await merger.add(p1);
  await merger.add(p2); 
let d = new Date().getTime()

  // Set metadata
  // await merger.setMetadata({
  //   producer: "pdf-merger-js based script",
  //   author: "John Doe",
  //   creator: "John Doe",
  //   title: "My live as John Doe"
  // });

  await merger.save(`public/${d}.pdf`);
  return d
}

 export default {mergePdfs};
