create database Transaction;
use Transaction;
create user 'gurukiran'@'%' identified by 'gurukiranD4@';
create table wallet(
id int(10) unsigned NOT NULL auto_increment primary key comment "Id",
cid int(10) unsigned NOT NULL comment "Customer Id",
sid int(10) unsigned NOT NULL comment "Subscription Id",
line_item_id int(11) comment "Line Item Id",
line_item_aid int(11) comment "Line Item Id",
amount decimal(10,2) comment "Amount",
total decimal(10,2) comment "Total",
transaction_id varchar(255) comment "Transcation Id",
payment_id varchar(255) comment "Payment Id",
transaction_type varchar(255) comment "Transcation Type",
reversal varchar(255) comment "Reversal",
`status` tinyint(1) comment "Status",
created datetime comment "Creation Time",
updated datetime comment "Update Time",
user_id int(11) comment "User ID",
delivery_date date comment "Delivery Date"
);


create table `Transactions` (
  id int(10) unsigned NOT NULL AUTO_INCREMENT comment 'Id',
  cid int(10) unsigned NOT NULL comment 'Customer Id',
  sid int(10) unsigned NOT NULL comment 'Subscription Id',
  amount decimal(10,2) comment 'Amount',
  total decimal(10,2) comment 'Total',
  transaction_id varchar(255) comment 'Transcation Id',
  payment_id varchar(255) comment 'Payment Id',
  transaction_type varchar(255) comment 'Transcation Type',
  `status` tinyint(1)  comment 'Status',
  created datetime  comment 'Creation Time',
  updated datetime comment 'Update Time',
  response varchar(45),
  PRIMARY KEY (`id`),
  UNIQUE KEY (`transaction_id`),
  UNIQUE KEY (`payment_id`)
);

start transaction;

insert into wallet (cid,sid,line_item_id,line_item_aid,amount,total,transaction_id,payment_id,transaction_type,reversal,`status`,created,updated,user_id,delivery_date) values (10,20,1,1,1200,10000,'12wall64','12pay45','upi','yes',1,'2018-08-22 23:59:59','2018-08-22 23:59:59',23,'2018-08-22');

insert into Transactions (cid,sid,amount,total,transaction_id,payment_id,transaction_type,`status`,created,updated,response) values (1,1,15000.00,20000.00,'5','10','online',1,'2018-12-22','2018-12-22','Yes');

commit;

select * from wallet;

select * from Transactions;


start transaction;
update wallet set sid=10 where id=1;

update Transactions set sid=10 where id=1;

ROLLBACK;


start transaction;

insert into wallet (cid,sid,line_item_id,line_item_aid,amount,total,transaction_id,payment_id,transaction_type,reversal,`status`,created,updated,user_id,delivery_date) values (10,20,1,1,1200,10000,'12wall64','12pay45','upi','yes',1,'2018-08-22 23:59:59','2018-08-22 23:59:59',23,'2018-08-22');

insert into Transactions (cid,sid,amount,total,transaction_id,payment_id,transaction_type,`status`,created,updated,response) values (1,1,15000.00,20000.00,'55','120','online',1,'2018-12-22','2018-12-22','Yes');

savepoint a;

update wallet set sid=40 where id=1;

update Transactions set sid=50 where id=1;
rollback to savepoint a;

grant select, insert, update, delete on wallet to gurukiran; 

revoke delete on wallet from gurukiran;

delete from wallet where id=3;

delete from wallet;

insert into wallet (cid,sid,line_item_id,line_item_aid,amount,total,transaction_id,payment_id,transaction_type,reversal,`status`,created,updated,user_id,delivery_date) values (10,20,1,1,1200,10000,'12wall64','12pay45','upi','yes',1,'2018-08-22 23:59:59','2018-08-22 23:59:59',23,'2018-08-22');

update wallet set sid=30,total=20000 where id=7;

update wallet set sid=100;

rename table `wallet` TO `customer_wallet`;