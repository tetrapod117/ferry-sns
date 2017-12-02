# サーバの接続情報だよ

## データベース （postgresql )
IP アドレス: 153.127.201.68  *(もしかしたら変わるかも)*  
データベース名: ferry_db
データベースユーザ名: ferry  
データベースパスワード: Z5ABYUGT  
ポート番号:3306 (tcp)  

### テーブルカラム

```
mysql> show columns from users;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| id     | int(11)     | YES  |     | NULL    |       |
| name   | varchar(20) | YES  |     | NULL    |       |
| status | int(11)     | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+
3 rows in set (0.05 sec)

mysql> 
mysql> show columns from timeline;
+-------------+--------------+------+-----+---------+-------+
| Field       | Type         | Null | Key | Default | Extra |
+-------------+--------------+------+-----+---------+-------+
| timeline_id | int(11)      | YES  |     | NULL    |       |
| update_at   | datetime     | YES  |     | NULL    |       |
| post_text   | varchar(255) | YES  |     | NULL    |       |
| photo_path  | varchar(255) | YES  |     | NULL    |       |
| travel_id   | int(11)      | YES  |     | NULL    |       |
+-------------+--------------+------+-----+---------+-------+
5 rows in set (0.05 sec)
```

## データの置き方
scpで転送してください☆  

IP アドレス: 153.127.201.68  *(もしかしたら変わるかも)*  
ユーザ名: ferry  
パスワード: Z5ABYUGT  
