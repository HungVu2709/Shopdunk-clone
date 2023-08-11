import img11 from './../image/img11.webp';
import img12 from './../image/img12.webp';
import img13 from './../image/img13.webp';
import img14 from './../image/img14.webp';

import img21 from './../image/img21.png';
import img22 from './../image/img22.webp';
import img23 from './../image/img23.webp';
import img24 from './../image/img24.webp';

import img31 from './../image/img31.png';
import img32 from './../image/img32.webp';
import img33 from './../image/img33.webp';
import img34 from './../image/img34.webp';

import img41 from './../image/img41.png';
import img42 from './../image/img42.webp';
import img43 from './../image/img43.webp';
import img44 from './../image/img44.webp';

import img51 from './../image/img51.webp';
import img52 from './../image/img52.webp';
import img53 from './../image/img53.webp';
import img54 from './../image/img54.webp';

import img61 from './../image/img61.webp';
import img62 from './../image/img62.webp';
import img63 from './../image/img63.webp';
import img64 from './../image/img64.webp';

import img71 from './../image/img71.webp';
import img72 from './../image/img72.jpeg';
import img73 from './../image/img73.jpeg';
import img74 from './../image/img74.jpeg';

import img81 from './../image/img81.webp';
import img82 from './../image/img82.webp';
import img83 from './../image/img83.webp';
import img84 from './../image/img84.webp';

