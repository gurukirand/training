create database sale;
use sale;
create table sales_order(
   entity_id int(10) unsigned not null AUTO_INCREMENT PRIMARY KEY comment"entity id",
   state varchar(32) comment"state",
   `status` varchar(32) comment"status",
   coupon_code varchar(255) comment"coupan code",
   protect_code varchar(255) comment"protect code",
   shipping_description varchar(255) comment"Shipping Description",
   is_virtual smallint(5) unsigned comment"Is Virtual",
   store_id smallint(5) unsigned comment"Store Id",
   customer_id  int(10) unsigned comment"customer id",
   base_discount_amount decimal(12,4) comment"Base Discount Amount",
   base_discount_canceled decimal(12,4) comment"Base Discount canceled",
   base_discount_invoiced decimal(12,4) comment"Base Discount invoiced",
   base_discount_refunded decimal(12,4) comment"Base Discount refunded",
   base_grand_total decimal(12,4) comment"Base grand total",
   base_shipping_amount decimal(12,4) comment"Base shipping amount",
   base_shipping_canceled decimal(12,4) comment"Base shipping canceled",
   base_shipping_invoiced decimal(12,4) comment"Base shipping invoiced",
   base_shipping_refunded decimal(12,4) comment"Base shipping refunded",
   base_shipping_tax_amount decimal(12,4) comment"Base shipping tax amount",
   base_shipping_tax_refunded decimal(12,4) comment"Base shipping tax refunded",
   base_subtotal decimal(12,4) comment"Base subtotal",
   base_subtotal_canceled decimal(12,4) comment"base subtotal canceled",
   base_subtotal_invoiced decimal(12,4) comment"base_subtotal_invoiced",
   base_subtotal_refunded decimal(12,4) comment"base_subtotal_refunded",
   base_tax_amount decimal(12,4) comment"base_tax_amount",
   base_tax_canceled decimal(12,4) comment"base_tax_canceled",
   base_tax_invoiced decimal(12,4) comment"base_tax_invoiced",
   base_tax_refunded decimal(12,4) comment"base_tax_refunded",
   base_to_global_rate decimal(12,4) comment"base_to_global_rate",
   base_to_order_rate decimal(12,4) comment"base_to_order_rate",
   base_total_canceled decimal(12,4) comment"base_total_canceled",
   base_total_invoiced decimal(12,4) comment"base_total_invoiced",
   base_total_invoiced_cost decimal(12,4) comment"base_total_invoiced_cost",
   base_total_offline_refunded decimal(12,4) comment"base_total_offline_refunded",
   base_total_online_refunded decimal(12,4) comment"base_total_online_refunded",
   base_total_paid decimal(12,4) comment"base_total_paid",
   base_total_qty_ordered decimal(12,4) comment"base_total_qty_ordered",
   base_total_refunded decimal(12,4) comment"base_total_refunded",
   discount_amount decimal(12,4) comment"discount_amount",
   discount_canceled decimal(12,4) comment"discount_canceled",
   discount_invoiced decimal(12,4) comment"discount invoiced",
   discount_refunded decimal(12,4) comment"discount refunded",
   grand_total decimal(12,4) comment"grand total",
   created_at timestamp not null comment"created at"
);
alter table sales_order add updated_at timestamp not null default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP comment"updated at";


create table sales_order_item(
   item_id int(10) unsigned not null AUTO_INCREMENT PRIMARY KEY,
   order_id int(10) unsigned not null default 0,
   FOREIGN KEY(order_id) references sales_order(entity_id),
   parent_item_id int(10) unsigned,
   quote_item_id int(10) unsigned,
   store_id smallint(5) unsigned,
   created_at timestamp not null default CURRENT_TIMESTAMP,
   updated_at timestamp not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
   product_id int(10) unsigned,
   product_type varchar(255),
   product_options text,
   weight decimal(12,4) default 0,
   is_virtual smallint(5) unsigned,
   sku varchar(255),
   `name` varchar(255),
   description text,
   applied_rule_ids text,
   additional_data text,
   is_qty_decimal smallint(5) unsigned,
   no_discount smallint(5) unsigned not null default 0,
   qty_backordered decimal(12,4) default 0,
   qty_canceled decimal(12,4) default 0,
   qty_invoiced decimal(12,4) default 0,
   qty_ordered	 decimal(12,4) default 0,
   qty_refunded decimal(12,4) default 0,
   qty_shipped	 decimal(12,4) default 0,
   base_cost decimal(12,4) default 0,
   price decimal(12,4) not null default 0,
   base_price decimal(12,4) not null default 0,
   original_price decimal(12,4),
   base_original_price	 decimal(12,4),
    tax_percent decimal(12,4) default 0,
   tax_amount decimal(12,4) default 0
   );
   
   describe sales_order_item;
   describe sales_order;
   
   
alter table sales_order modify column created_at TIMESTAMP NOT NULL DEFAULT current_timestamp;

alter table sales_order add subscription_info int(11),add subscription_type text,add no_of_days text;

alter table sales_order_item drop foreign key sales_order_item_ibfk_1;

ALTER TABLE sales_order_item
ADD FOREIGN KEY (order_id) REFERENCES sales_order(entity_id);

insert into sales_order values('4','active','succes','OFF12','pro','adress',1,2,1002,
20.30,30.40,45.78,24.30,28.80,56.30,90.30,24.30,80.00,67.30,6.30,65.30,57.67,67.76,6.34,
8.30,9.4,24.24,78.45,56.3,5.7,46.75,78.30,54.30,67.30,21.30,35.30,67.30,77.30,56.4,
242.88,53.34,56.30,23.45,
DEFAULT,default,'10','subscribed','200');

select * from sales_order;

insert into sales_order_item values(15,4,21,12,2,DEFAULT,
default,34,'electronic','headphone',0.500,1,'bazz','skullcandy',
'in ear','extra bazz','comfortable',1,0,100,20,89,120,20,100,1000,1200,1100,1020,1000,
10,100);


select * from sales_order_item;

update sales_order_item set name="boss" where item_id="15";

update sales_order set state="karnataka" where entity_id="1";