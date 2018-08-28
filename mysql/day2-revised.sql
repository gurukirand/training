

SELECT 
    cu.mccsid AS mccsid,
    cu.name AS name,
    cu.mobile AS mobile,
    a.name AS Apartment,
    b.name AS Block,
    f.name AS Flat,
    FROM_UNIXTIME(w.created) AS `Start date`,
    cu.referral_contact AS `Refferal contact`,
    w.created AS `Last recharge`,
    w.total AS WalletTotal
FROM
    mcart_customers AS cu
        INNER JOIN
    mc_apartment AS a ON cu.acode = a.id
        INNER JOIN
    mc_block AS b ON cu.bcode = b.id
        INNER JOIN
    mc_flat AS f ON cu.fcode = f.id
        INNER JOIN
    mcart_wallet AS w ON cu.mccsid = w.mccsid
WHERE
    w.id IN (SELECT 
            MAX(id)
        FROM
            mcart_wallet
        GROUP BY mccsid)
-- 1.
select mccsid,total from mcart_wallet where id in (select max(id) from mcart_wallet group by mccsid);

-- 2.

select case when transaction_type="reduction" then transaction_type="purchase" end from mcart_wallet;

-- 3
select s.id as `subscriptions ID`,s.mccsid as Mccsid,cu.mobile as mobile,cu.name as Label,s.product_id as `Product id`,
s.subscription_type `Subscription Type`,s.amount as `Subscription amount`,s.quantity as `Subscriptions Quantity`,a.name as Apartment,b.name as  Block,f.name as flat,s.start_date as `Subscriptions Start Date`,s.end_date as `Subscriptions End Date`,s.stop_date as `Subscriptions Stop Date`,s.resume_date as `Subscriptions Resume Date`,s.created as `Subscriptions Created Date`,
s.status as `Subscriptions Status `

from mcart_subscriptions as s inner join 
mcart_customers as cu on s.mccsid=cu.mccsid
inner join mc_apartment as a on cu.acode=a.id
inner join mc_block as b on cu.bcode=b.id
inner join mc_flat as f on cu.fcode=f.id
;


-- 4

select cu.name as name,cu.mobile as mobile,d.pid as `Product id`,s.subscription_type as `Subscription Type`,d.quantity as `Product quantity`,d.amount as `Product amount`,d.delivery_date as `Product delivery date`,ds.mobile_number as `Distributor Mobile Number`,ds.name as `Distrbutor Name`,db.mobile_number as `Delivery Boy Mobile Number`,
db.name as `Delivery Boy Name`,cu.acode as `Mcart apartment ID`,a.name as `apartment`,cu.bcode as `Mcart block ID`,b.name as `block`,cu.fcode as `Mcart flat ID`, f.name as flat

from mc_distribution as d inner join
mcart_customers as cu on d.mccsid=cu.mccsid
inner join mcart_subscriptions as s on s.mccsid=cu.mccsid
inner join mc_distributors as ds on d.mcdid=ds.id
inner join mc_delivery_boys as db on d.mcdbid=d.id
inner join mc_apartment as a on cu.acode=a.id
inner join mc_block as b on cu.bcode=b.id
inner join mc_flat as f on cu.fcode=f.id;


