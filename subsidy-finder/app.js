document.addEventListener('DOMContentLoaded', () => {
    const regionSelect = document.getElementById('regionSelect');
    const categoryItems = document.querySelectorAll('.category-item');
    const searchBtn = document.getElementById('searchBtn');
    const agentMessage = document.querySelector('.agent-message');
    const resultPanel = document.getElementById('resultPanel');
    const resultList = document.getElementById('resultList');
    const officialBtn = document.getElementById('officialBtn');
    const blogSearchBtn = document.getElementById('blogSearchBtn');

    let selectedCategory = 'all';

    const mockData = {
        youth: [
            { title: '청년 월세 지원사업', desc: '월 최대 20만원, 총 12개월간 주거비 지원' },
            { title: '청년 내일저축계좌', desc: '본인 저축액에 정부가 매칭하여 목돈 마련 지원' },
            { title: '청년 일자리 도약 장려금', desc: '취업 애로 청년 채용 시 기업 및 청년 지원' }
        ],
        child: [
            { title: '부모급여 지원', desc: '0~1세 아동 부모 대상 월 최대 100만원 지급' },
            { title: '아동수당', desc: '8세 미만 모든 아동 대상 월 10만원 지급' },
            { title: '첫만남 이용권', desc: '출생 시 바우처 200만원 이상 지급' }
        ],
        senior: [
            { title: '기초연금 지원', desc: '만 65세 이상 소득 하위 70% 대상 월 최대 33만원' },
            { title: '노인 일자리 사업', desc: '공익활동, 사회서비스형 등 일자리 및 수당 지원' },
            { title: '노인 맞춤돌봄 서비스', desc: '안전 확인, 가사 지원 등 맞춤형 서비스 제공' }
        ],
        smallbiz: [
            { title: '소상공인 경영응원금', desc: '매출 감소 소상공인 대상 경영 안정자금 지원' },
            { title: '희망리턴패키지', desc: '폐업 및 재기 지원, 컨설팅 및 교육 제공' },
            { title: '전통시장 활성화 자금', desc: '저금리 대출 및 시설 현대화 지원' }
        ],
        housing: [
            { title: '버팀목 전세자금 대출', desc: '근로자 및 서민을 위한 저금리 전세자금 대출' },
            { title: '주거급여', desc: '소득 인정액 기준 이하 가구 대상 임차료 지원' },
            { title: '공공임대주택 입주', desc: 'LH/SH 등 공공주택 저렴한 임대료 입주 지원' }
        ],
        all: [
            { title: '긴급 복지 지원', desc: '갑작스러운 위기 상황 시 신속한 생계/의료 지원' },
            { title: '에너지 바우처', desc: '취약계층 대상 전기/도시가스 비용 지원' },
            { title: '디지털 배움터', desc: '전 국민 대상 디지털 역량 강화 교육 무료 제공' }
        ]
    };

    // Category selection logic
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            selectedCategory = item.getAttribute('data-cat');
        });
    });

    // Search logic
    searchBtn.addEventListener('click', () => {
        const region = regionSelect.value;
        const regionName = regionSelect.options[regionSelect.selectedIndex].text;

        if (!region) {
            alert('지역을 먼저 선택해 주세요!');
            regionSelect.focus();
            return;
        }

        // Animation start
        searchBtn.textContent = '🕵️ 분석 중...';
        searchBtn.disabled = true;
        resultPanel.style.display = 'none';

        setTimeout(() => {
            searchBtn.textContent = '맞춤 지원금 찾기';
            searchBtn.disabled = false;
            
            // Show results inside widget
            renderResults(selectedCategory);
            resultPanel.style.display = 'block';
            
            // Scroll to results
            resultPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1200);
    });

    function renderResults(cat) {
        resultList.innerHTML = '';
        const items = mockData[cat] || mockData['all'];
        
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.innerHTML = `
                <div class="result-title">${item.title}</div>
                <div class="result-desc">${item.desc}</div>
            `;
            resultList.appendChild(div);
        });
    }

    // Action buttons
    officialBtn.addEventListener('click', () => {
        const regionName = regionSelect.options[regionSelect.selectedIndex].text;
        const catName = document.querySelector('.category-item.active .category-label').textContent;
        const query = `${regionName} ${catName === '전체' ? '' : catName}`;
        window.open(`https://www.gov.kr/portal/rcvfvrSvc/svcFind/svcSearchAll?searchKeyword=${encodeURIComponent(query.trim())}`, '_blank');
    });

    blogSearchBtn.addEventListener('click', () => {
        const regionName = regionSelect.options[regionSelect.selectedIndex].text;
        const catName = document.querySelector('.category-item.active .category-label').textContent;
        const query = `${regionName} ${catName} 지원금`;
        // Search in the blog
        const blogUrl = `https://lifestyletripnote.blogspot.com/search?q=${encodeURIComponent(query)}`;
        window.open(blogUrl, '_blank');
    });
});
