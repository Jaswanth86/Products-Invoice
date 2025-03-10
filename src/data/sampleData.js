// src/data/sampleData.js
export const stores = [
    { id: 1, name: "TechTrove", username: "techtrend", password: "pass123" },
    { id: 2, name: "GadgetZone", username: "gadgetzone", password: "pass456" },
    { id: 3, name: "ElectroMart", username: "electromart", password: "pass789" },
    { id: 4, name: "SmartShop", username: "smartshop", password: "pass101" },
    { id: 5, name: "FutureTech", username: "futuretech", password: "pass202" },
  ];
  
  export const products = [
    // TechTrove (Store 1)
    {
      storeId: 1,
      id: "p1-1",
      name: "Smart TV TechTrove 4K",
      description: "55-inch 4K UHD Smart TV with HDR",
      regularPrice: 599.99,
      dealPrice: 499.99,
      taxRate: 0.1,
    },
    {
      storeId: 1,
      id: "p1-2",
      name: "TechTrove Smart Watch",
      description: "Fitness tracker with heart rate monitor",
      regularPrice: 199.99,
      dealPrice: 159.99,
      taxRate: 0.1,
    },
    {
      storeId: 1,
      id: "p1-3",
      name: "TechTrove Wireless Mouse",
      description: "Ergonomic wireless mouse with adjustable DPI",
      regularPrice: 39.99,
      dealPrice: 29.99,
      taxRate: 0.1,
    },
    {
      storeId: 1,
      id: "p1-4",
      name: "TechTrove Bluetooth Speaker",
      description: "Portable speaker with 10-hour battery life",
      regularPrice: 79.99,
      dealPrice: 59.99,
      taxRate: 0.1,
    },
    {
      storeId: 1,
      id: "p1-5",
      name: "TechTrove USB-C Hub",
      description: "Multi-port USB-C hub with HDMI and USB 3.0",
      regularPrice: 49.99,
      dealPrice: 39.99,
      taxRate: 0.1,
    },
  
    // GadgetZone (Store 2)
    {
      storeId: 2,
      id: "p2-1",
      name: "GadgetZone Wireless Earbuds",
      description: "True wireless earbuds with noise cancellation",
      regularPrice: 129.99,
      dealPrice: 99.99,
      taxRate: 0.08,
    },
    {
      storeId: 2,
      id: "p2-2",
      name: "GadgetZone Smart Bulb",
      description: "Wi-Fi enabled smart bulb with color change",
      regularPrice: 29.99,
      dealPrice: 19.99,
      taxRate: 0.08,
    },
    {
      storeId: 2,
      id: "p2-3",
      name: "GadgetZone Action Camera",
      description: "4K action camera with waterproof case",
      regularPrice: 149.99,
      dealPrice: 119.99,
      taxRate: 0.08,
    },
    {
      storeId: 2,
      id: "p2-4",
      name: "GadgetZone Portable Charger",
      description: "10000mAh power bank with fast charging",
      regularPrice: 49.99,
      dealPrice: 39.99,
      taxRate: 0.08,
    },
    {
      storeId: 2,
      id: "p2-5",
      name: "GadgetZone Gaming Headset",
      description: "Over-ear gaming headset with microphone",
      regularPrice: 89.99,
      dealPrice: 69.99,
      taxRate: 0.08,
    },
  
    // ElectroMart (Store 3)
    {
      storeId: 3,
      id: "p3-1",
      name: "ElectroMart LED Monitor",
      description: "27-inch Full HD LED monitor",
      regularPrice: 249.99,
      dealPrice: 199.99,
      taxRate: 0.09,
    },
    {
      storeId: 3,
      id: "p3-2",
      name: "ElectroMart Electric Kettle",
      description: "1.7L stainless steel electric kettle",
      regularPrice: 39.99,
      dealPrice: 29.99,
      taxRate: 0.09,
    },
    {
      storeId: 3,
      id: "p3-3",
      name: "ElectroMart Air Purifier",
      description: "HEPA air purifier for small rooms",
      regularPrice: 99.99,
      dealPrice: 79.99,
      taxRate: 0.09,
    },
    {
      storeId: 3,
      id: "p3-4",
      name: "ElectroMart Smart Plug",
      description: "Wi-Fi enabled smart plug with timer",
      regularPrice: 24.99,
      dealPrice: 19.99,
      taxRate: 0.09,
    },
    {
      storeId: 3,
      id: "p3-5",
      name: "ElectroMart Desk Lamp",
      description: "Adjustable LED desk lamp with USB port",
      regularPrice: 34.99,
      dealPrice: 27.99,
      taxRate: 0.09,
    },
  
    // SmartShop (Store 4)
    {
      storeId: 4,
      id: "p4-1",
      name: "SmartShop Robot Vacuum",
      description: "Smart robot vacuum with app control",
      regularPrice: 299.99,
      dealPrice: 249.99,
      taxRate: 0.07,
    },
    {
      storeId: 4,
      id: "p4-2",
      name: "SmartShop Wireless Charger",
      description: "15W fast wireless charging pad",
      regularPrice: 29.99,
      dealPrice: 24.99,
      taxRate: 0.07,
    },
    {
      storeId: 4,
      id: "p4-3",
      name: "SmartShop Smart Thermostat",
      description: "Wi-Fi enabled smart thermostat",
      regularPrice: 129.99,
      dealPrice: 99.99,
      taxRate: 0.07,
    },
    {
      storeId: 4,
      id: "p4-4",
      name: "SmartShop Fitness Band",
      description: "Waterproof fitness band with sleep tracking",
      regularPrice: 59.99,
      dealPrice: 49.99,
      taxRate: 0.07,
    },
    {
      storeId: 4,
      id: "p4-5",
      name: "SmartShop Smart Doorbell",
      description: "Video doorbell with motion detection",
      regularPrice: 149.99,
      dealPrice: 119.99,
      taxRate: 0.07,
    },
  
    // FutureTech (Store 5)
    {
      storeId: 5,
      id: "p5-1",
      name: "FutureTech Gaming Mouse",
      description: "RGB gaming mouse with programmable buttons",
      regularPrice: 69.99,
      dealPrice: 54.99,
      taxRate: 0.06,
    },
    {
      storeId: 5,
      id: "p5-2",
      name: "FutureTech Mechanical Keyboard",
      description: "RGB mechanical keyboard with blue switches",
      regularPrice: 109.99,
      dealPrice: 89.99,
      taxRate: 0.06,
    },
    {
      storeId: 5,
      id: "p5-3",
      name: "FutureTech VR Headset",
      description: "Virtual reality headset with controllers",
      regularPrice: 399.99,
      dealPrice: 349.99,
      taxRate: 0.06,
    },
    {
      storeId: 5,
      id: "p5-4",
      name: "FutureTech SSD Drive",
      description: "1TB NVMe SSD for high-speed storage",
      regularPrice: 129.99,
      dealPrice: 109.99,
      taxRate: 0.06,
    },
    {
      storeId: 5,
      id: "p5-5",
      name: "FutureTech Wireless Router",
      description: "Dual-band Wi-Fi 6 router with mesh support",
      regularPrice: 179.99,
      dealPrice: 149.99,
      taxRate: 0.06,
    },
  ];