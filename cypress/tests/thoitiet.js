describe('Kiểm tra ngày và giờ địa phương hiển thị', () => {
    it('Kiểm tra ngày và giờ có đúng với thời gian hiện tại không', () => {
      // Truy cập trang web bạn cần kiểm tra
      cy.visit('https://tour-client-zeta.vercel.app/weather',{ failOnStatusCode: false });
      cy.wait(5000)
  
      // Lấy thời gian hiện tại
      const now = new Date();
  
      // Hàm định dạng giờ hiện tại thành định dạng 12 giờ (AM/PM)
      const formatTime12Hour = (date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Nếu giờ là 0, chuyển thành 12 (12 AM)
        const minutesStr = minutes < 10 ? '0' + minutes : minutes; // Thêm số 0 trước nếu phút < 10
        return `${hours}:${minutesStr} ${ampm}`;
      };
  
      // Định dạng ngày theo 'Saturday, 28 Sep 2024'
      const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date); // Sử dụng 'en-GB' cho định dạng ngày trước tháng
        return formattedDate;
      };
  
      // Lấy ngày và giờ hiện tại
      const currentTimeFormatted = `${formatDate(now)} | Giờ địa phương: ${formatTime12Hour(now)}`;
  
      // Lấy ngày giờ hiển thị trên giao diện
      cy.get('.text-xl.font-extralight') // Thay '.date-time-selector' bằng selector của phần tử hiển thị ngày giờ
        .invoke('text')
        .then((displayedDateTime) => {
          // So sánh thời gian hiển thị với thời gian hiện tại
          expect(displayedDateTime.trim()).to.equal(currentTimeFormatted);
        });
    });
    it('kiểm tra Thời tiết ',()=>{
        cy.visit('https://tour-client-zeta.vercel.app/weather',{ failOnStatusCode: false });
        cy.wait(5000)
        cy.title().should('to.be.equal','Tour')
        cy.get("input[placeholder='Nhập nơi bạn muốn xem...']").type("Hải Dương")
        cy.get("circle[cx='11']").scrollIntoView().click({ force: true })
        cy.get('.text-3xl.font-medium').contains('Hải Dương')
        cy.get('.flex.items-center.justify-center.py-6.text-xl')
        .invoke('text').then((mây)=>{
            cy.log(mây)
        })
        cy.get('p.text-5xl')
        .invoke('text').then((nhiệtđộ)=>{
            cy.log(nhiệtđộ)
        })
    })
    it('kiểm tra vị trí ',()=>{
        let alertAppeared = false;
        cy.on('window:alert', (str) => {
            alertAppeared = true;  // Đặt flag thành true nếu alert xuất hiện
            cy.log('Alert xuất hiện với nội dung: ' + str); // In ra nội dung của alert
          });
        cy.visit('https://tour-client-zeta.vercel.app/weather',{ failOnStatusCode: false });
        cy.wait(5000)
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > svg:nth-child(3)").click({ force: true })
        cy.on('window:alert', (txt) => {
            // Kiểm tra nội dung của alert
            expect(txt).to.contains('Biết vị trí của bạn');
        // nếu có xuất hiện alert thì sẽ chạy vào hàm này
          });
        cy.then(() => {
            if (!alertAppeared) {
              cy.log('Không có alert nào xuất hiện');
  };

})

});
})
