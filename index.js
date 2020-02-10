const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
  .then(()=> console.log('connecting mongodb...'))
  .catch(err => console.error('mongodb connection failed..', err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: {type: Date, default: Date.now},
  isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
  const course = new Course({
    name: "dance",
    teacher: "nozomi",
    tags: ["pop", "hit", "wave"],
    isPublished: true
  })
  
  const result = await course.save();
  console.log(result);
}

createCourse(); 
