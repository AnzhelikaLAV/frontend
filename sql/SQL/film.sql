/*### задание на самостоятельную работу:

- подготовьте query вкладку в beekeeper:
- в query вы будете сохранять все свои запросы
- комментируйте уже использованные
- у вас должна получиться связная история команд


### создайте таблицы:

1. две со связью между ними one-to-many
2. три со связью many-to-many

- заполните их значениями
- получите значения через join

### когда сделаете - усложните задачу:

- удалите таблицы и добавьте к созданию:

1. CONSTRAINT - именное ограничение
2. CHECK - условия ограничения
3. ON DELETE CASCADE - разрешите записям в связной таблице быть удаленной в случае удаление источника
4. NOT NULL
5. UNIQUE

- при выводе данных:

1. WHERE - условие вывода (используйте логические операторы)
2. AS - псевдоним
3. GROUP BY - группировка
4. STRING_AGG() - для вывода в строку нескольких значений из many-to-many
5. HAVING - условие группировки
6. AVG() и ROUND(), MAX() или MIN()
7. LIKE - нахождение подстроки*/
CREATE TABLE category (
  id serial PRIMARY KEY,
  title varchar(255) NOT NULL
);

CREATE TABLE film (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL,
  category_id integer NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category(id)
);
 
 CREATE TABLE genre (
  id serial PRIMARY KEY,
  title varchar(255) NOT NULL
);

CREATE TABLE film_genre (
  id serial PRIMARY KEY,
  film_id integer NOT NULL,
  genre_id bigint NOT NULL,
  FOREIGN KEY (film_id) REFERENCES film(id),
  FOREIGN KEY (genre_id) REFERENCES genre(id)
);

INSERT INTO category (title) VALUES
  ('Action'),
  ('Comedy'),
  ('Drama');
  
  INSERT INTO film (name, category_id) VALUES
  ('Die Hard', 1),
  ('Terminator 2: Judgment Day', 1),
  ('The Mask', 2),
  ('The Fast and the Furious', 1),
  ('The Shawshank Redemption', 3),
  ('Forrest Gump', 3);
  
  INSERT INTO genre (title) VALUES
  ('Action'),
  ('Comedy'),
  ('Drama'),
  ('Thriller'),
  ('Sci-Fi');
  
  INSERT INTO film_genre (film_id, genre_id) VALUES
  (1, 1),  -- Die Hard - Action
  (1, 4),  -- Die Hard - Thriller
  (2, 1),  -- Terminator 2 - Action
  (2, 5),  -- Terminator 2 - Sci-Fi
  (3, 2),  -- The Mask - Comedy
  (4, 1),  -- The Fast and the Furious - Action
  (4, 4),  -- The Fast and the Furious - Thriller
  (5, 3),  -- The Shawshank Redemption - Drama
  (6, 3);  -- Forrest Gump - Drama

  --Получение данных с использованием JOIN
SELECT 
COUNT (film.id) AS count,
  film.name AS name,
  category.title AS category,
  STRING_AGG (genre.title, ', ') AS about
FROM
  film
  JOIN category ON film.category_id = category.id
  JOIN film_genre ON film.id = film_genre.film_id
  JOIN genre ON film_genre.genre_id = genre.id
GROUP BY
  film.name,
  category.title;

--Использование GROUP BY и HAVING
SELECT 
  category.title AS category_title,
  COUNT(film.id) AS film_count
FROM 
  film
  JOIN category ON film.category_id = category.id
GROUP BY 
  category.title
HAVING 
  COUNT(film.id) > 1;

--LIKE
SELECT 
  name
FROM 
  film
WHERE 
  name LIKE '%F%';

DELETE FROM film_genre;
