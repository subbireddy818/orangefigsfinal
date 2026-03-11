// Optimize Cloudinary URLs for faster loading (smaller size, auto format/quality)
export const cloudinaryOpt = (url, w = 800) =>
  url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${w}/`);

export const galleryImages = [
    { id: 1, url: 'https://res.cloudinary.com/dg5qkp09h/image/upload/v1772798205/6M7A0145_ck8lhg.jpg', title: 'Young Bakers' },
    { id: 2, url: 'https://res.cloudinary.com/dg5qkp09h/image/upload/v1772798205/DSC04995_myfbmq.jpg', title: 'Healthy Salads' },
    { id: 3, url: 'https://res.cloudinary.com/dg5qkp09h/image/upload/v1772798206/ADI09926_2_miywgy.jpg', title: 'Pasta Making' },
    { id: 4, url: 'https://res.cloudinary.com/dg5qkp09h/image/upload/v1772798206/DSC05099_1_z2wizb.jpg', title: 'Bread Workshop' },
    { id: 5, url: 'https://res.cloudinary.com/dg5qkp09h/image/upload/v1772798206/ADI09599_1_tvwxfw.jpg', title: 'Team Cooking' },
    { id: 6, url: 'https://res.cloudinary.com/dg5qkp09h/image/upload/v1772798207/DSC07638_uwuoa0.jpg', title: 'Chef Hat Graduation' },
    { id: 7, url: 'https://res.cloudinary.com/dg5qkp09h/image/upload/v1772798208/CL4A3464_1_cqsxwl.jpg', title: 'Baking Fun' },
    { id: 8, url: 'https://res.cloudinary.com/dg5qkp09h/image/upload/v1772798432/NAG05820_1__11zon_ja8sbx.jpg', title: 'Delicious Treats' },
    { id: 9, url: 'https://res.cloudinary.com/dg5qkp09h/image/upload/v1772798463/NAG05830_1__11zon_tkmxiv.jpg', title: 'Community Cooking' }
];

export const contactInfo = {
    email: 'hello@theculinarylounge.com',
    phone: '+91 90000 10770',
    address: 'Plot 15, Bharani Layout, Narne Road, Jublee Hills, Hyderabad, Telangana 500092',
    hours: 'Mon-Sat: 9am - 6pm'
};
