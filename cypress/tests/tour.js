describe('Tour',()=>{
    it('Điều hướng tour + kiểm tra các tour hiện có ',()=>{
        cy.visit('https://tour-client-zeta.vercel.app/tours',{ failOnStatusCode: false });
        cy.get('[class="p-5 flex flex-col justify-between gap-3  text-[16px]"]').should('be.visible').then(($tours) => {
            // Kiểm tra số lượng các phần tử tour được tìm thấy
            const numberOfTours = $tours.length;
            
            // Kiểm tra số lượng tour (Ví dụ: ít nhất 1 tour)
            expect(numberOfTours).to.equal(14);
      
            // In số lượng tour ra console (hoặc có thể thực hiện các kiểm tra khác)
            cy.log('Số lượng tour tìm thấy : ${numberOfTours}');
    })
    })
    it('Lọc theo tour_ trải nghiệm VH',()=>{
        cy.visit('https://tour-client-zeta.vercel.app/tours',{ failOnStatusCode: false });
        cy.get("button[id='Trải nghiệm văn hóa']").click()
        cy.get('[class="p-5 flex flex-col justify-between gap-3  text-[16px]"]').should('be.visible').then(($tours) => {
            // Kiểm tra số lượng các phần tử tour được tìm thấy
            const numberOfTours = $tours.length;
            
            // Kiểm tra số lượng tour (Ví dụ: ít nhất 1 tour)
            expect(numberOfTours).to.equal(5);
      
            // In số lượng tour ra console (hoặc có thể thực hiện các kiểm tra khác)
            cy.log('Số lượng tour Trải nghiệm Văn hoá tìm thấy : ${numberOfTours}');
        })
            cy.get('[class="p-5 flex flex-col justify-between gap-3  text-[16px]"]') 
               .filter((index, element) => {
                return Cypress.$(element).text().includes('Trải nghiệm văn hóa');
            })
              .then(($filteredTours) => {
                 const count = $filteredTours.length; // Đếm số lượng tour "trải nghiệm văn hóa"
                 expect(count).to.be.greaterThan(0); // Kiểm tra có ít nhất 1 tour "trải nghiệm văn hóa"


  });
})
  it('Lọc theo tour_ khám phá thiên nhiên',()=>{
    cy.visit('https://tour-client-zeta.vercel.app/tours',{ failOnStatusCode: false });
    cy.get("button[id='Khám phá thiên nhiên']").click()
    cy.get('[class="p-5 flex flex-col justify-between gap-3  text-[16px]"]').should('be.visible').then(($tours) => {
        // Kiểm tra số lượng các phần tử tour được tìm thấy
        const numberOfTours = $tours.length;
        
        // Kiểm tra số lượng tour (Ví dụ: ít nhất 1 tour)
        expect(numberOfTours).to.equal(8);
  
        // In số lượng tour ra console (hoặc có thể thực hiện các kiểm tra khác)
        cy.log('Số lượng tour khám phá thiên nhiên tìm thấy : ${numberOfTours}');
    })
        cy.get('[class="p-5 flex flex-col justify-between gap-3  text-[16px]"]') 
           .filter((index, element) => {
            return Cypress.$(element).text().includes('Khám phá thiên nhiên');
        })
          .then(($filteredTours) => {
             const count = $filteredTours.length; // Đếm số lượng tour "trải nghiệm văn hóa"
             expect(count).to.be.greaterThan(0); // Kiểm tra có ít nhất 1 tour "trải nghiệm văn hóa"

});
  })
  it('Lọc theo tour_ ngày lễ',()=>{
    cy.visit('https://tour-client-zeta.vercel.app/tours',{ failOnStatusCode: false });
    cy.get("button[id='Ngày lễ']").click()
    cy.get('[class="p-5 flex flex-col justify-between gap-3  text-[16px]"]').should('be.visible').then(($tours) => {
        // Kiểm tra số lượng các phần tử tour được tìm thấy
        const numberOfTours = $tours.length;
        
        // Kiểm tra số lượng tour (Ví dụ: ít nhất 1 tour)
        expect(numberOfTours).to.equal(1);
  
        // In số lượng tour ra console (hoặc có thể thực hiện các kiểm tra khác)
        cy.log('Số lượng tour ngày lễ tìm thấy : ${numberOfTours}');
    })
        cy.get('[class="p-5 flex flex-col justify-between gap-3  text-[16px]"]') 
           .filter((index, element) => {
            return Cypress.$(element).text().includes('Ngày lễ');
        })
          .then(($filteredTours) => {
             const count = $filteredTours.length; // Đếm số lượng tour "trải nghiệm văn hóa"
             expect(count).to.be.greaterThan(0); // Kiểm tra có ít nhất 1 tour "trải nghiệm văn hóa"

});
  })
  it('Lọc theo tour_ giá',()=>{
    cy.visit('https://tour-client-zeta.vercel.app/tours',{ failOnStatusCode: false });
    cy.get('.lucide.lucide-chevron-down.h-4.w-4.opacity-50').click()
    cy.contains('Từ thấp tới cao').click()
    cy.get('.lucide.lucide-chevron-down.h-4.w-4.opacity-50').click()
    cy.contains('Từ cao xuống thấp').click()
    cy.get('.lucide.lucide-chevron-down.h-4.w-4.opacity-50').click()
    cy.contains('Không chọn').click()
})
it('Đặt tour',()=>{
    cy.visit('https://tour-client-zeta.vercel.app/tours',{ failOnStatusCode: false });
    cy.get("a:nth-child(5) div:nth-child(2) h1:nth-child(1)").click()
    cy.contains('Du Lịch Hà Nội - Hoa Lư - Tam Cốc - Hang Múa - Bái Đính - Tràng An 2N1Đ')
    cy.get('.lucide.lucide-calendar.mr-2.h-4.w-4').click()

    cy.wait(5000)
    cy.get('.rdp.p-3 .rdp-tbody').within(()=>{
        cy.get('[name="day"]').contains('20').click()

    })
    cy.get('.lucide.lucide-user-plus.mr-2.h-4.w-4').click()
    cy.get('.z-50 .flex .lucide-circle-plus').then((size)=>{

         for(let i=0;i<4;i++)
           {cy.wrap(size[0]).click()}
         for(let i=0;i<1;i++)
            {cy.wrap(size[1]).click()} 
    })
    //trường hợp Đăng ký thêm người tour 
    cy.get('.z-50 .flex .lucide-circle-minus').then((size)=>{

         for(let i=0;i<0;i++)
            {cy.wrap(size[1]).click()} 
    })// Bỏ 1 tour trẻ em đi
    cy.contains('Đặt ngay').click()

})
it('Thanh toan-cho tk mới',()=>{
    cy.visit('https://checkout.stripe.com/c/pay/cs_test_a1NaDP4i5AcxHLF5VlOiKPf6siui6ExqQ58o9vd0JNgvP8BTT4RDGKT0UU#fidkdWxOYHwnPyd1blpxYHZxWjA0VUJuQ05ARjxyYXRQbDRucDF%2FYWtNdWdzczRPR0JUT1ZwZ19uSlIwf31RZkdifTI3bWI1d3c0YWI3Umg2XEozQV1gSjZhRF1Rc0ZrQk90NF1kNmBWTmBuNTVLR19Bf1ZSXScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl',{ failOnStatusCode: false });
   cy.origin('https://checkout.stripe.com/', () => {
        cy.url().should('include', 'checkout.stripe.com/c/pay/cs_test');
        cy.contains('Tour Vịnh Hạ Long 1 Ngày: Khám phá kỳ quan thiên nhiên thế giới')
        cy.get('.CurrencyAmount').should('contain.text','5,250,000')
        cy.get('#email').type('7.thuydung.2001@gmail.com')
        cy.get('#cardNumber').type('424242424242')
        cy.get('#cardExpiry').type('12 / 25')
        cy.get('#cardCvc').type('555')
        cy.get('#billingName').type('Thuy dung')
        cy.get('#billingCountry').select('Việt Nam')
        cy.get('.SubmitButton-IconContainer').click()
        cy.url('https://tour-client-zeta.vercel.app/payment_success')
        cy.contains('Thanh toán thành công')
        cy.contains('Về trang chủ').click
    })
})
it('Thanh toan_Thêm TKNH MỚI( đã có email )',()=>{
    cy.visit('https://tour-client-zeta.vercel.app/tours/66572c5be6d25a5a8e748e1a',{ failOnStatusCode: false });
    cy.origin('https://checkout.stripe.com/', () => {
        cy.url().should('include', 'checkout.stripe.com/c/pay/cs_test');
        cy.contains('Du Lịch Hà Nội - Hoa Lư - Tam Cốc - Hang Múa - Bái Đính - Tràng An 2N1Đ')
        cy.get('.CurrencyAmount').should('contain.text','10.200.000')
        cy.contains('7.thuydung.2001@gmail.com')
        cy.get('.AccordionItemCover-actionContainer .AccordionButton').click()
        cy.get('.PickerItem-newIcon').click()
        cy.contains('Nhập thông tin thanh toán')
        cy.get('#cardNumber').type('424242424242')
        cy.get('#cardExpiry').type('12 / 25')
        cy.get('#cardCvc').type('555')
        cy.get('#billingName').type('Thuy dung')
        cy.get('#billingCountry').select('Việt Nam')
        cy.get('.SubmitButton-IconContainer').click()
        cy.url('https://tour-client-zeta.vercel.app/payment_success')
        cy.contains('Thanh toán thành công')
        cy.contains('Về trang chủ').click
    })
    
})
it('Thanh toan_chọn TKNH Đã có (đã có email)',()=>{
    cy.visit('https://tour-client-zeta.vercel.app/tours/66572c5be6d25a5a8e748e1a',{ failOnStatusCode: false });
   cy.origin('https://checkout.stripe.com/', () => {
        cy.url().should('include', 'checkout.stripe.com/c/pay/cs_test');
        cy.contains('Du Lịch Hà Nội - Hoa Lư - Tam Cốc - Hang Múa - Bái Đính - Tràng An 2N1Đ')
        cy.get('.CurrencyAmount').should('contain.text','10.200.000')
        cy.contains('7.thuydung.2001@gmail.com')
        cy.get('.AccordionItemCover-actionContainer .AccordionButton').click()
        cy.get('.LinkRedactedCardNumberDetails').click()
        cy.get('.SubmitButton-IconContainer').click()
        cy.url('https://tour-client-zeta.vercel.app/payment_success')
        cy.contains('Thanh toán thành công')
        cy.contains('Về trang chủ').click
    })
})
})