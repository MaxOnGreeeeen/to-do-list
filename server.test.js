const expect = require("expect");
const request = require("supertest");
const { ObjectId } = require("mongodb");

const { app } = require("./server");
const Note = require("./models/Note");

const testNotes = [
  {
    _id: new ObjectId(),
    title: "Test 1",
    description: "Test text 1",
    creationDate: Date.now(),
    deadline: new Date(2022, 10, 30),
    importance: "High",
  },
  {
    _id: new ObjectId(),
    title: "Test 2",
    description: "Test text 2",
    creationDate: Date.now(),
    deadline: new Date(2022, 10, 30),
    importance: "High",
  },
];
beforeEach((done) => {
  Note.deleteMany({})
    .then(() => {
      return Note.insertMany(testNotes);
    })
    .then(() => done());
});

describe("POST /notes", () => {
  it("should create a new note", (done) => {
    const title = "Test note title";
    const description = "Test note text";

    const note = {
      title: title,
      description: description,
    };

    request(app)
      .post("/api/note/create")
      .send(note)
      .set("Accept", "application/json")
      .expect(200)
      .expect((res) => {
        console.log(res.body);
        expect(res.body.title).toBe(title);
        expect(res.body.description).toBe(description);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Note.find(note)
          .then((testNotes) => {
            expect(testNotes.length).toBe(1);
            expect(testNotes[0].title).toBe(title);
            expect(testNotes[0].description).toBe(description);
            done();
          })
          .catch((e) => done(e));
      });
  });

  it("should not create new note with invalid body data", (done) => {
    request(app)
      .post("/api/note/create")
      .set("Accept", "application/json")
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Note.find()
          .then((testNotes) => {
            expect(testNotes.length).toBe(2);
            done();
          })
          .catch((e) => done(e));
      });
  });
});
