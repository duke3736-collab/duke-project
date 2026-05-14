document.addEventListener('DOMContentLoaded', () => {
    const regionSelect = document.getElementById('regionSelect');
    const categoryItems = document.querySelectorAll('.category-item');
    const searchBtn = document.getElementById('searchBtn');
    const agentMessage = document.querySelector('.agent-message');

    let selectedCategory = 'all';

    // Category selection logic
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            selectedCategory = item.getAttribute('data-cat');
            
            // Dynamic agent message
            updateAgentMessage(selectedCategory);
        });
    });

    function updateAgentMessage(cat) {
        const messages = {
            all: '"충성! 전체 지원금을 싹 다 찾아보겠습니다!"',
            youth: '"청년 사장님들, 일자리부터 주거 지원까지 제가 다 챙겨놨습니다!"',
            child: '"육아 수당부터 어린이집 혜택까지, 우리 아이들을 위한 돈은 제가 지킵니다!"',
            senior: '"어르신들 활동비랑 의료비 지원금, 놓치지 않게 제가 꼼꼼히 체크했습니다!"',
            smallbiz: '"사장님들 힘내십쇼! 소상공인 경영 안정 지원금 여기 다 모았습니다!"',
            housing: '"내 집 마련의 꿈! 전세 대출부터 주거비 지원까지 제가 찾아드리지요!"'
        };
        agentMessage.textContent = messages[cat] || messages['all'];
    }

    // Search logic
    searchBtn.addEventListener('click', () => {
        const region = regionSelect.value;
        if (!region) {
            alert('지역을 먼저 선택해 주세요, 사장님!');
            regionSelect.focus();
            return;
        }

        // Base Bojo24 URL for regions
        // Note: Actual Bojo24 deep links vary, but we can redirect to a filtered search
        let targetUrl = `https://www.gov.kr/portal/rcvfvrSvc/dtlEx/local?areaCode=${region}`;
        
        // Add category keywords to search
        const keywords = {
            youth: '청년',
            child: '육아',
            senior: '노인',
            smallbiz: '소상공인',
            housing: '주거',
            all: ''
        };

        if (selectedCategory !== 'all') {
            // Simplified approach: redirect to the region page. 
            // Advanced: link to specific search queries if Bojo24 supports it.
            // For now, let's go to the region's main subsidy page.
            targetUrl = `https://www.gov.kr/portal/rcvfvrSvc/dtlEx/local?areaCode=${region}00000000`;
        }

        window.open(targetUrl, '_blank');
    });
});
