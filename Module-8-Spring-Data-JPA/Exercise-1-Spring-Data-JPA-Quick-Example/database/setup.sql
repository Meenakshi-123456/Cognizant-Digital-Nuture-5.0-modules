-- Create the database schema
create schema ormlearn;

use ormlearn;

-- Create the country table
create table country(co_code varchar(2) primary key, co_name varchar(50));

-- Insert sample records
insert into country values ('IN', 'India');
insert into country values ('US', 'United States of America');