const products = [
  {
    Id: 1,
    Name: 'iPhone 14 Pro Max',
    Price: 28790000,
    ShortDescription: 'iPhone 14 Pro mang đến những trải nghiệm khác biệt',
    Images: [
      {
        Id: 1,
        Link: img11,
      },
      {
        Id: 2,
        Link: img12,
      },
      {
        Id: 3,
        Link: img13,
      },
      {
        Id: 4,
        Link: img14,
      },
    ],
    FullDescription:
      'iPhone 14 Pro mang đến những trải nghiệm khác biệt. Dynamic Island giúp bạn dễ dàng truy cập thông tin và theo dõi các hoạt động. Camera 48MP cho độ chi tiết đáng kinh ngạc khi bạn chụp ảnh trong ProRAW. Pin ấn tượng kèm iOS 16, iPhone 14 Pro là ví dụ tốt nhất cho việc tích hợp phần cứng và phần mềm đẳng cấp thế giới của Apple. Giá tốt tại ShopDunk',
    Quantity: 10,
    Color: [
      {
        Id: 1,
        Name: 'white',
      },
      {
        Id: 2,
        Name: 'red',
      },
    ],
    Category: {
      Id: 1,
      Name: 'Iphone',
    },
    Capacity: {
      Id: 1,
      Name: '64GB',
    },
    Status: true,
  },
  {
    Id: 2,
    Name: 'iPhone 14 Pro',
    Price: 23890000,
    ShortDescription: 'iPhone 14 Pro mang đến những trải nghiệm khác biệt',
    Images: [
      {
        Id: 1,
        Link: img21,
      },
      {
        Id: 2,
        Link: img22,
      },
      {
        Id: 3,
        Link: img23,
      },
      {
        Id: 4,
        Link: img24,
      },
    ],
    FullDescription:
      'IiPhone 14 Pro mang đến những trải nghiệm khác biệt. Dynamic Island giúp bạn dễ dàng truy cập thông tin và theo dõi các hoạt động. Camera 48MP cho độ chi tiết đáng kinh ngạc khi bạn chụp ảnh trong ProRAW. Pin ấn tượng kèm iOS 16, iPhone 14 Pro là ví dụ tốt nhất cho việc tích hợp phần cứng và phần mềm đẳng cấp thế giới của Apple. Giá tốt tại ShopDunk.',
    Quantity: 10,
    Color: {
      Id: 3,
      Name: 'black',
    },
    Category: {
      Id: 1,
      Name: 'Iphone',
    },
    Capacity: {
      Id: 2,
      Name: '128GB',
    },
    Status: true,
  },
  {
    Id: 3,
    Name: 'iPhone 14',
    Price: 18990000,
    ShortDescription: 'iPhone 14 mang đến những trải nghiệm khác biệt',
    Images: [
      {
        Id: 1,
        Link: img31,
      },
      {
        Id: 2,
        Link: img32,
      },
      {
        Id: 3,
        Link: img33,
      },
      {
        Id: 4,
        Link: img34,
      },
    ],
    FullDescription:
      'IiPhone 14 mang đến những trải nghiệm khác biệt. Camera 48MP cho độ chi tiết đáng kinh ngạc khi bạn chụp ảnh trong ProRAW. Pin ấn tượng kèm iOS 16, iPhone 14 Pro là ví dụ tốt nhất cho việc tích hợp phần cứng và phần mềm đẳng cấp thế giới của Apple. Giá tốt tại ShopDunk.',
    Quantity: 10,
    Color: {
      Id: 1,
      Name: 'white',
    },
    Category: {
      Id: 1,
      Name: 'Iphone',
    },
    Capacity: {
      Id: 2,
      Name: '128GB',
    },
    Status: true,
  },
  {
    Id: 4,
    Name: 'iPhone 13',
    Price: 16390000,
    ShortDescription:
      'iPhone 13 với hệ thống camera kép tiên tiến nhất từng có trên iPhone. Chip A15 Bionic thần tốc. Bước nhảy vọt về thời lượng pin. Thiết kế bền bỉ. Mạng 5G siêu nhanh. Cùng với màn hình Super Retina XDR sáng hơn',
    Images: [
      {
        Id: 1,
        Link: img41,
      },
      {
        Id: 2,
        Link: img42,
      },
      {
        Id: 3,
        Link: img43,
      },
      {
        Id: 4,
        Link: img44,
      },
    ],
    FullDescription:
      'iPhone 13 với hệ thống camera kép tiên tiến nhất từng có trên iPhone. Chip A15 Bionic thần tốc. Bước nhảy vọt về thời lượng pin. Thiết kế bền bỉ. Mạng 5G siêu nhanh. Cùng với màn hình Super Retina XDR sáng hơn',
    Quantity: 10,
    Color: {
      Id: 2,
      Name: 'red',
    },
    Category: {
      Id: 1,
      Name: 'Iphone',
    },
    Capacity: {
      Id: 2,
      Name: '128GB',
    },
    Status: true,
  },
  {
    Id: 5,
    Name: 'iPad Air 4',
    Price: 14990000,
    ShortDescription:
      'iPad Air 2020. Màn hình Liquid Retina 10.9 inch tuyệt đẹp và công nghệ True Tone cho bạn những trải nghiệm thị giác thật dễ chịu. Chip A14 Bionic mới cùng công nghệ Neural Engine là nền tảng sức mạnh giúp bạn biên tập video 4K, soạn nhạc và giải trí cùng các trò chơi đẳng cấp, mọi tác vụ đều trở nên vô cùng đơn giản. Touch ID nhanh nhạy và dễ sử dụng với tính năng bảo mật cao, hệ thống camera hiện đại, USB-C, hỗ trợ đa dạng phụ kiện kể cả Magic Keyboard và Apple Pencil (thế hệ thứ 2).',
    Images: [
      {
        Id: 1,
        Link: img51,
      },
      {
        Id: 2,
        Link: img52,
      },
      {
        Id: 3,
        Link: img53,
      },
      {
        Id: 4,
        Link: img54,
      },
    ],
    FullDescription: '',
    Quantity: 10,
    Color: {
      Id: 2,
      Name: 'red',
    },
    Category: {
      Id: 2,
      Name: 'Ipad',
    },
    Capacity: {
      Id: 1,
      Name: '64KB',
    },
    Status: true,
  },
  {
    Id: 6,
    Name: 'iPad gen 9 10.2 inch WiFi 64GB',
    Price: 6990000,
    ShortDescription:
      'iPad Gen 9 (2021) Mạnh mẽ. Dễ sử dụng. Đa năng. Học sinh thích học với iPad mới. Với chip A13 Bionic mạnh mẽ, thời lượng pin bền bỉ cả ngày, màn hình Retina 10.2 inch tuyệt đẹp, Wi-Fi siêu nhanh, camera trước Ultra Wide với tính năng Trung Tâm Màn Hình, và tương thích với Apple Pencil và the Smart Keyboard. iPad giúp học sinh làm việc và học tập nhiều hơn và dễ dàng hơn. Tất cả tính năng với mức giá ấn tượng.',
    Images: [
      {
        Id: 1,
        Link: img61,
      },
      {
        Id: 2,
        Link: img62,
      },
      {
        Id: 3,
        Link: img63,
      },
      {
        Id: 4,
        Link: img64,
      },
    ],
    FullDescription: '',
    Quantity: 10,
    Color: {
      Id: 1,
      Name: 'white',
    },
    Category: {
      Id: 2,
      Name: 'Ipad',
    },
    Capacity: {
      Id: 1,
      Name: '64KB',
    },
    Status: true,
  },
  {
    Id: 7,
    Name: 'iPad Pro M2 11 inch WiFi 128GB',
    Price: 20190000,
    ShortDescription:
      'iPad Pro M2 11 inch WiFi 128GB Mạnh mẽ. Dễ sử dụng. Đa năng. Học sinh thích học với iPad mới. Với chip A13 Bionic mạnh mẽ, thời lượng pin bền bỉ cả ngày, màn hình Retina 10.2 inch tuyệt đẹp, Wi-Fi siêu nhanh.',
    Images: [
      {
        Id: 1,
        Link: img71,
      },
      {
        Id: 2,
        Link: img72,
      },
      {
        Id: 3,
        Link: img73,
      },
      {
        Id: 4,
        Link: img74,
      },
    ],
    FullDescription: '',
    Quantity: 10,
    Color: {
      Id: 1,
      Name: 'white',
    },
    Category: {
      Id: 2,
      Name: 'Ipad',
    },
    Capacity: {
      Id: 2,
      Name: '128KB',
    },
    Status: true,
  },
  {
    Id: 8,
    Name: 'iPad Pro M1 12.9 inch WiFi Cellular 512GB',
    Price: 33990000,
    ShortDescription:
      'iPad Pro 12.9 inch (2021) Chiếc iPad đỉnh cao với chip Apple M1 siêu mạnh, màn hình Liquid Retina XDR 12.9 inch sống động, kết nối không dây siêu nhanh. Thắt dây an toàn vào đi nào.',
    Images: [
      {
        Id: 1,
        Link: img81,
      },
      {
        Id: 2,
        Link: img82,
      },
      {
        Id: 3,
        Link: img83,
      },
      {
        Id: 4,
        Link: img84,
      },
    ],
    FullDescription:
      'iPad Pro 12.9 inch (2021) Chiếc iPad đỉnh cao với chip Apple M1 siêu mạnh, màn hình Liquid Retina XDR 12.9 inch sống động, kết nối không dây siêu nhanh. Thắt dây an toàn vào đi nào.',
    Quantity: 10,
    Color: {
      Id: 2,
      Name: 'black',
    },
    Category: {
      Id: 2,
      Name: 'Ipad',
    },
    Capacity: {
      Id: 4,
      Name: '512KB',
    },
    Status: true,
  },
];

const getAllProducts = () => products;
const getProducts = count => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};
const getProductById = Id => products.find(e => e.Id === Id);

const getCartItemsInfo = cartItems => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach(e => {
      let product = getProductById(e.id);
      res.push({
        ...e,
        product: product,
      });
    });
  }
  return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
};

const productData = {
  getAllProducts,
  getProducts,
  getProductById,
  getCartItemsInfo,
};

export default productData;
