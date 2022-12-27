CREATE DATABASE products;

USE products;

DROP TABLE inventory;

CREATE TABLE inventory (
	productID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    productName VARCHAR(50),
    productCategory VARCHAR(30),
    productDescription VARCHAR(300),
    productPrice DEC(4,2),
    inStock BOOLEAN,
    imgSrc VARCHAR(300)
    -- FOREIGN KEY (categoryID) REFERENCES productCategories(categoryID)
);

/*
CREATE TABLE productCategories (
	categoryID INT AUTO_INCREMENT NOT NULL,
    categoryName VARCHAR(50),
    
    PRIMARY KEY (categoryID)
);
*/

INSERT INTO inventory (productName, 
productCategory, 
productDescription, 
productPrice, 
inStock, 
imgSrc)
VALUES 
("Frosted Vanilla Cupcake",
"candle",
"Lighten up the mood with this sweet and soft vanilla cupcake-scented candle, one of our flagship scents.",
16.00,
TRUE,
"https://target.scene7.com/is/image/Target/GUEST_78b5a109-f20f-4585-af11-51fee6e02383?wid=325&hei=325&qlt=80&fmt=pjpeg"),
("Soft Cashmere and Lavender",
"candle",
"Create a calm aura with this scented candle. Soft cashmere and lavender fragrance provides a soothing effect.",
16.00,
TRUE,
"https://target.scene7.com/is/image/Target/GUEST_5132ec87-28e2-4bac-817f-a292f332ce9b?wid=626&hei=626&qlt=80&fmt=pjpeg"),
( "Ashwood and Palo Santo",
"candle",
"With this pleasant aroma, light this candle to elevate your mood, bringing good vibes to any area.",
16.00,
TRUE,
"https://target.scene7.com/is/image/Target/GUEST_a1766c6a-917c-45d6-8426-0d36fc5ceb42?wid=800&hei=800&qlt=80&fmt=pjpeg"),
("Charcoal and Black Teak",
"candle",
"Stimulate your senses with charcoal and black teak scents, one of our most unique and most-purchased candles.",
16.00,
TRUE,
"https://target.scene7.com/is/image/Target/GUEST_47b75941-c525-46d8-82e3-9fd80cc47310?wid=626&hei=626&qlt=80&fmt=pjpeg"),
("Water Mint and Eucalyptus",
"candle",
"Create a refreshing and outdoorsy ambiance with this candle. Water mint and eucalyptus scents lighten the mood.",
16.00,
TRUE,
"https://target.scene7.com/is/image/Target/GUEST_29af4953-8492-4cde-8473-d9488d153528?wid=626&hei=626&qlt=80&fmt=pjpeg"),
("Peony and Cherry Blossom",
"candle",
"Create a flowery and sweet ambiance with this soothing scent, which is perfect for a refreshing spring and summer scent.",
16.00,
TRUE,
"https://target.scene7.com/is/image/Target/GUEST_f789c07c-11fe-4300-8b9e-a9afeee0a321?wid=626&hei=626&qlt=80&fmt=pjpeg"),
("Vanilla Bourbon Scented Wax Melts",
"wax melt",
"Create a warm and comforting retreat in your home. These wax melts provide all the benefits of a candle with a reduced fire risk.",
10.00,
TRUE,
"https://target.scene7.com/is/image/Target/GUEST_765b6442-54f8-4a29-8684-9c1c0634f6d3?wid=626&hei=626&qlt=80&fmt=pjpeg"),
("Cozy Cashmere Scented Wax Melts",
"wax melt",
"Create a warm and comforting retreat in your home. These wax melts provide all the benefits of a candle with a reduced fire risk.",
10.00,
TRUE,
"https://target.scene7.com/is/image/Target/GUEST_e59b5397-95c7-4045-be18-b0029feec8b6?wid=626&hei=626&qlt=80&fmt=pjpeg"),
("Caramel Latte Scented Wax Melts",
"wax melt",
"Create a warm and comforting retreat in your home. These wax melts provide all the benefits of a candle with a reduced fire risk.",
10.00,
TRUE,
"https://target.scene7.com/is/image/Target/GUEST_bc4f6b85-9c89-4ead-8a2c-2a189f06c09f?wid=626&hei=626&qlt=80&fmt=pjpeg"),
("Vanilla Bean and Amber Scented Wax Melts",
"wax melt",
"Create a warm and comforting retreat in your home. These wax melts provide all the benefits of a candle with a reduced fire risk.",
10.00,
TRUE,
"https://target.scene7.com/is/image/Target/GUEST_57b4ff90-fa03-4c58-b821-4e0e7dbd92d9?wid=626&hei=626&qlt=80&fmt=pjpeg"),
("Glass Warm Cider & Cinnamon Pumpkin Candle",
"seasonal",
"Revitalize yourself after a tiring day with this candle. Warm cider and cinnamon scents help elevate the mood.",
25.00,
TRUE,
"https://target.scene7.com/is/image/Target/GUEST_d83c4a4f-280d-4c06-8a6e-5c40d6e3733c?wid=626&hei=626&qlt=80&fmt=pjpeg"),
("Glass Vanilla Pumpkin Candle",
"seasonal",
"Create an energizing ambiance for any occasion with this candle, which has a fresh vanilla scent to uplift your mood.",
25.00,
TRUE,
"https://target.scene7.com/is/image/Target/GUEST_e0b176fa-aa03-4bc5-98f6-786f7d258fee?wid=626&hei=626&qlt=80&fmt=pjpeg");

SELECT * FROM inventory;