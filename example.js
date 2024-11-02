const fs = require('fs');

// Зчитуємо файл spaces.json
const data = fs.readFileSync('test-data/spaces.json', 'utf8');
const json = JSON.parse(data);

// Виводимо тільки space.name і space.id для lists, ім'я яких починається на "test"
json.folders.forEach(folder => {
  folder.lists.forEach(list => {
    if (list.name.startsWith('test')) {
      console.log(list.space.name);
      console.log(list.space.id);
    }
  });
});
