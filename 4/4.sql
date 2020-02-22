create table profile_tb(
  id VARCHAR(30),
  name TEXT,
  born_date DATE,
  address TEXT,
  photo TEXT,
  PRIMARY KEY(id)
);

create table hobby_tb (
  id  VARCHAR(30),
  name TEXT,
  PRIMARY KEY(id)
);

create table profileWithHobbies(
   id VARCHAR(30),
   hobby_id VARCHAR(30),
   profile_id VARCHAR(30),
   PRIMARY KEY (id),
   FOREIGN KEY (hobby_id) REFERENCES hobby_tb(id),
   FOREIGN KEY (profile_id) REFERENCES profile_tb(id)
);


INSERT INTO hobby_tb
VALUES
( '1', 'Billiard'),
( '2', 'Futsal'),
( '3', 'Renang'),
( '4', 'Senam'),
( '5', 'Masak');


INSERT INTO profile_tb 
VALUES
('1', 'Luna Lucinta', '2000-10-10','jalan1', "photo1.jpg"),
('2', 'Ismail', '2000-10-10','jalan1', "photo2.jpg"),
('3', 'Bagus', '2000-10-10','jalan1', "photo3.jpg"),
('4', 'Dwi', '2000-10-10','jalan1', "photo4.jpg");

INSERT INTO profileWithHobbies
VALUES
('1', '3', "1"),
('2', '2', '1');

INSERT INTO profileWithHobbies
VALUES
('3', '1', "2"),
('4', '2', '2');

INSERT INTO profileWithHobbies
VALUES
('5', '3', "3"),
('6', '1', "3");

INSERT INTO profileWithHobbies
VALUES
('7', '4', "4"),
('8', '5', "4");


-- Jawaban

-- Tampilkan Seluruh Data dari Table PRofile (query-1)

SELECT * FROM profile_tb;


-- Tampilkan seluruh Data Profil beserta hoby yang diminati (query-2)
SELECT 
*
FROM profileWithHobbies
JOIN profile_tb ON profileWithHobbies.profile_id = profile_tb.id
JOIN hobby_tb ON profileWithHobbies.hobby_id = hobby_tb.id
;

-- Tampilkan profil yang memili hoby tertentu (query-3)
SELECT 
*
FROM profileWithHobbies
JOIN profile_tb ON profileWithHobbies.profile_id = profile_tb.id
JOIN hobby_tb ON profileWithHobbies.hobby_id = hobby_tb.id
where hobby_tb.name = 'Renang'
;
