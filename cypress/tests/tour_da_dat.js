describe('Các tour đã đặt',()=>{
    it('Kiểm tra xem có đúng số lượng tour đã đặt',()=>{
        cy.visit('https://tour-client-zeta.vercel.app/order',{ failOnStatusCode: false });
        cy.get('.grid .rounded-lg').should('be.visible').then(($tours) => {
            // Kiểm tra số lượng các phần tử tour được tìm thấy
            const numberOfTours = $tours.length;
            
            // Kiểm tra số lượng tour (Ví dụ: ít nhất 1 tour)
            expect(numberOfTours).be.equal('2')
      
            // In số lượng tour ra console (hoặc có thể thực hiện các kiểm tra khác)
            cy.log('Số lượng tour đã đặt là: ${numberOfTours}');
    })
    })
    it('Kiểm tra xem Thông tin tour có chính xác như đăng ký hay không ?',()=>{
        cy.visit('https://tour-client-zeta.vercel.app/order',{ failOnStatusCode: false });
        cy.get('.grid .rounded-lg').then((size)=>{
            cy.wrap(size[0]).within(()=>{
                cy.get('.mb-2 .capitalize').should('have.text','Du Lịch Hà Nội - Hoa Lư - Tam Cốc - Hang Múa - Bái Đính - Tràng An 2N1Đ')
                cy.contains('Fri Sep 20 2024')
                cy.get('.text-lg').should('contain.text','10.200.000')
            })
            cy.wrap(size[1]).within(()=>{
                cy.get('.mb-2 .capitalize').should('have.text','Hà Nội - Osaka - Kyoto - Tokyo 6N5Đ')
                cy.contains('Thu Sep 12 2024')
                cy.get('.text-lg').should('contain.text','38.850.000')
            })

        })
})
it('in Ra Thông tin số lượng người của tour', () => {
    cy.visit('https://tour-client-zeta.vercel.app/order', { failOnStatusCode: false });

    cy.get('.grid .rounded-lg').each((gridElement) => {
        cy.wrap(gridElement).find('.flex .text-sm').then((texts) => {
            // Lặp qua các phần tử trong texts
            for (let i = 0; i < texts.length && i < 3; i++) {
                console.log(texts[i].innerText); // In ra nội dung của từng phần tử
            }
        });
    });
})
})