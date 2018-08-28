use testdata;


select cu.mccsid as mccsid,cu.name as name,cu.mobile as mobile,a.name as Apartment,
b.name as Block,f.name as Flat,from_unixtime(w.created) as `Start date`,cu.referral_contact as `Refferal contact`,
w.created as  `Last recharge`,w.total as WalletTotal from mcart_customers as cu 
inner join mc_apartment as a on cu.acode=a.id 
inner join mc_block as b on cu.bcode=b.id 
inner join mc_flat as f on cu.fcode=f.id 
inner join mcart_wallet as w on cu.mccsid=w.mccsid
where w.id in (select max(id) from mcart_wallet group by mccsid);

select * from mcart_wallet;

select cu.mccsid as mccsid,cu.name as name,cu.mobile as mobile,a.name as Apartment,
b.name as Block,f.name as Flat,max(w.created)as `Start date`,cu.referral_contact as `Refferal contact`,
w.created as  `Last recharge`,w.total as WalletTotal from mcart_customers as cu 
inner join mc_apartment as a on cu.acode=a.id 
inner join mc_block as b on cu.bcode=b.id 
inner join mc_flat as f on cu.fcode=f.id 
inner join mcart_wallet as w on cu.mccsid=w.mccsid group by cu.name;