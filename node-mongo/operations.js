const assert = require("assert").strict;

// CRUD Operations

// CREATE
exports.insertDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection);
  coll.insertOne(document, (err, result) => {
    assert.strictEqual(err, null);
    callback(result);
  });
};

// READ
exports.findDocuments = (db, collection, callback) => {
  const coll = db.collection(collection);
  coll.find().toArray((err, docs) => {
    assert.strictEqual(err, null);
    callback(docs);
  });
};

// DELETE
exports.removeDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection);
  coll.deleteOne(document, (err, result) => {
    assert.strictEqual(err, null);
    callback(result);
  });
};

// UPDATE
exports.updateDocument = (db, document, update, collection, callback) => {
  const coll = db.collection(collection);
  coll.updateOne(document, { $set: update }, null, (err, result) => {
    assert.strictEqual(err, null);
    callback(result);
  });
};
