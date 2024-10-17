const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'nvy28j',
  e2e: {
    specPattern: "./cypress/tests/**.*", // Trỏ đến thư mục test
    baseUrl: "https://tour-client-zeta.vercel.app/",
    // Các cấu hình khác nếu cần
  }
})