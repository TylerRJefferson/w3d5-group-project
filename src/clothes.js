import dbConnect from "./dbConnect.js";

export async function getAllClothes(req, res) {
  const db = dbConnect()
  const result = await db.collection('clothes').get()
    .catch(err => {
      res.status(50).send({ success: false, message: err })
      return
    })
  const allClothes = result.docs.map(doc => doc.data())
  res.status(201).send({ message: allClothes })
}


export async function addNewClothes(req, res) {
  const db = dbConnect()
  await db.collection('clothes').add(req.body)
    .catch(err => {
      res.status(500).send({ success: false, message: err })
      return
    })
  res.status(201).send({ message: "New clothing added" })
}


export async function deleteItem(req, res) {
  const db = dbConnect()
  const { objectId } = req.params
  await db.collection('clothes').doc(objectId).delete()
    .catch(err => {
      res.status(500).send({ success: false, message: err })
      return
    })
  res.status(201).send({ message: "Item deleted" })
}


export async function getOneClothingItem(req, res) {
  const db = dbConnect();
  const clothesCollection = db.collection('clothes');

  const { search } = req.params;

  const result = await clothesCollection.doc(search).get()
    .catch(err => {
      res.status(500).send({ success: false, message: err })
      return;
    })
  res.status(201).send(({ success: true, message: result.data() }))
}