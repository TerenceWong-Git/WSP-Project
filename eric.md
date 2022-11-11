# Visualize on https://quick-erd.surge.sh
#
# Relationship Types
#  -    - one to one
#  -<   - one to many
#  >-   - many to one
#  >-<  - many to many
#  -0   - one to zero or one
#  0-   - zero or one to one
#  0-0  - zero or one to zero or one
#  -0<  - one to zero or many
#  >0-  - zero or many to one
#
////////////////////////////////////


user
----
id pk
username varchar(255)
password varchar(255)
email varchar(255)
phone integer
birthday_date varchar(255)
subscription boolean


category
----
id pk
name varchar(255)

brand
----
id pk
name vachar(255)
description varchar(255)

product
----
id pk
name  varchar(255)
image varchar(255)
description varchar(255)
price decimal
stock int 
brand_id fk
category_id fk
origin_id fk


origin
----
id pk
name varchar(255)







reply
-----
id pk
# column "{table}_id" ends with "fk" will be interpreted as implicitly referencing to
# "{table}.id" with ">-" relationship
post_id fk # e.g. post_id references to post.id
user_id fk
reply_id null fk # it's fine to include other modifiers in the middle
content text