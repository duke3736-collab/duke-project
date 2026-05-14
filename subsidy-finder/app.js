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
            { title: '청년 월세 지원사업', desc: '월 최대 20만원, 총 12개월간 주거비 지원', url: 'https://www.bokjiro.go.kr' },
            { title: '청년 내일저축계좌', desc: '본인 저축액에 정부가 매칭하여 목돈 마련 지원', url: 'https://www.youthcenter.go.kr' },
            { title: '청년 일자리 도약 장려금', desc: '취업 애로 청년 채용 시 기업 및 청년 지원', url: 'https://www.work.go.kr' }
        ],
        child: [
            { title: '부모급여 지원', desc: '0~1세 아동 부모 대상 월 최대 100만원 지급', url: 'https://www.bokjiro.go.kr' },
            { title: '아동수당', desc: '8세 미만 모든 아동 대상 월 10만원 지급', url: 'https://www.ihappy.or.kr' },
            { title: '첫만남 이용권', desc: '출생 시 바우처 200만원 이상 지급', url: 'https://www.socialservice.or.kr' }
        ],
        senior: [
            { title: '기초연금 지원', desc: '만 65세 이상 소득 하위 70% 대상 월 최대 33만원', url: 'https://basicpension.mohw.go.kr' },
            { title: '노인 일자리 사업', desc: '공익활동, 사회서비스형 등 일자리 및 수당 지원', url: 'https://www.seniorro.or.kr' },
            { title: '노인 맞춤돌봄 서비스', desc: '안전 확인, 가사 지원 등 맞춤형 서비스 제공', url: 'https://www.bokjiro.go.kr' }
        ],
        smallbiz: [
            { title: '소상공인 경영응원금', desc: '매출 감소 소상공인 대상 경영 안정자금 지원', url: 'https://www.sbiz.or.kr' },
            { title: '희망리턴패키지', desc: '폐업 및 재기 지원, 컨설팅 및 교육 제공', url: 'https://hope.sbiz.or.kr' },
            { title: '전통시장 활성화 자금', desc: '저금리 대출 및 시설 현대화 지원', url: 'https://www.semas.or.kr' }
        ],
        housing: [
            { title: '버팀목 전세자금 대출', desc: '근로자 및 서민을 위한 저금리 전세자금 대출', url: 'https://nhuf.molit.go.kr' },
            { title: '주거급여', desc: '소득 인정액 기준 이하 가구 대상 임차료 지원', url: 'https://www.myhome.go.kr' },
            { title: '공공임대주택 입주', desc: 'LH/SH 등 공공주택 저렴한 임대료 입주 지원', url: 'https://apply.lh.or.kr' }
        ],
        all: [
            { title: '보조금24 맞춤 안내', desc: '정부24에서 제공하는 내 맞춤형 혜택 전체보기', url: 'https://www.gov.kr/portal/rcvfvrSvc/main' },
            { title: '긴급 복지 지원', desc: '갑작스러운 위기 상황 시 신속한 생계/의료 지원', url: 'https://www.bokjiro.go.kr' },
            { title: '에너지 바우처', desc: '취약계층 대상 전기/도시가스 비용 지원', url: 'https://www.energyv.or.kr' }
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
            const a = document.createElement('a');
            a.className = 'result-item';
            a.href = item.url;
            a.target = '_blank';
            a.innerHTML = `
                <div class="result-title">${item.title} <span style="font-size:10px; color:#6366f1;">↗ 공식신청</span></div>
                <div class="result-desc">${item.desc}</div>
            `;
            resultList.appendChild(a);
        });

        // Update blog button text
        const regionName = regionSelect.options[regionSelect.selectedIndex].text;
        const catName = document.querySelector('.category-item.active .category-label').textContent;
        blogSearchBtn.innerHTML = `🎁 <b>${regionName} ${catName !== '전체' ? catName : ''}</b> 숨은 지원금 100% 타먹는 비법 보기 🚨`;
    }

    // Blog Action button
    blogSearchBtn.addEventListener('click', () => {
        const regionName = regionSelect.options[regionSelect.selectedIndex].text;
        const catName = document.querySelector('.category-item.active .category-label').textContent;
        const query = `${regionName} ${catName === '전체' ? '' : catName} 지원금 신청방법`;
        const blogUrl = `https://lifestyletripnote.blogspot.com/search?q=${encodeURIComponent(query)}`;
        window.open(blogUrl, '_blank');
    });
});
