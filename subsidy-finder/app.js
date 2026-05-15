document.addEventListener('DOMContentLoaded', () => {
    const regionSelect = document.getElementById('regionSelect');
    const categoryItems = document.querySelectorAll('.category-item');
    const searchBtn = document.getElementById('searchBtn');
    const resultPanel = document.getElementById('resultPanel');
    const resultList = document.getElementById('resultList');
    const blogSearchBtn = document.getElementById('blogSearchBtn');

    const WP_DOMAIN = 'https://weknews.com';
    const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRroFNPaye9fhBftcTW3ilBuYOgZ_0nnsvEPP9tq1LlRlpcH3G0NA8GW1JVYvkXjeFEr5yMedc83Wwd/pub?output=csv';
    
    let selectedCategory = 'all';
    let subsidyData = {
        youth: [], child: [], senior: [], smallbiz: [], housing: [], all: []
    };

    // 구글 시트 데이터 로드
    async function fetchSubsidies() {
        try {
            const response = await fetch(CSV_URL);
            const csvText = await response.text();
            parseCSV(csvText);
        } catch (error) {
            console.error('데이터 로드 실패:', error);
            subsidyData.all = [{ title: '데이터 로드 실패', desc: '잠시 후 다시 시도해 주세요.', url: '#' }];
        }
    }

    function parseCSV(text) {
        const lines = text.split('\n');
        const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
        
        subsidyData = { youth: [], child: [], senior: [], smallbiz: [], housing: [], all: [] };

                for (let i = 1; i < lines.length; i++) {
                    if (!lines[i].trim()) continue;
                    
                    const values = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
                    if (!values) continue;

                    const row = {};
                    headers.forEach((header, index) => {
                        row[header] = values[index] ? values[index].replace(/^"|"$/g, '').trim() : '';
                    });

                    const cat = row.category ? row.category.toLowerCase() : 'all';
                    if (subsidyData[cat]) {
                        subsidyData[cat].push({
                            title: row.title,
                            desc: row.description,
                            url: row.url
                        });
                    }
                }
    }

    // 초기화 실행
    fetchSubsidies();

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

        searchBtn.textContent = '🕵️ 분석 중...';
        searchBtn.disabled = true;
        resultPanel.style.display = 'none';

        setTimeout(() => {
            searchBtn.textContent = '맞춤 지원금 찾기';
            searchBtn.disabled = false;
            
            renderResults(selectedCategory);
            resultPanel.style.display = 'block';
            resultPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1200);
    });

    function renderResults(cat) {
        resultList.innerHTML = '';
        const items = subsidyData[cat] || [];
        
        if (items.length === 0) {
            resultList.innerHTML = '<div class="result-desc" style="text-align:center; padding:20px;">준비된 지원금이 없습니다.</div>';
        } else {
            items.forEach(item => {
                const a = document.createElement('a');
                a.className = 'result-item';
                a.href = item.url;
                a.innerHTML = `
                    <div class="result-title">${item.title} <span style="font-size:10px; color:#6366f1;">↗ 공식신청</span></div>
                    <div class="result-desc">${item.desc}</div>
                `;
                resultList.appendChild(a);
            });
        }

        const regionName = regionSelect.options[regionSelect.selectedIndex].text;
        const catName = document.querySelector('.category-item.active .category-label').textContent;
        blogSearchBtn.innerHTML = `🎁 <b>${regionName} ${catName !== '전체' ? catName : ''}</b> 숨은 지원금 100% 타먹는 비법 보기 🚨`;
    }

    blogSearchBtn.addEventListener('click', () => {
        const regionName = regionSelect.options[regionSelect.selectedIndex].text;
        const catName = document.querySelector('.category-item.active .category-label').textContent;
        const query = `${catName === '전체' ? '지원금' : catName + ' 지원금'}`;
        const blogUrl = `${WP_DOMAIN}/?s=${encodeURIComponent(query)}`;
        window.location.href = blogUrl;
    });
});
