const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* 1 */
console.log('\n--- 1 ---\n');
const addEntry = (obj, key, val) => {
  obj[key] = val;
};

addEntry(lesson2, 'turno', 'manhã');

/* 2 */
console.log('\n--- 2 ---\n');
const logObjKeys = (obj) => {
  Object.keys(obj).forEach((key) => {
    console.log(key);
  });
};
logObjKeys(lesson1);

/* 3 */
console.log('\n--- 3 ---\n');
const logObjLength = (obj) => {
  console.log(Object.keys(obj).length);
};
logObjLength(lesson2);

/* 4 */
console.log('\n--- 4 ---\n');
const logObjValues = (obj) => {
  console.log(Object.values(obj));
};
logObjValues(lesson3);

/* 5 */
console.log('\n--- 5 ---\n');
const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });
console.log(allLessons);

/* 6 */
console.log('\n--- 6 ---\n');
const totalStudents = (lessons) => {
  let studentsCounter = 0;
  Object.values(lessons).forEach((lesson) => {
    Object.entries(lesson).forEach((entry) => {
      if (entry[0] === 'numeroEstudantes') {
        studentsCounter += Number(entry[1]);
      }
    });
  });
  return studentsCounter;
};
console.log(totalStudents(allLessons));

/* 7 */
console.log('\n--- 7 ---\n');
const valueByNumberObj = (obj, num) => {
  return Object.values(obj)[num];
};
console.log(valueByNumberObj(lesson1, 0));

/* 8 */
console.log('\n--- 8 ---\n');
const verifyEntryObj = (obj, key, val) => {
  let verifier = false;
  Object.entries(obj).forEach((entry) => {
    if (entry[0] === key && entry[1] === val) {
      verifier = true;
    }
  });
  return verifier;
};
console.log(verifyEntryObj(lesson3, 'turno', 'noite'))