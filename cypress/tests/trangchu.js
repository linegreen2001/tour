describe('Triply_trang chủ',()=>{
it('TK_Không nhập điểm đến',()=>{
        cy.viewport(2000,2000)
        cy.visit('https://tour-client-zeta.vercel.app/', { failOnStatusCode: false });
        cy.scrollTo('bottom')
        cy.get('.lucide.lucide-search').click()
    })
it('TK_nhập điểm đến',()=>{
        cy.viewport(2000,2000)
        cy.visit('https://tour-client-zeta.vercel.app/', { failOnStatusCode: false });
        cy.scrollTo('bottom')
        cy.get("input[placeholder='Điểm đến']").type("Hoa lư")
        cy.get('.lucide.lucide-search').click()
        cy.wait(5000)
        cy.contains('Du Lịch Hà Nội - Hoa Lư - Tam Cốc - Hang Múa - Bái Đính - Tràng An 2N1Đ').should('be.visible');
})

it('chỉ nhập thời gian Khởi hành ',()=>{
    cy.viewport(2000,2000)
    cy.visit('https://tour-client-zeta.vercel.app/', { failOnStatusCode: false });
    cy.scrollTo('bottom')
    cy.get("p[class='text-[16px] lg:text-[18px] font-medium text-black']").click()
    cy.get('.rdp.p-3 .flex .items-center #react-day-picker-1').contains('September 2024')
    cy.get('.rdp.p-3 .rdp-tbody').within(()=>{
        cy.get('[name="day"]').contains('20').click()
    })
    cy.get('.lucide.lucide-search').click()
    cy.wait(5000)
    cy.get('[class="p-5 flex flex-col justify-between gap-3  text-[16px]"]').should('be.visible').then(($tours) => {
        // Kiểm tra số lượng các phần tử tour được tìm thấy
        const numberOfTours = $tours.length;
        expect(numberOfTours).to.be.greaterThan(0);
        if(numberOfTours>0)
        // Kiểm tra số lượng tour (Ví dụ: ít nhất 1 tour)
        // In số lượng tour ra console (hoặc có thể thực hiện các kiểm tra khác)
        {cy.log('Số lượng tour tìm thấy: ${numberOfTours}');}

        cy.log('Không có tour nào được tìm thấy')
})
})
it('TK_thời gian bắt đầu ',()=>{
    cy.viewport(2000,2000)
    cy.visit('https://tour-client-zeta.vercel.app/', { failOnStatusCode: false });
    cy.scrollTo('bottom')
    cy.get("input[placeholder='Điểm đến']").type("Hoa lư")
    cy.get("p[class='text-[16px] lg:text-[18px] font-medium text-black']").click()
    cy.get('.rdp.p-3 .flex .items-center #react-day-picker-1').contains('September 2024')
    cy.get('.rdp.p-3 .rdp-tbody').within(()=>{
        cy.get('[name="day"]').contains('20').click()

    })
    cy.get('.lucide.lucide-search').click()
    cy.wait(5000)
})
it('TC_Kiểm tra số lượng tour khi tìm kiếm',()=>{
cy.visit('https://tour-client-zeta.vercel.app/search/Hoa%20l%C6%B0', { failOnStatusCode: false });
    cy.scrollTo('bottom')
    cy.get('[class="p-5 flex flex-col justify-between gap-3  text-[16px]"]').should('be.visible').then(($tours) => {
        // Kiểm tra số lượng các phần tử tour được tìm thấy
        const numberOfTours = $tours.length;
        
        // Kiểm tra số lượng tour (Ví dụ: ít nhất 1 tour)
        expect(numberOfTours).to.be.greaterThan(0);
  
        // In số lượng tour ra console (hoặc có thể thực hiện các kiểm tra khác)
        cy.log('Số lượng tour Hoa Lư tìm thấy: ${numberOfTours}');
})
})
it('xem tất cả các tour hiện có',()=>{
    cy.viewport(2000,2000)
    cy.visit('https://tour-client-zeta.vercel.app/', { failOnStatusCode: false });
    cy.scrollTo('bottom')
    cy.get("p[class='font-medium']").click()

})

it('chatAI',()=>{
    cy.visit('https://tour-client-zeta.vercel.app/', { failOnStatusCode: false });
    cy.get('.lucide.lucide-bot').click()
    cy.url('https://tour-client-zeta.vercel.app/chatbot')

    cy.get('.lucide.lucide-send.w-4.h-4').click()
    cy.get("input[placeholder='Bạn cần hỏi gì...']").type('phú quốc')
    cy.get('.lucide.lucide-send.w-4.h-4').click()
    cy.wait(10000)
    
})
it('chatAI_không tìm dc tour  ',()=>{
    cy.visit('https://tour-client-zeta.vercel.app/', { failOnStatusCode: false });
    cy.get('.lucide.lucide-bot').click()
    cy.url('https://tour-client-zeta.vercel.app/chatbot')
    cy.contains('Chào mừng bạn sự dụng tính năng AI Chatbot của chúng tôi!').should('be.visible');
    cy.get("input[placeholder='Bạn cần hỏi gì...']").type('Tour du lịch hàn quốc')
    cy.get('.lucide.lucide-send.w-4.h-4').click()
    cy.get("input[placeholder='Bạn cần hỏi gì...']").type('Tháp namsan')
    cy.get('.lucide.lucide-send.w-4.h-4').click()
    cy.contains('Chúng tôi chưa có Tour tới đây.')
    cy.wait(5000)
    
})
it('chatAI_tk tour tồn tại Trên hệ thống',()=>{
    cy.visit('https://tour-client-zeta.vercel.app/', { failOnStatusCode: false });
    cy.get('.lucide.lucide-bot').click()
    cy.url('https://tour-client-zeta.vercel.app/chatbot')
    cy.contains('Chào mừng bạn sự dụng tính năng AI Chatbot của chúng tôi!').should('be.visible');
    cy.contains('Tour du lịch Việt Nam').click()
    cy.get('.lucide.lucide-send.w-4.h-4').click()
    cy.get("input[placeholder='Bạn cần hỏi gì...']").type('sapa')
    cy.get('.lucide.lucide-send.w-4.h-4').click()
    cy.get('.grid .bg-white').should('be.visible').then(($tours) => {
        // Kiểm tra số lượng các phần tử tour được tìm thấy
        const numberOfTours = $tours.length;
        
        // Kiểm tra số lượng tour (Ví dụ: ít nhất 1 tour)
        expect(numberOfTours).to.be.greaterThan(0);
  
        // In số lượng tour ra console (hoặc có thể thực hiện các kiểm tra khác)
        cy.log('Số lượng tour Sapa tìm thấy: ${numberOfTours}');
})
    cy.wait(10000)
    
})
}) 