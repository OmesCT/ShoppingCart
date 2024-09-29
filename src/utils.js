export function getImageUrl(product) {
  // Assuming product has an id or similar attribute to differentiate images
  const images = ['https://th.bing.com/th/id/OIP.7SNCtK_ehzD9N9MjmdIW6AHaE8?rs=1&pid=ImgDetMain'
    , 'https://th.bing.com/th/id/OIP.SM4TT9xIFAAs6h8c83mIOAHaDt?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/R.8967dfe6fec166e88774f4d7d60fc9ee?rik=UMwYiTCBkHUVKg&pid=ImgRaw&r=0&sres=1&sresct=1',
    'https://th.bing.com/th/id/OIP.bYAy0nqXlHBsSJbFIpEUGQHaE8?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.GQlH_7M-SwuOKLc3TUEgIgHaE8?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/R.6e570038389a3644e8ddeba25f22b49b?rik=ASOYGBX5n7qtcQ&riu=http%3a%2f%2fwww.siamfishing.com%2f_pictures%2fcontent%2fupload2015%2f201502%2f1423026126.jpg&ehk=wWuZwlKti7ZZDrUrS0LSPjHTCN1%2f9I9xwL1IKHjAeB0%3d&risl=&pid=ImgRaw&r=0',
    'https://animal2you.com/wp-content/uploads/2023/01/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%9B%E0%B8%81-1.jpg',
    'https://th.bing.com/th/id/OIP.8rziL7GgcZzj65tN8Zr8YgHaEy?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.MJeDEQ4FIiQ-RqKhhLN2AAHaEw?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/R.97b6ce52f39aceb8eed94334640d61ec?rik=xnPEm1%2fZpJiMTw&pid=ImgRaw&r=0']; // Correctly formatted image names

  // You can use the product ID to select an image. Here is a simple example:
  const imageIndex = product.id % images.length; // Ensures the index is within the bounds of the images array
  return images[imageIndex]; // Return the corresponding image URL
}
