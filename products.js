/*
  3D NKS — ТОВАРЫ
  Этот файл — главное место, где ты меняешь каталог.

  Как изменить:
  1) Цена: price: 45000
  2) Название: name: 'Новое название'
  3) Описание: description: 'Текст о товаре'
  4) Категория: cat: 'Фигурки' / 'Брелоки' / 'Аксессуары' / 'Под заказ'
  5) Размер / материал: meta: '120 мм · PLA'
  6) Фото: img: 'images/имя-файла.jpg'
  7) Бейдж: badge: 'Новинка' (можно убрать строку)
  8) active: false — временно скрыть товар
  9) Чтобы добавить товар — скопируй любой объект и измени id/name/cat/meta/price/img.
  10) id должен быть уникальным: например 'mickey', 'keychain2'.

  После изменения сохрани products.js и загрузи его в GitHub.
*/

const PRODUCTS = [
  {
    id: 'robot',
    name: 'Собачка',
    cat: 'Брелок',
    meta: '80 мм · PLA',
    price: 10000,
    img: 'images/robot.jpg',
    description: 'Небольшая декоративная 3D-фигурка. Можно заказать в другом цвете.'
  },
  {
    id: 'nameplate',
    name: 'Табличка 3D NKS',
    cat: 'Аксессуары',
    meta: 'по заказу · PLA',
    price: 5000,
    img: 'images/nameplate.jpg',
    description: 'Именная или брендовая табличка. Текст и цвет можно изменить под заказ.'
  },
  {
    id: 'dragon',
    name: 'Гибкий дракон',
    cat: 'Фигурки',
    meta: '120 мм · PLA',
    price: 40000,
    img: 'images/dragon.jpg',
    badge: 'Популярное',
    description: 'Гибкая подвижная фигурка дракона.'
  },
  {
    id: 'skeleton',
    name: 'Скелет — подвижная фигурка',
    cat: 'Фигурки',
    meta: '120 мм · PLA',
    price: 10000,
    img: 'images/skeleton.jpg',
    description: 'Подвижная декоративная фигурка.'
  },
  {
    id: 'bikers',
    name: 'Фигурки байкеров',
    cat: 'Фигурки',
    meta: 'по заказу · PLA',
    price: 90000,
    img: 'images/bikers.jpg',
    description: 'Фигурки байкеров. Цвет и вариант исполнения можно выбрать при заказе.'
  },
  {
    id: 'honda',
    name: 'Honda Keychain',
    cat: 'Брелоки',
    meta: '60 мм · PLA',
    price: 10000,
    img: 'images/honda.jpg',
    description: 'Брелок Honda для ключей или сумки.'
  },
  {
    id: 'rabbit',
    name: 'Кролик в очках',
    cat: 'Фигурки',
    meta: '100 мм · PLA',
    price: 65000,
    img: 'images/rabbit.jpg',
    description: 'Декоративная фигурка кролика.'
  },
  {
    id: 'printing',
    name: '3D-печать под заказ',
    cat: 'Под заказ',
    meta: 'по запросу · PLA',
    price: 80000,
    img: 'images/printing.jpg',
    badge: 'На заказ',
    description: 'Создание и печать модели по вашей идее или готовому STL-файлу.'
  }
];
