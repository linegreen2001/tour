describe('meeting',()=>{
  it('live ',()=>{
    cy.viewport(1600,1600)
    cy.visit('https://tour-client-zeta.vercel.app/livestream',{ failOnStatusCode: false });
    cy.get("input[placeholder='Room']").type('Dung')
    cy.get("input[placeholder='Name']").type('123')
    cy.get("button[type='submit']").click()
    cy.wait(5000)
    cy.get("button[data-lk-source='camera']").click()
    cy.on('window:alert', (txt) => {
        // Kiểm tra nội dung của alert
        expect(txt).to.contains('Sử dụng camera của bạn');
    
      });
      cy.window().then((win) => {
        cy.stub(win.navigator.mediaDevices, 'getUserMedia').callsFake(() => {
          return new Promise((resolve) => {
            resolve(); // Giả lập việc cho phép
          });
        })
    })

cy.get("button[data-lk-source='screen_share']").click()
cy.on('window:alert', (txt) => {
// Kiểm tra nội dung của alert
expect(txt).to.contains('Chọn nội dung bên muốn chia sẻ');

});
cy.get('.lk-disconnect-button').click()
cy.wait(1000)

    })
it('Tham gia vào phòng live khi phòng live đã được khởi tạo và có người Tham gia ',()=>{
        cy.viewport(1600,1600)
        cy.visit('https://tour-client-zeta.vercel.app/livestream',{ failOnStatusCode: false });
        cy.get("input[placeholder='Room']").type('sapa')
        cy.get("input[placeholder='Name']").type('dung')
        cy.get("button[type='submit']").click()
        cy.wait(5000)
        cy.get("button[data-lk-source='camera']").click()
       cy.on('window:confirm',function(str){ 
        expect(str).to.contains('Sử dụng camera của bạn')
       })

cy.on('window:alert', (txt) => {
    // Kiểm tra nội dung của alert
    expect(txt).to.contains('Chọn nội dung bên muốn chia sẻ');
  });
cy.get('.lk-participant-tile').then(($item)=>{
    const thanhvien = $item.length
cy.log(`Tổng số Thành viên của Phòng live là: ${thanhvien}`)
})
cy.wait(1000)

        })
    })



