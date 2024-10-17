describe('Tin tức',()=>{
    it('Kiểm tra xem có bao nhiêu tin tức hiển thị lên phần mềm ',()=>{
    cy.visit('https://tour-client-zeta.vercel.app/news',{ failOnStatusCode: false });
    cy.get('.items-center .justify-between').should('be.visible').then(($new)=> {
          const numberOfnew = $new.length;
            
        // Kiểm tra số lượng tour (Ví dụ: ít nhất 1 tour)
        expect(numberOfnew).to.be.greaterThan(1)
  
        // In số lượng tour ra console (hoặc có thể thực hiện các kiểm tra khác)
        cy.log(`Số lượng tin tức  là: ${numberOfnew}`);
})
    })
    it('xem chi tiết tin tức ',()=>{
        cy.visit('https://tour-client-zeta.vercel.app/news',{ failOnStatusCode: false });
        cy.contains('Chuyến ngắm Tây Bắc mùa lúa chín dang dở của khách miền Nam').click()
        cy.wait(5000)
        cy.get("h1[class='text-[20px] lg:text-[28px] font-medium text-black md:mb-[30px]']").should('have.text','Chuyến ngắm Tây Bắc mùa lúa chín dang dở của khách miền Nam')

    })
        })
